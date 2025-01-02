function lengthOfLastWord(s: string): number {
  const EC = ' ';

  // 头部加空格，为了好计算
  s = EC + s;

  // 单词右边界
  let right = s.length - 1;
  // 单词左边界
  let left = right;

  // 跳过末尾空格
  while (s[right] === EC) {
    right--;
  }

  left = right - 1;

  // 跳过单词字符(当 left === 0 时， left + 1 截取的少了第一个字符，所以开头要加个空格；或者 if 条件 left >= 0)
  while (left > 0 && s[left] !== EC) {
    left--;
  }

  // 截取(left\right 有可能出现负数，但是 slice 截取之后是空串，不影响结果)
  return s.slice(left + 1, right + 1).length;
};

const r = lengthOfLastWord(" "); // 0
// const r = lengthOfLastWord("Hello"); // 5
// const r = lengthOfLastWord("Hello World"); // 5
// const r = lengthOfLastWord("   fly me   to   the moon  "); // 4
// const r = lengthOfLastWord("luffy is still joyboy"); // 6
console.log(r);

export { };
