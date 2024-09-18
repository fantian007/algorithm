// 双指针
function isSubsequence(s: string, t: string): boolean {
  // 遍历 s
  let p1 = 0;
  // 遍历 t
  let p2 = 0;

  while (p1 < s.length && p2 < t.length) {
    // 不相同，遍历 t
    while (p2 < t.length && s[p1] !== t[p2]) {
      p2++;
    }

    // 遍历完了 t，但是 s 还未遍历完(如果遍历完，会在上次循环中返回，不会进入本次循环)，直接返回 false
    if (p2 === t.length) {
      return false;
    }

    // s,t 均为遍历完，当前字符又相同，继续比较下一位字符
    p1++;
    p2++;

    // s 遍历完了，返回 true
    if (p1 === s.length) {
      return true;
    }
  }

  // 判断 p1 是否遍历完毕
  return p1 === s.length;
};

// const r = isSubsequence("abc", "ahbgdc"); // true
// const r = isSubsequence("axc", "ahbgdc"); // false
// const r = isSubsequence("a", "b"); // false
// const r = isSubsequence("", "abc"); // true
const r = isSubsequence("abc", ""); // false

console.log(r);

export { };
