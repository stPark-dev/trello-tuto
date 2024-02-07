/**
 * 천단위 콤마
 *
 * @description
 * 주어진 숫자값을 천단위에 콤마(,)를 포매팅하여 문자로 반환한다.
 *
 * @example
 * thousandly(1000);
 * thousandly(1000.001);
 *
 * @param value number
 * @returns string
 */
export const thousandly = (value: number) => {
  const [integer = "", float = ""] = String(value).split(".");
  const formatted = integer.replace(/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g, "$&,");

  return formatted.concat(float);
};
