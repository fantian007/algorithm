// 将排序逻辑替换为 26个 charCode
function groupAnagrams(strs: string[]): string[][] {
  const m_strs = strs.map(str => {
    const arr = new Array(26).fill(0);

    for (const c of str) {
      // 减去 'a'，索引才能在 [0, 25] 范围
      arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // 注意：这里要逗号，不用逗号的话，[0,1,0,0] 和 [0,10,0,0] join 之后会一样（限制长度26，溢出的会丢弃）
    return [arr.join(','), str];
  });

  const m = {};

  for (const [s, o] of m_strs) {
    m[s] ??= [];
    m[s].push(o);
  }

  return Object.values(m);
};

// const r = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
const r = groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]);
console.log(r);

export { }
