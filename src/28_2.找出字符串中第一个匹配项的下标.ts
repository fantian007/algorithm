/**
 * 使用 KMP
 */
function strStr(haystack: string, needle: string): number {
  /**
   * 获取前缀表
   * 其实就是拆分为2个字符串： aabaaa（前缀） 和 abaaac（后缀），求2个字符串的 KMP
   */
  const getNext = (str: string) => {
    const next = [0];
    let j = 0;

    for (let i = 1; i < str.length; i++) {
      while (j > 0 && str[i] !== str[j]) {
        // 跳位
        j = next[j - 1];
      }

      if (str[i] === str[j]) {
        j++;
      }

      next.push(j);
    }

    return next;
  };

  const next = getNext(needle);

  console.log('next', next);

  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      // 跳位
      j = next[j - 1];
    }

    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      }

      j++;
    }
  }

  return -1;
}

// console.log(strStr("sadbutsad", "sad"));
// console.log(strStr('sadbutsad', 'bus'));
// console.log(strStr("sadbutsad", "leeto"));
// console.log(strStr("ABCDABDABCF", "CD"));
// console.log(strStr('mississippi', 'issip'));
// console.log(strStr("aabaabaafa", "aabaaf"));
// console.log(strStr("mississippi", "pi"));
// console.log(strStr("aabaaabaaac", "aabaaac"));
console.log(strStr("aba", "aba"));
