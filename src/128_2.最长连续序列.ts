function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  };

  let r = 1;

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    // 如果前一个数不存在，那么当前数 是一个连续子序列的开头
    if (!map[n - 1]) {
      // 每次+1，判断 map 里是否存在
      while (map[n++]) {
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
