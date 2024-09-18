function reverseWords(s: string): string {
  return s
    // 拆分
    .split(' ')
    // 将空字符串过滤掉
    .filter(Boolean)
    // 将单词两边的空格去除
    .map(w => w.trim())
    // 翻转数组
    .reverse()
    // 拼接
    .join(' ');
};

// console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
// console.log(reverseWords("a good   example"));
