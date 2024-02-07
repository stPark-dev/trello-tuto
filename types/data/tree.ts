export type TreeNode = {
  _id: string;
  path: string;
  name: string | undefined;
  ref?: string;
  children?: Array<TreeNode>;
  [k: string]: unknown;
};
