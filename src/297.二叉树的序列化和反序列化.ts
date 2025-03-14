import { createTree, TreeNode } from "./BinaryTree";

// 序列化函数
function serialize(root) {
  if (!root) return 'null';

  const result = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val.toString());
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push('null');
    }
  }

  // 去除末尾连续的 null
  while (result.length > 0 && result[result.length - 1] === 'null') {
    result.pop();
  }

  return result.join(',');
}

// 反序列化函数
function deserialize(data) {
  if (data === 'null') return null;

  const values = data.split(',');

  const root = new TreeNode(Number(values[0]));
  // 恢复的时候也是层序遍历
  const queue = [root];
  let i = 1;
  
  while (queue.length > 0 && i < values.length) {
    const node = queue.shift();

    // null 节点不入队列，不用给父节点挂 null
    if (values[i] !== 'null') {
      node.left = new TreeNode(Number(values[i]));
      queue.push(node.left);
    }
    i++;

    if (i < values.length && values[i] !== 'null') {
      node.right = new TreeNode(Number(values[i]));
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

const str = serialize(createTree([1, 2, 3, null, null, 4, 5]));
console.log(str);
// const tree = deserialize(str);
const tree = deserialize(str);
console.log(tree);
