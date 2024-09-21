function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  // 记录字符映射
  const map: Record<string, string> = {};

  for (let i = 0; i < s.length; i++) {
    const c = map[s[i]];

    if (!c) {
      map[s[i]] = t[i];
    } else {
      // 如果有映射，比较映射字符是否是之前记录的字符
      if (c !== t[i]) {
        // 不是，直接返回
        return false;
      }
    }
  };

  const v = Object.values(map);

  // 映射的字符，不要有重复的即可
  return new Set(v).size === v.length;
};

// const r = isIsomorphic('egg', 'add'); // true
// const r = isIsomorphic("badc", "baba"); // false
// const r = isIsomorphic("paper", "title"); // true
const r = isIsomorphic("bbbaaaba", "aaabbbba"); // true
console.log(r);

export { }
