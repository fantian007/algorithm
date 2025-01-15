/**
 * 暴力解法
 */
function strStr(haystack: string, needle: string): number {
  let start = -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    // i + 1 之后再更新 start
    start = i;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i] === needle[j]) {
        i++;

        if (j === needle.length - 1) {
          return start;
        }
      } else {
        // 重置 i（回退到比较起点）
        i = start;
        break;
      }
    };
  };

  return -1;
}

// console.log(strStr('sadbutsad', 'sad')); // 0
// console.log(strStr('sadbutsad', 'bus')); // -1
// console.log(strStr('sadbutsad', 'leeto')); // -1
// console.log(strStr('mississippi', 'issip')); // 4
// console.log(strStr("mississippi", "pi")); // 9
// console.log(strStr("aabaaabaaac", "aabaaac")); // -1
console.log(strStr("a", "a")); // 0

export { };
