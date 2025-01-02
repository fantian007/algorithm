function lengthOfLastWord(s: string): number {
  let right = s.length - 1;

  // right 指向最后一个非空字符（单词结尾）
  while (right > 0 && s[right] === ' ') {
    right--;
  }

  let left = right;

  // left 指向单词开头
  while (left > 0 && s[left - 1] !== ' ') {
    left--;
  }

  return right - left + 1;
};

const r = lengthOfLastWord("Hello"); // 5
// const r = lengthOfLastWord("Hello World"); // 5
// const r = lengthOfLastWord("   fly me   to   the moon  "); // 4
// const r = lengthOfLastWord("luffy is still joyboy"); // 6
console.log(r);

export { };
