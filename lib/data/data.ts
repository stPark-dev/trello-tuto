import type { DataRule, DataRules, RecordInvalidateDescription } from "../../types/data";

/**
 * 빈 값 검사
 *
 * @description
 * `null`, `undefined`, `""`, `NaN` 네가지 값은 `비어있는 값`으로 간주한다.
 * 파라미터의 모든 값을 검사하며 하나라도 비어있는 값이 있다면 `true`를 반환한다.
 *
 * @example
 * if (isEmpty(myValue)) throw new Error("값이 비어있습니다.");
 * if (isEmpty(myValue1, myValue2)) throw new Error("값이 비어있는 변수가 존재합니다.");
 *
 * @param [value [,...value]] 검사할 값
 * @return boolean
 */
export const isEmpty = (...value: Array<unknown>): boolean => [null, undefined, "", NaN].some(empty => value.flatMap(e => e).includes(empty));

/**
 * 비밀번호 유효성 검사
 *
 * @description
 * 비밀번호의 복잡도를 검사한다. `공백 불가` + `특문,영,숫자 조합 9자리 이상` 이어야 한다.
 *
 * @example
 * const error = complexity(myPassword);
 * if (error) throw new Error(error);
 *
 * @param password 검사할 문자열
 * @return `오류메시지` | `undefined`
 */
export const complexity = (password = ""): string | undefined => {
  // 자주 사용되는 함수가 아니므로 실행될 때 선언한다.
  const allowedSpecialCharacters = [`#`, `?`, `!`, `@`, `$`, `%`, `^`, `&`, `*`, `-`];

  if (/\s/.test(password)) return `공백이 포함되어서는 안됩니다.`;

  if (!/[a-zA-Z]/.test(password)) return `영문자가 반드시 포함되어야 합니다.`;

  if (!/[0-9]/.test(password)) return `숫자가 반드시 포함되어야 합니다.`;
  if (!new RegExp(`[${allowedSpecialCharacters.join("")}]`).test(password))
    return `다음 중 하나 이상의 특수문자가 반드시 포함되어야합니다. ${allowedSpecialCharacters.map(c => `\`${c}\``).join(", ")}`;

  if (!/^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{9,}$/.test(password))
    return `비밀번호는 반드시 공백없이 9자 이상의 영문자 + 숫자 + 특수문자 조합이어야 합니다.`;
};

/**
 * 데이터내 필드 유효성 검사
 *
 * @description
 * JSON 데이터내의 필드 유효성을 검사한다. `Record<키, 값>` 형태의 단순한 형태의 JSON만 검사할 수 있다.
 *
 * @example
 * const error = dataInvalidate({ hello: "world" }, "hello", { required: true });
 *
 * if (error === undefined) {
 *   return console.info("유효한 데이터입니다.");
 * }
 *
 * if (error === null) throw new Error("알 수 없는 오류");
 * throw new Error(error);
 *
 * @param source Record<키, 값>
 * @param key 검사할 필드 키
 * @param rule 필드 검사 규칙
 * @returns string: 오류메시지 | null: 정의되지 않은 오류 | void: 오류없음
 */
export const dataInvalidate = (source: Record<string, unknown>, key: string, rule?: DataRule): string | null | void => {
  if (!rule) return;

  const { required, validator, maxLength, min, max } = rule ?? {};
  const value = source[key];

  if (required && isEmpty(value)) return "필수 항목 입니다.";

  if ("string" === typeof value) {
    if (maxLength && maxLength < value.length) return `"${maxLength}" 글자보다 많이 입력할 수 없습니다.: "${value.length - maxLength}" 초과`;
  }

  if ("number" === typeof value) {
    if (max && max > value) return `"${max}" 보다 큰 값을 입력할 수 없습니다.`;

    if (min && min < value) return `"${min}" 보다 작은 값을 입력할 수 없습니다.`;
  }

  if (validator instanceof Function) return validator(source, value);
};

/**
 * 데이터 유효성 검사
 *
 * @description
 * JSON 데이터의 유효성을 검사한다. `Record<키, 값>` 형태의 단순한 형태의 JSON만 검사할 수 있다.
 *
 * @example
 * const errors = dataInvalidate({ hello: "world", javascript: "hello, world!" }, {
 *   hello: { required: true },
 *   javascript: { required: true },
 * });
 *
 * @param record Record<키, 값>
 * @param rules 검사 규칙
 * @returns Record<키, string: 오류메시지 | null: 정의되지 않은 오류 | void: 오류없음>
 */
export const recordInvalidate = (record: Record<string, unknown>, rules?: DataRules): RecordInvalidateDescription => {
  const ruleKeys = Object.keys(rules ?? {});

  return ruleKeys.reduce((acc, key) => {
    const invalidate = dataInvalidate(record, key, rules?.[key]);
    if (invalidate === undefined) return acc;

    return Object.assign(acc, { [key]: invalidate });
  }, {});
};
