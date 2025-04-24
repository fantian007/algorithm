// 题目要求可以假设 nums[-1] = nums[n] = -负无穷，可以返回任意一个峰值
// 思路：二分法，随机选取范围内的中点，走势有4种情况，往高处走，总能找到波峰
function findPeakElement(nums: number[]): number {
  const len = nums.length - 1;

  let left = 0, right = len;
  let i = 0;

  while (left <= right) {
    // 随便找一个点，不除以 2 了
    i = Math.floor(left + Math.random() * (right - left));

    let p = nums[i - 1] ?? -Infinity;
    let n = nums[i + 1] ?? -Infinity;

    // nums[i-1] < nums[i] > nums[i+1]，波峰，直接返回
    if (nums[i] >= p && nums[i] >= n) {
      return i;
    }
    // nums[i-1] < nums[i] < nums[i+1]，递增，左边界右移
    else if (nums[i] >= p && nums[i] <= n) {
      left = i + 1;
    }
    // nums[i-1] > nums[i] > nums[i+1]，递减，右边界左移
    else if (nums[i] <= p) {
      right = i - 1;
    }
    // nums[i-1] > nums[i] < nums[i+1]，波谷，左移/右移 都可
    else {
      left = i + 1;
      // right = i - 1;
    }
  }

  return i;
};

// const r = findPeakElement([1, 2, 3, 1]); // 2
// const r = findPeakElement([1, -1, -1, -1]); // 0
// const r = findPeakElement([1, 2]); // 1
const r = findPeakElement([2, 1]); // 0
console.log(r);

export { }
