function searchMatrix(matrix: number[][], target: number): boolean {
  // 二维转一维
  const nums = matrix.flat();

  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return true;
    }
  }

  return false;
};

const m = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
const r = searchMatrix(m, 3);
console.log(r);

export { }
