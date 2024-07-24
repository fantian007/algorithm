// 获取字符串中 0/1 的数量
const getCnt = (str: string) => {
  let zero = 0;
  let one = 0;

  for (const c of str) {
    if (c === "0") {
      zero++;
    } else {
      one++;
    }
  }

  return { zero, one };
};

function findMaxForm(strs: string[], m: number, n: number): number {
  // dp[i][j]: 最多存放 i 个 0 + 最多存放 j 个 1，值：子集个数（比普通0-1背包多一个维度，二维背包）
  const dp: number[][] = new Array(m + 1)
    .fill(0)
    .map((_) => new Array(n + 1).fill(0));

  // 初始值
  dp[0][0] = 0;

  // 遍历其实是三维，这里使用滚动数组，降为二维
  for (let i = 0; i < strs.length; i++) {
    const { zero, one } = getCnt(strs[i]);

    // 滚动数组，相当于将上一层的结果复制过来了，所以直接从 m,n 处开始遍历
    for (let j = m; j >= zero; j--) {
      for (let k = n; k >= one; k--) {
        // 由于 j >= zero && k >= one, 所以当前背包可以将 strs[i] 放入，子集个数 + 1
        dp[j][k] = Math.max(dp[j][k], dp[j - zero][k - one] + 1);
      }
    }
  }

  return dp[m][n];
}

const r = findMaxForm(["10", "0", "1"], 1, 1);
console.log(r);

export {};
