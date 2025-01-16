// 双指针
function isSubsequence(s: string, t: string): boolean {
  if (s === '') {
    return true;
  }

  let p1 = 0;
  let p2 = 0;

  while (p1 < t.length) {
    if (t[p1] === s[p2]) {
      p2++;

      if (p2 === s.length) {
        return true;
      }
    }

    p1++;
  }

  return false;
};

// const r = isSubsequence("abc", "ahbgdc"); // true
// const r = isSubsequence("axc", "ahbgdc"); // false
// const r = isSubsequence("a", "b"); // false
// const r = isSubsequence("", "abc"); // true
const r = isSubsequence("abc", ""); // false

console.log(r);

export { };
