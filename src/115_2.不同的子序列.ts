/**
 * @see https://leetcode.cn/problems/distinct-subsequences/solutions/661537/shou-hua-tu-jie-xiang-jie-liang-chong-ji-4r2y/
 */
function numDistinct(s: string, t: string): number {
  const mem = new Array(s.length).fill(0).map(_ => new Array(t.length).fill(-1));

  const helper = (i, j) => {
    // 注意：要先判断 j
    if (j < 0) {
      return 1;
    }

    if (i < 0) {
      return 0;
    }

    if (mem[i][j] !== -1) {
      return mem[i][j];
    }

    if (s[i] === t[j]) {
      mem[i][j] = helper(i - 1, j - 1) + helper(i - 1, j);
    } else {
      mem[i][j] = helper(i - 1, j);
    }

    return mem[i][j];
  }

  return helper(s.length - 1, t.length - 1);
};

const r = numDistinct('rabbbit', 'rabbit'); // 3
// const r = numDistinct('babgbag', 'bag'); // 5

console.log(r);

export {

}
