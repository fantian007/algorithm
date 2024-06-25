function findContentChildren(g: number[], s: number[]): number {
  // 对 2 个数组排序，然后让 s[j] 一位位 去满足 g[i]
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let r = 0;
  let i = 0;

  // 遍历 s
  while (i < s.length && r < g.length) {
    // 如果 >=，那么 r++;
    if (s[i] >= g[r]) {
      r++;
    }

    i++;
  }

  return r;
}

const r = findContentChildren([1, 2, 3, 2, 4], [1, 5]);
console.log(r);

export {};
