/**
 * 一对一映射
 */
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  // 记录字符映射
  const map: Record<string, string> = {};

  for (let i = 0; i < s.length; i++) {
    // 源字符
    const a = s[i];
    // 目标字符
    const c = map[a];

    // 目标字符不存在，记录到 map
    if (!c) {
      map[s[i]] = t[i];
    }
    // 目标字符存在，和 t 对应索引处字符 对比，是否相同
    else {
      // 如果有映射，比较映射字符是否是之前记录的字符
      if (c !== t[i]) {
        // 不是，直接返回
        return false;
      }
    }
  };

  // 判断 不同字符 是否映射到 同一个字符，看 map.values 中是否有重复字符
  const v = Object.values(map);
  return new Set(v).size === v.length;
};

// const r = isIsomorphic('egg', 'add'); // true
// const r = isIsomorphic("badc", "baba"); // false
// const r = isIsomorphic("paper", "title"); // true
const r = isIsomorphic("bbbaaaba", "aaabbbba"); // false
console.log(r);

export { }
