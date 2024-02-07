import { tzdate } from "../time";

enum FormatType {
  "default" = "default",
  "iso" = "iso",
  "ymd" = "ymd",
  "hms" = "hms",
  "md h" = "md h",
  "md hm" = "md hm",
  "ymd h" = "ymd h",
  "ymd hm" = "ymd hm",
  "ymd hms" = "ymd hms",
  "full" = "full",
  "log" = "log",
  "LLL" = "LLL",
}

/**
 * 날짜를 다양한 형식으로 반환한다.
 *
 * @description
 * 날짜 객체를 지정된 형식으로 변환한다.
 *
 * @example
 * formatter(new Date(), { type: "ymd hm" })
 *
 * @param date `Date` | `number`
 * @param options.type `default` | `iso` | `ymd` | `hms` | `md h` | `md hm` | `ymd h` | `ymd hm` | `ymd hms` | `full` | `log` | `LLL`
 * @returns string
 */
export const string = (timestamp: Date | number, options?: { type?: keyof typeof FormatType }) => {
  const datetime = timestamp instanceof Date ? timestamp : new Date(timestamp);

  const { type = "default" } = options ?? { type: "default" };

  if ("iso" === type) return datetime.toISOString();

  if ("ymd" === type) return datetime.toISOString().substring(0, 10);

  /**
   * `toLocaleString()` 함수는 자동으로 OFFSET을 추가하므로
   * 인터벌을 계산해야한다.
   */
  const tzdatetime = tzdate(datetime);

  const intlOptions: Intl.DateTimeFormatOptions = { hourCycle: "h23" };

  if ("LLL" === type) return tzdatetime.toLocaleString(undefined, intlOptions);

  const localeStr = tzdatetime.toLocaleString(undefined, {
    ...intlOptions,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  if ("hms" === type) return localeStr.replace(/\d+\. \d+\. \d+\./, "").trim();

  const full = localeStr.replace(/(\d+)\. (\d+)\. (\d+)\./, "$1-$2-$3");

  if ("md h" === type) return full.replace(/^\d+-|(:\d+){2}$/g, "");
  if ("ymd h" === type) return full.replace(/(:\d+){2}$/g, "");
  if ("md hm" === type) return full.replace(/^\d+-|:\d+$/g, "");
  if ("ymd hm" === type) return full.replace(/:\d+$/g, "");

  // if (["full", "ymd hms", "log"].includes(type))
  return full;
};
