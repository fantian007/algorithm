// 三向切分
function findKthLargest(nums: number[], k: number): number {
  const sort = (left: number, right: number): number => {
    const pivot = nums[right];

    let gt = right;
    let lt = left;

    let i = left;

    // 两边元素都可以和当前遍历元素交换值，最终：[大，相等，小]
    while (i <= gt) {
      if (nums[i] > pivot) {
        [nums[i], nums[lt]] = [nums[lt], nums[i]];
        lt++;
        i++;
      } else if (nums[i] < pivot) {
        [nums[i], nums[gt]] = [nums[gt], nums[i]];
        gt--;
      } else {
        i++;
      }
    }

    // 相等区域
    if (lt <= k - 1 && k - 1 <= gt) {
      return nums[lt];
    }
    // 目标值在左
    else if (k - 1 < lt) {
      return sort(left, lt - 1);
    }
    // 目标值在右
    else {
      return sort(gt + 1, right);
    }
  };

  return sort(0, nums.length - 1);
}

const r = findKthLargest([3, 2, 2, 1, 9, 1, 2, 10, 1, 5, 6, 4], 2); // 5
console.log(r);

export { }
