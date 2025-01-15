// 暴力解法 时间复杂度 O(m * n)
function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }

      if (j === needle.length - 1) {
        return i;
      }
    }
  }

  return -1;
};

// console.log(strStr('hello', 'll')); // 2
console.log(strStr('sadbutsad', 'sad')); // 0
// console.log(strStr('sadbutsad', 'bus')); // -1
// console.log(strStr('sadbutsad', 'leeto')); // -1
// console.log(strStr('mississippi', 'issip')); // 4
// console.log(strStr("mississippi", "pi")); // 9
// console.log(strStr("aabaaabaaac", "aabaaac")); // -1

export { };
