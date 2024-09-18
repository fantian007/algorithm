/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  const EC = ' ';

  const ns = s[0] === EC ? s : EC + s; // 首位填充空格，为了后续好计算
  const len = ns.length;
  let ca: string[] = [];

  let p1 = len - 1;
  let p2 = p1;

  while (p1 > 0) {
    while (p1 > 0 && ns[p1] === EC) {
      p1--;
      p2--;

      continue;
    }

    p2 = p1 + 1;

    while (p1 > 0 && ns[p1] !== EC) {
      p1--;

      continue;
    }

    if (p1 + 1 === p2 && ns[p1] === EC) {
      break;
    }

    const w = ns.slice(p1 + 1, p2);
    ca.push(w);

    p2 = p1;
  }

  return ca.join(' ');
};
// @lc code=end

console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("  hello world  "));
// console.log(reverseWords("a good   example"));

export {};
