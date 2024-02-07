import type { Replacer } from "../types/data";
import { isEmpty } from "./data/data";

/**
 * `IterableIterator`의 모든 엔트리를 JSON으로 변환한다.
 *
 * @description
 * `IterableIterator`에 정의된 데이터들을 JSON객체로 반환한다.
 *
 * @example
 * <form ref={formRef}>
 *   <input name="hello" value="world" />
 * </form>
 *
 * const formData = new FormData(formRef.current);
 * const json = entriesToJSON(formData.entries(), null, options);
 *
 * @param entries `IterableIteratorEntries`
 * @param replacer JSON을 구성할 때 데이터를 변환할 수 있는 함수
 * @param options.trim `true`로 설정되면 값이 비어있는 키는 제거한다. 기본값: `undefined`
 * @returns Record<키, 값>
 */

export const entriesToJSON = <R = Record<string, unknown>>(
  entries: IterableIterator<[string, FormDataEntryValue]>,
  replacer?: Replacer,
  options?: { trim?: boolean }
): R => {
  const data: Record<string, any> = {};

  let cursor;
  while (!(cursor = entries.next()).done) {
    const entry = cursor.value as [string, unknown];

    const [k] = entry;
    let [, v] = entry;

    if (options?.trim && isEmpty(v)) continue;

    if (replacer instanceof Function) v = replacer(k, v);

    const prevValue = data[k];

    if (undefined === prevValue) Object.assign(data, { [k]: v });
    else if (Array.isArray(prevValue)) Object.assign(data, { [k]: prevValue.concat(v) });
    else Object.assign(data, { [k]: [prevValue].concat(v) });
  }

  return data as R;
};
