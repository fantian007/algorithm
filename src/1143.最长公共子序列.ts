/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  const len1 = text1.length;
  const len2 = text2.length;
  const memo: number[][] = Array.from({ length: len1 }, () => new Array(len2).fill(-1));

  const dp = (s1: string, i: number, s2: string, j: number): number => {
    if (i === len1 || j === len2) {
      return 0;
    }

    if (memo[i][j] !== -1) {
      return memo[i][j];
    }

    if (s1[i] === s2[j]) {
      memo[i][j] = 1 + dp(s1, i + 1, s2, j + 1);
    } else {
      memo[i][j] = Math.max(
        dp(s1, i + 1, s2, j),
        dp(s1, i, s2, j + 1),
      );
    }

    return memo[i][j];
  }

  return dp(text1, 0, text2, 0);
};
// @lc code=end

