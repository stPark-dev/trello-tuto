export type RecordInvalidateDescription = Record<string, string | null>;

export type DataRule = {
  required?: boolean;
  maxLength?: number;
  min?: number;
  max?: number;
  validator?: (source: Record<string, unknown>, value: unknown) => string | null | void;
};

export type DataRules = {
  [key: string]: DataRule;
};

export type FieldRule = DataRule & {
  effects?: Array<string>;
};

export type FieldRules = {
  [key: string]: FieldRule;
};

export type Replacer = (k: string, v: unknown) => unknown;
