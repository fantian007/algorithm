// 动规（交错需要保证字符串分割之后出现的顺序，不能简单的比较各字符出现的数量是否相同）
function isInterleave(s1: string, s2: string, s3: string): boolean {
  const m = s1.length;
  const n = s2.length;
  const k = s3.length;

  // 总长度不匹配
  if (m + n !== k) {
    return false;
  }

  // dp[i][j]: s1 截取 [0, i), s2 截取 [0, j) ，2个子字符串 是否能 交错组合成 s3 的 [0, i + j)，左闭右开
  const dp = new Array<boolean[]>(m + 1).fill([]).map(_ => new Array(n + 1).fill(false));

  // 初始化，相当于 '' + '' = ''，所以为 true
  dp[0][0] = true;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const p = i + j - 1;

      // i === 0 的情况，上面初始条件 已处理过了
      if (i > 0) {
        // 如果 s1 的第i位 === s3 的第 i + j 位，想要符合答案，前提是： s1 的前 i-1 位 和 s2 的前 j 位，要能组成 s3 的 i + j - 1 位，即：dp[i-1][j] === true
        dp[i][j] ||= dp[i - 1][j] && s1[i - 1] === s3[p];
      }

      if (j > 0) {
        // 同上
        dp[i][j] ||= dp[i][j - 1] && s2[j - 1] === s3[p];
      }
    };
  };

  return dp[m][n];
};

// const r = isInterleave('aabcc', 'dbbca', 'aadbbcbcac');
const r = isInterleave('aabcc', 'dbbca', 'aadbbbaccc');
console.log(r);

export { }
