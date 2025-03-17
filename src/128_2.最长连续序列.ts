function longestConsecutive(nums: number[]): number {
  let r = 0;

  const map: Record<number, number> = {};
  // 0 代表 未遍历过
  nums.forEach(v => map[v] = 0);

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    // 剪枝，1 代表已遍历过。否则会有很多重复遍历，会超时
    if (map[n] === 1) continue;

    // 如果前一个数不存在，那么当前数 是一个连续子序列的开头
    if (map[n - 1] === undefined) {
      // 每次+1，判断 map 里是否存在
      while (map[n] != undefined) {
        map[n] = 1;
        n++;
        r = Math.max(r, n - nums[i]);
      }
    }
  };

  return r;
};

const r = longestConsecutive([100, 4, 200, 1, 3, 2]); // 4
// const r = longestConsecutive([0, -1]); // 2
console.log(r);

export { }
