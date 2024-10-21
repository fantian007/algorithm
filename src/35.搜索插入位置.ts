// 既然是有序数组，从头遍历找位置即可
function searchInsert(nums: number[], target: number): number {
  let i = 0;

  while (i < nums.length && nums[i] < target) {
    i++;
  }

  return i;
};

const r = searchInsert([1, 3, 5, 6], 5); // 2
console.log(r);

export { };
