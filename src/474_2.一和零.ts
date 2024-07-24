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
  // dp[k][i][j]: 最多存放 i 个 0 + 最多存放 j 个 1，值：子集个数（比普通0-1背包多一个维度，二维背包）,k 是商品编号
  const dp: number[][][] = new Array(strs.length)
    .fill(0)
    .map((_) => new Array(m + 1).fill(0).map((_) => new Array(n + 1).fill(0)));

  const firstStrCnt = getCnt(strs[0]);

  for (let i = firstStrCnt.zero; i <= m; i++) {
    for (let j = firstStrCnt.one; j <= n; j++) {
      dp[0][i][j] = 1;
    }
  }

  for (let i = 1; i < strs.length; i++) {
    const { zero, one } = getCnt(strs[i]);

    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        // 装不下 0/1, 不装商品 i
        if (j < zero || k < one) {
          dp[i][j][k] = dp[i - 1][j][k];
        }
        // 能装下，取最大值
        else {
          dp[i][j][k] = Math.max(
            dp[i - 1][j][k],
            dp[i - 1][j - zero][k - one] + 1
          );
        }
      }
    }
  }

  return dp[strs.length - 1][m][n];
}

const r = findMaxForm(["10", "0", "1"], 1, 1);
console.log(r);

export {};
