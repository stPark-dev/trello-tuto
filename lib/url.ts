import { entriesToJSON } from "./iterator";
import type { Replacer } from "../types/data";

/**
 * URL 해석기
 *
 * @description
 * URL의 부분들을 해석하여 JSON으로 반환한다.
 *
 * @example
 * const parsed = parse("redis://hello:world@example.com:6379/0")
 *
 * @param url URL 주소
 * @returns [URL 객체](https://developer.mozilla.org/en-US/docs/Web/API/URL) + baseurl
 */
export const parse = (url: string): URL & { baseurl: string } => {
  const hasAuthentication = url.includes("@");

  if (!hasAuthentication) {
    const [protocol, body] = url.split("//");

    const hasPathname = body.includes("/");

    const hostnameEndIndex = hasPathname ? body.indexOf("/") : undefined;
    const hostname = body.substring(0, hostnameEndIndex);

    const baseurl = `${protocol}//${hostname}`;

    const parsed = new URL(url);

    return Object.assign(parsed, { baseurl });
  }

  const [head, tail] = url.split("@");

  const heads = head.split("//");

  const [protocol] = heads;
  let [, authorization] = heads;

  const isUsernamePasswordPair = authorization.includes(":");

  if (isUsernamePasswordPair) {
    const [username, password] = authorization.split(":");
    authorization = `${encodeURIComponent(username)}:${encodeURIComponent(password)}`;
  } else {
    // password only
    authorization = `:${encodeURIComponent(authorization)}`;
  }

  const parsed = new URL(`${protocol}//${authorization}@${tail}`);

  const hasPathname = tail.includes("/");

  const hostnameEndIndex = hasPathname ? tail.indexOf("/") : undefined;
  const hostname = tail.substring(0, hostnameEndIndex);

  const baseurl = `${protocol}//${hostname}`;

  return Object.assign(parsed, { baseurl });
};

/**
 * `URLSearchParams` 객체를 JSON으로 변환한다.
 *
 * @description
 * `URLSearchParams` 객체를 JSON으로 변환한다.
 *
 * @example
 * const searchParams = searchParamsToJSON(new SearchParams({ hello: "world" }))
 *
 * @param urlSearchParams `URLSearchParams`
 * @returns Record<키, 값>
 */
export const searchParamsToJSON = (urlSearchParams: URLSearchParams): Record<string, any> => {
  const replacer: Replacer = (k: string, v: unknown): unknown => v;

  return entriesToJSON(urlSearchParams.entries(), replacer);
};
