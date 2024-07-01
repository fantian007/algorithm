// 遍历 nums，从头开始用 count 累积
// 如果 count 一旦加上 nums[i]变为负数，那么就应该从 nums[i+1]开始从 0 累积 count 了，因为已经变为负数的 count，只会拖累总和
function maxSubArray(nums: number[]): number {
  let r = -Infinity;
  let c = 0;

  for (let i = 0; i < nums.length; i++) {
    c += nums[i];

    r = Math.max(r, c);

    if (c < 0) {
      c = 0;
    }
  }

  return r;
}

// const r = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// const r = maxSubArray([1]);
// const r = maxSubArray([5, 4, -1, 7, 8]);
const r = maxSubArray([-2, -1]);

console.log(r);

export {};
