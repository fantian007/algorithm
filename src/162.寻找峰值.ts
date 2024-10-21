// 题目要求可以假设 nums[-1] = nums[n] = -负无穷，可以返回任意一个峰值
function findPeakElement(nums: number[]): number {
  const len = nums.length;

  // 只有一个元素，峰值
  if (nums.length === 1) {
    return 0;
  }

  // 前2个数比较，如果第2个数小于第1个数，第一个数是峰值
  if (nums[1] < nums[0]) {
    return 0;
  }

  // 同上，比较末尾 2 个数
  if (nums[len - 1] > nums[len - 2]) {
    return len - 1;
  }

  // 比较中间的数
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    }
  };
};

const r = findPeakElement([1, 2, 3, 1]);
console.log(r);

export { }
