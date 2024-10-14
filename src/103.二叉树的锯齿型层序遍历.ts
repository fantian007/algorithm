import { TreeNode, createTree } from './BinaryTree';


function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const queue: TreeNode[] = [root];
  let r: number[][] = [];
  let flag = 1;

  while (queue.length) {
    const len = queue.length;
    const curLevel: number[] = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      curLevel.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    };

    r.push(flag  === 1 ? curLevel : curLevel.reverse());

    flag = flag * -1;
  }

  return r;
};

// const tree = createTree([3, 9, 20, null, null, 15, 7])
const tree = createTree([1, 2, 3, 4, null, null, 5]);
const r = zigzagLevelOrder(tree);
console.log(JSON.stringify(r));

export { }
