function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let start = 1;
  let r = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1] + 1) {
      start++;
    }
    // 注意：下一个可能是相同的数
    else if (nums[i] === nums[i - 1]) {
      continue;
    } else {
      start = 1;
    }

    r = Math.max(r, start);
  };

  return r;
};

// const r = longestConsecutive([100, 4, 200, 1, 3, 2]); // 4
// const r = longestConsecutive([0, -1]); / 2
const r = longestConsecutive([1, 2, 0, 1]);
console.log(r);

export { }
