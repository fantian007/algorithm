function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ');

  // 数量判断
  if (pattern.length !== words.length) {
    return false;
  }

  const m = {};

  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];
    const word = words[i];

    if (!m[c]) {
      m[c] = word;
    } else {
      if (m[c] !== word) {
        return false;
      }
    }
  }

  // 不同字符要映射到不同的单词（去重）
  // Set 也可以对字符串去重
  return new Set(pattern).size === new Set(words).size;
};

// const r = wordPattern('abba', "dog cat cat dog"); // true
const r = wordPattern('abba', "dog dog dog dog"); // false
console.log(r);

export { }
