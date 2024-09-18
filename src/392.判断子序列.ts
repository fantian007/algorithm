// t 中找 s
function isSubsequence(s: string, t: string): boolean {
  // 边界
  if (s === '') {
    return true;
  }

  // s 字符串遍历位置
  let s1;
  // t 字符串遍历位置
  let s2 = -1;

  // 遍历 s
  for (let i = 0; i < s.length; i++) {
    // 遍历 t, 用 s2 的下一个位置开始
    for (let j = s2 + 1; j < t.length; j++) {
      // 如果相等，记录双方位置
      if (s[i] === t[j]) {
        s1 = i;
        s2 = j;
        // 直接跳出，从 s 的下一位开始比较
        break;
      }

      // 如果 t 字符串遍历到最后了，说明没有找到和 s[i] 相同的（没有 break)，那么代表 t 中没有 s[i]，直接返回 false
      if (j === t.length - 1) {
        return false;
      }
    };
  };

  // 最终看 s1 有没有记录到 s 的最后一位
  return s1 === s.length - 1;
};

// const r = isSubsequence("abc", "ahbgdc"); // true
const r = isSubsequence("axc", "ahbgdc"); // false

console.log(r);

export { };
