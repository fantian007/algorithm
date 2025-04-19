import { TreeNode, createTree } from './BinaryTree';

class BSTIterator {
  arr: number[] = [];
  i = 0;

  constructor(root: TreeNode | null) {
    this.traverse(root);
  }

  // 中序遍历
  traverse(node: TreeNode | null) {
    if (!node) {
      return;
    }

    this.traverse(node.left);
    this.arr.push(node.val);
    this.traverse(node.right);
  }

  next(): number {
    return this.arr[this.i++];
  }

  hasNext(): boolean {
    return this.arr[this.i] !== undefined;
  }
}

const tree = createTree([7, 3, 15, null, null, 9, 20]);
const r = new BSTIterator(tree);

console.log(r.next()); // 3
console.log(r.next()); // 7
console.log(r.hasNext()); // true
console.log(r.next()); // 9
console.log(r.hasNext()); // true
console.log(r.next()); // 15
console.log(r.hasNext()); // true
console.log(r.next()); // 20
console.log(r.hasNext()); // false

export { }
