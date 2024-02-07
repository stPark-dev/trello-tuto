import { entriesToJSON } from "../iterator";
import type { Replacer } from "../../types/data";

/**
 * `Headers` 객체를 JSON으로 변환한다.
 *
 * @description
 * `Headers` 객체를 JSON으로 변환한다.
 *
 * @example
 * const headers = headersToJSON(new Headers({ hello: "world" }))
 *
 * @param headers `Headers`
 * @returns Record<키, 값>
 */
export const headersToJSON = (headers: Headers): Record<string, any> => {
  const replacer: Replacer = (k: string, v: unknown): unknown => v;

  return entriesToJSON(headers.entries(), replacer);
};
