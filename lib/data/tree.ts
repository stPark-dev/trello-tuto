import type { TreeNode } from "../../types/data/tree";

/**
 * 직렬화 트리를 중첩트리로 변환한다.
 *
 * @description
 * 1차원 배열로 구성된 트리 데이터를 중첩된 JSON 객체로 변환한다.
 * 모든 노드는 중복되지 않는 유일한 `_id` 필드를 가지고 있어야하며, 하위 노드는 상위노드의 `_id`를 나타낼 수 있는 `ref` 필드를 가지고 있어야한다. 하위 노드는 상위 노드의 `children` 필드에 배열로 포함되된다. `ref`노드가 비어있는 노드는 최상위 노드이다.
 *
 * @example
 * const serialized = [
 *  { _id: "a", name: "최상위노드" },
 *  { _id: "a-1", ref: "a", name: "하위노드" },
 * ];
 *
 * const nested = toNested(treedata);
 *
 * @param serialized 직렬화된 트리데이터
 * @returns 중첩화된 트리데이터
 */
export const toNested = (serialized: Array<TreeNode>): Array<TreeNode> => {
  // 변경가능한 객체로 클론
  const clone = serialized.map(({ ...node }) => node);

  // 하위노드 검색용
  const subnodes = clone.filter(({ ref }) => Boolean(ref));

  return clone
    .reduce((acc, node) => {
      const { _id } = node;

      node.children = subnodes.filter(({ ref }) => ref === _id);

      return acc.concat(node);
    }, [] as Array<TreeNode>)
    .filter(({ ref }) => !ref);
};
