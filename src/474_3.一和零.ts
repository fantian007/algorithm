// 三维降二维
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
  // dp[i][j]: 最多有 i 个 0，j 个 1 子集个数
  const dp: number[][] = new Array(m + 1)
    .fill(0)
    .map((_) => new Array(n + 1).fill(0));

  for (let i = 0; i < strs.length; i++) {
    const { zero, one } = getCnt(strs[i]);

    for (let j = m; j >= zero; j--) {
      for (let k = n; k >= one; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - zero][k - one] + 1);
      }
    }
  }

  return dp[m][n];
}

// const t = findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3); // 4
const t = findMaxForm(["10", "0", "1"], 1, 1);
console.log(t);

export {};
