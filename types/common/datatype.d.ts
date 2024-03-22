export type RegularValues = string | number | boolean | Array;
export type DataObject = Record<string, RegularValues | DataObject>;

export type Values = RegularValues | DataObject;

export type ResponseItem<SourceProps> = { _id: string; _source: SourceProps };

export type PaginationResponse<SourceProps = DataObject> = { total: number; rows: Array<ResponseItem<SourceProps>> };

export type ConvertAllKeysToString<T> = {
  [K in keyof T]: string;
};

export type ThemeNames = "light" | "dark";

/**
 * AppRouteHandlerFnContext is the context that is passed to the handler as the
 * second argument.
 *
 * @description
 * next.js 13 app router 에서 추가된 type으로 future 패키지에 있음
 */
export type AppRouteHandlerFnContext = {
  params?: Record<string, string | string[]>;
};

/**
 * 관련된 Type이 없어서 선언해서 사용
 */
export type AppRoutePageFnContext = { params: Params; searchParams: Params };
