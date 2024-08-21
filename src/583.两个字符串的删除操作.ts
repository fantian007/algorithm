/**
 * https://programmercarl.com/0583.%E4%B8%A4%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%88%A0%E9%99%A4%E6%93%8D%E4%BD%9C.html#%E6%80%9D%E8%B7%AF
 */
function minDistance(word1: string, word2: string): number {
  const len1 = word1.length;
  const len2 = word2.length;

  // word1 取 [0, i-1]，word2 取 [0, j-1]，2个字符串相等需要删除的最少步骤
  const dp = new Array(len1 + 1).fill(0).map(_ => new Array(len2 + 1).fill(0));

  for (let i = 0; i <= len1; i++) {
    dp[i][0] = i;
  };

  for (let j = 0; j <= len2; j++) {
    dp[0][j] = j;
  };

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 如果相等，什么都不做
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 如果不相等, 有 3 种情况
        // word1 删除一个字符
        // word2 删除一个字符
        // word1, word2 都删除一个字符
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 2);
      }
    };
  };

  return dp[len1][len2];
};

// const r = minDistance('sea', 'eat'); // 2
const r = minDistance('leetcode', 'etco'); // 4
// const r = minDistance('a', 'b'); // 2
console.log(r);

export { }