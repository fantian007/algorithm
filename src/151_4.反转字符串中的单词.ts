/**
 * right 位于单词右边界，left 位于单词左边界，截取单词
 */
function reverseWords(s: string): string {
  const EC = ' ';

  // 开头加空格
  s = EC + s;

  const r: string[] = [];

  let left = s.length - 1;
  let right = s.length - 1;

  while (left > 0) {
    // right 跳过空格
    while (right > 0 && s[right] === EC) {
      right--;
    }

    // right 位于单词结尾，left 定位到前一个字符
    left = right - 1;

    if (left < 0) {
      break;
    }

    // 跳过字符，定位到单词开头
    while (left > 0 && s[left] !== EC) {
      left--;
    }

    const str = s.slice(left + 1, right + 1);

    r.push(str);

    right = left;
  }

  return r.join(EC);
};

// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
