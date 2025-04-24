function search(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // 判断左半部分是否有序
    if (nums[left] <= nums[mid]) {
      // 目标值在左半部分有序区间内
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // 右半部分有序
    else {
      // 目标值在右半部分有序区间内
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};


// const r = search([4, 5, 6, 7, 0, 1, 2], 0); // 4
// const r = search([0, 1, 2, 4, 5, 6, 7], 1); // 1
// const r = search([3, 1], 3); // 0
const r = search([3, 5, 1], 3); // 0
console.log(r);

export { }
