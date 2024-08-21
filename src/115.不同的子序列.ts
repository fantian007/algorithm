/**
 * @see https://leetcode.cn/problems/distinct-subsequences/solutions/661537/shou-hua-tu-jie-xiang-jie-liang-chong-ji-4r2y/
 */
function numDistinct(s: string, t: string): number {
  const helper = (i, j) => {
    // 注意：要先判断 j
    if (j < 0) {
      return 1;
    }

    if (i < 0) {
      return 0;
    }

    if (s[i] === t[j]) {
      return helper(i - 1, j - 1) + helper(i - 1, j);
    } else {
      return helper(i - 1, j);
    }
  }

  return helper(s.length - 1, t.length - 1);
};

const r = numDistinct('rabbbit', 'rabbit'); // 3
// const r = numDistinct('babgbag', 'bag'); // 5

console.log(r);

export {

}
