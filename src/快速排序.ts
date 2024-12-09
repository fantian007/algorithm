// 快速排序
const quickSort = (nums: number[]) => {
  if (nums.length <= 1) {
    return nums;
  } else {
    const left: number[] = [];
    const right: number[] = [];

    const mid = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < mid) {
        left.push(nums[i]);
      } else {
        right.push(nums[i]);
      }
    };

    return quickSort(left).concat(mid).concat(quickSort(right));
  }
}

// const arr = [5, 7, 2, 3, 8, 1];
const arr = [3, 2, 2, 1, 9, 1, 2, 10, 1, 5, 6, 4];
const r = quickSort(arr);
console.log(r);

export { }
