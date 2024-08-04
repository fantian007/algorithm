function findLengthOfLCIS(nums: number[]): number {
  let r = 0;

  let left = nums[0];
  let right = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      right++;
    } else {
      left = nums[i];
      right = left;
    }

    r = Math.max(r, right - left);
  };

  return r + 1;
};

// const r = findLengthOfLCIS([1, 3, 5, 4, 7]); // 3
// const r = findLengthOfLCIS([2, 2, 2, 2, 2]); // 1
const r = findLengthOfLCIS([2]); // 1
console.log(r);

export { }

