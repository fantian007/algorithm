/**
 * 注意是二叉搜索树
 * 如果 1-i 中选一个数 j 作为头节点，那么 左子树 有 j-1 个节点，右子树有 i-j 个节点
 * 假设 j-1 个节点组成的二叉搜索树数量为 dp[j-1]，i-j 个节点组成的数量为 dp[i-j]，那么数量是 左子树数量 * 右子树数量
 */
function numTrees(n: number): number {
  // dp[i]：i 为头节点组成的二叉搜索树的个数为 dp[i]
  const dp: number[] = new Array(n + 1).fill(0);

  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    // 不停地调整 j 的位置
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
}

const r = numTrees(3);
console.log(r);

export {};
