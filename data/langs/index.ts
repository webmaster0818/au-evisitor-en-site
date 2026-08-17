import type { LangContent } from "./_schema";
import { de } from "./de";

/**
 * 言語ディレクトリの登録簿。
 * ⚠️ 英語はルート（/）で配信しているのでここには入れない。
 *    hreflang では en = SITE のルートを指す。
 */
export const LANGS: Record<string, LangContent> = { de };
export const LANG_CODES = Object.keys(LANGS);
export type { LangContent };
