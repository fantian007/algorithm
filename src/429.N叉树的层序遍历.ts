class _Node {
  val: number;
  children: _Node[];

  constructor(v: number) {
    this.val = v;
    this.children = [];
  }
}

// 二叉树的层序遍历模板 + left,right 判断 改为 children 判断
function levelOrder(root: _Node | null): number[][] {
  if (!root) {
    return [];
  }

  const r: number[][] = [];
  const queue: _Node[] = [root];

  while (queue.length) {
    const len = queue.length;
    const curLevel: number[] = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      curLevel.push(node.val);

      for (const c of node.children) {
        queue.push(c);
      }
    }

    r.push(curLevel);
  }

  return r;
}
