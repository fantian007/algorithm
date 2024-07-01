function largestSumAfterKNegations(nums: number[], k: number): number {
  // 从小到大排序，为了从左边翻转后，变为正数值最大
  nums = nums.sort((a, b) => a - b);

  // 筛选出负数，翻转
  const negative = nums.filter((f) => f < 0);

  let cur = 0;

  // 翻转负数
  while (cur < negative.length && k > 0) {
    nums[cur] = -nums[cur];
    cur++;
    k--;
  }

  // 翻转了之后，排序乱了，重新排序
  nums = nums.sort((a, b) => a - b);
  // 同上，开始翻转正数，从小的开始翻转
  const positive = nums.filter((f) => f >= 0);
  cur = 0;

  while (cur < positive.length && k > 0) {
    nums[cur] = -nums[cur];
    // cur++; // 同一个位置可以多次选择，所以遇到第一个正数就反复翻转即可
    k--;
  }

  return nums.reduce((a, b) => a + b, 0);
}

// const r = largestSumAfterKNegations([4, 2, 3], 1); // 5
// const r = largestSumAfterKNegations([3, -1, 0, 2], 3); // 6
// const r = largestSumAfterKNegations([2, -3, -1, 5, -4], 2); // 13
// const r = largestSumAfterKNegations([-8, 3, -5, -3, -5, -2], 6); // 22
const r = largestSumAfterKNegations([-4, -2, -3], 4); // 9
console.log(r);

export {};
