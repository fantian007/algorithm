// 对异位词字单词排序
function groupAnagrams(strs: string[]): string[][] {
  const m_strs = strs.map(str => [str.split('').sort().join(''), str]); // [排序后单词，源单词]

  // 排序后单词作为键
  const m = {};

  for (const [s, o] of m_strs) {
    m[s] ??= [];
    m[s].push(o);
  }

  return Object.values(m);
};

const r = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(r);

export { }
