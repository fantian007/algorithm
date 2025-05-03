/**
 * 使用 KMP
 * 时间复杂度 O(m + n)
 * 
 * 1. haystack 主串
 * 2. needle 模式串
 * 3. getNext 生成部分匹配表 和 主流程 很类似
 */
function strStr(haystack: string, needle: string): number {
  /**
   * 获取前缀表
   * 其实就是拆分为2个字符串： aabaaa（前缀） 和 abaaac（后缀），求2个字符串的 KMP
   */
  const getNext = (str: string) => {
    const next = [0];

    let j = 0;
    //  i 从 1 开始
    for (let i = 1; i < str.length; i++) {
      // j 回跳，对齐前缀和后缀，继续比较 i,j 位置字符
      while (j > 0 && str[i] !== str[j]) {
        // 移动之后，j 处于已匹配公共前缀的下一个字符处
        // 所以，可以继续和 i 位置的 字符比较
        j = next[j - 1];
      }

      // 进位
      if (str[i] === str[j]) {
        j++;
      }

      next.push(j);
    }

    return next;
  };

  const next = getNext(needle);

  // console.log('next', next);

  // j 遍历模式串
  let j = 0;
  // i 遍历主串
  for (let i = 0; i < haystack.length; i++) {
    // 跳位
    while (j > 0 && haystack[i] !== needle[j]) {
      // i 不变，j 回到上一次匹配的位置(j 处于公共前缀的下一个位置），重新和 i 位置字符匹配
      // 模式串右移，使模式串的前缀[0, j) 和 主串[0,i)的后缀对齐，再继续比较 i,j 位置字符
      j = next[j - 1];
    }

    // 进位
    if (haystack[i] === needle[j]) {
      // 取完全匹配时开始处的下标
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
console.log(strStr("aabaaabaaac", "aabaaac"));
// console.log(strStr("aba", "aba"));

export {}
