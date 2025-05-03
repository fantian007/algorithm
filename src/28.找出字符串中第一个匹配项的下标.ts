/**
 * 暴力解法 O(m*m)，会超时
 */
function strStr(haystack: string, needle: string): number {
  let i = 0;

  while (i <= haystack.length - needle.length) {
    let j = 0;
    let k = i;

    while (haystack[k] === needle[j]) {
      if (j === needle.length - 1) {
        return k - needle.length + 1;
      }

      j++;
      k++;
    }

    i++;
  }

  return -1;
}

// console.log(strStr('sadbutsad', 'sad'));
// console.log(strStr('sadbutsad', 'bus'));
// console.log(strStr('sadbutsad', 'leeto'));
// console.log(strStr('mississippi', 'issip'));
// console.log(strStr("mississippi", "pi"));
console.log(strStr("aabaaabaaac", "aabaaac"));

export {};
