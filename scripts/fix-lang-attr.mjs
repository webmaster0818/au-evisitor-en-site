// ビルド後に言語ディレクトリのHTMLの <html lang="en"> を各言語コードへ書き換える。
// ⚠️ ルートlayoutは全ページ共通なので lang を分けられない。export後に直すのが確実。
//    （NZ/AU/KRの3サイトとも同じ事情。language dirを追加したら必ずこれを通す）
import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const langs = readdirSync("data/langs")
  .filter((f) => f.endsWith(".ts") && !f.startsWith("_") && f !== "index.ts")
  .map((f) => f.replace(/\.ts$/, ""));

let fixed = 0;
function walk(dir, lang) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, lang);
    else if (e.endsWith(".html")) {
      const s = readFileSync(p, "utf8");
      if (s.includes('<html lang="en"')) {
        writeFileSync(p, s.replace('<html lang="en"', `<html lang="${lang}"`));
        fixed++;
      }
    }
  }
}
for (const lang of langs) {
  const dir = join(OUT, lang);
  try { statSync(dir); } catch { continue; }
  walk(dir, lang);
}
console.log(`fix-lang-attr: ${langs.join(",")} / ${fixed}ファイルの <html lang> を修正`);
