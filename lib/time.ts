export const formatter = (date: Required<Date>, options?: { type?: "default" | "iso" | "ymd" | "hms" | "ymd hms" | "full" }) => {
  const { type = "default" } = options ?? { type: "default" };

  if ("iso" === type) return date.toISOString();

  if ("ymd" === type) return date.toISOString().substring(0, 10);

  const localeStr = date.toLocaleString("ko", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  if ("hms" === type) return localeStr.replace(/\d+\. \d+\. \d+\./, "").trim();

  // if (["full", "ymd hms"].includes(type))
  return localeStr.replace(/(\d+)\. (\d+)\. (\d+)\./, "$1-$2-$3");
};
