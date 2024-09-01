/**
 * @see https://programmercarl.com/0647.%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2.html#%E6%80%9D%E8%B7%AF
 */
function countSubstrings(s: string): number {
  // dp[i][j]，[i, j] 区间字符串是否是回文
  // 注意本题的 dp 定义和题目要求的结果不是直接相等的，而是另一种定义，但使用 额外变量 r 来记录最后结果
  const dp = new Array(s.length).fill(0).map(_ => new Array(s.length).fill(false));

  let r = 0;

  /**
   * 注意：由递归公式，dp[i][j] 依赖 dp[i+1][j-1]，必须先算出 dp[i+1][j-1]，这时候要注意遍历的顺序
   * i 必须是 大 -> 小，j 必须是 小 -> 大
   * 所以外层循环倒序，内层循环正序
   */
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[j] === s[i]) {
        // 如果 j === i，那么是同一个字符，一定是回文
        // 如果 j - i = 1，那么类似 aa，是回文
        if (j - i <= 1) {
          dp[i][j] = true;
          r++;
        }
        // 如果 j - i > 1，那么类似 abcba，如果子区间 dp[i+1][j-1] 是回文，首尾字符又相等，那么 [i][j] 区间也是回文
        else if (dp[i + 1][j - 1]) {
          dp[i][j] = true;
          r++;
        }
      } else {
        dp[i][j] = false;
      }
    };
  };

  return r;
};

const r = countSubstrings('abc'); // 3
// const r = countSubstrings('aaa'); // 6
// const r = countSubstrings('fdsklf'); // 6
console.log(r);

export { };
