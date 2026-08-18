import type { LangContent } from "./_schema";
import { de } from "./de";
import { ko } from "./ko";
import { zh } from "./zh";

/**
 * 言語ディレクトリの登録簿。
 * ⚠️ 英語はルート（/）で配信しているのでここには入れない。
 *    hreflang では en = SITE のルートを指す。
 * ⚠️ 韓国語(ko)・簡体字(zh)の読者は **eVisitorの対象外**（欧州36か国限定）。
 *    両言語版は「あなたに必要なのはETA(601)」という内容にしてある。中身を独語版と混同しないこと。
 */
export const LANGS: Record<string, LangContent> = { de, ko, zh };
export const LANG_CODES = Object.keys(LANGS);
export type { LangContent };
