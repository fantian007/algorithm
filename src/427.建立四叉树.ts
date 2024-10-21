class _Node {
  val: boolean
  isLeaf: boolean
  topLeft: _Node | null
  topRight: _Node | null
  bottomLeft: _Node | null
  bottomRight: _Node | null
  constructor(val?: boolean, isLeaf?: boolean, topLeft?: _Node, topRight?: _Node, bottomLeft?: _Node, bottomRight?: _Node) {
    this.val = (val === undefined ? false : val)
    this.isLeaf = (isLeaf === undefined ? false : isLeaf)
    this.topLeft = (topLeft === undefined ? null : topLeft)
    this.topRight = (topRight === undefined ? null : topRight)
    this.bottomLeft = (bottomLeft === undefined ? null : bottomLeft)
    this.bottomRight = (bottomRight === undefined ? null : bottomRight)
  }
}

// todo
// @see https://leetcode.cn/problems/construct-quad-tree/?envType=study-plan-v2&envId=top-interview-150
function construct(grid: number[][]): _Node | null {
  return null;
};

const r = construct([[0, 1], [1, 0]]);
console.log(r);

export { }

