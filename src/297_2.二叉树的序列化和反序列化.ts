import { createTree, TreeNode } from "./BinaryTree";

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const r = [];

  const preorder = (root: TreeNode | null) => {
    if (!root) {
      r.push('null');
      return;
    };

    r.push(root.val);

    // 注意：每个节点必须包含2个子节点，不存在的节点要用 null 填充，否则反序列化时，无法由顺序还原
    preorder(root.left);
    preorder(root.right);
  }

  preorder(root);

  return r.join(',')
};

/*
* Decodes your encoded data to tree.
*/
function deserialize(data: string): TreeNode | null {
  let i = 0;
  const vals = data.split(',');

  const buildTree = () => {
    // 注意：i 不能直接提取到上面，会提前 +1，使 if 判断错误
    if (i >= vals.length || vals[i] === 'null') {
      i++;
      return null;
    }

    const node = new TreeNode(Number(vals[i]));
    i++;

    node.left = buildTree();
    node.right = buildTree();

    return node;
  }

  return buildTree();
};


// 构建一个简单的二叉树
const root = createTree([]);
// const root = createTree([1, 2, 3, null, null, 4, 5]);
// 序列化二叉树
const serialized = serialize(root);
console.log('Serialized:', serialized);

// 反序列化字符串
const deserialized = deserialize(serialized);
console.log('Deserialized root value:', deserialized.val); 