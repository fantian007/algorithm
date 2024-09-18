// 双指针
function isPalindrome(s: string): boolean {
  if (s.length <= 1) {
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  // 判断字符是否位于 [0-9],[a-z] 区间
  const isInRange = (char: string) => {
    const minChar = 'a'.charCodeAt(0);
    const maxChar = 'z'.charCodeAt(0);

    const minNum = '0'.charCodeAt(0);
    const maxNum = '9'.charCodeAt(0);

    const charCode = char.toLowerCase().charCodeAt(0);

    return (charCode >= minChar && charCode <= maxChar) || (charCode >= minNum && charCode <= maxNum);
  }

  while (left < right) {

    // 左侧跳过非字符+非数字
    while (left < s.length - 1 && !isInRange(s[left])) {
      left++;
    }

    // 右侧跳过非字符+非数字
    while (right > 0 && !isInRange(s[right])) {
      right--;
    }

    // 如果相遇，返回 true
    if (left >= right) {
      return true;
    }

    // 比较左右两侧字符
    if (s[left].toLocaleLowerCase() === s[right].toLocaleLowerCase()) {
      left++;
      right--;
    } else {
      // 字符不一样，直接返回 false
      return false;
    }
  }

  return true;
};

// const r = isPalindrome("A man, a plan, a canal: Panama"); // true
// const r = isPalindrome(".,"); // true
const r = isPalindrome("0P"); // false
console.log(r);

export { }
