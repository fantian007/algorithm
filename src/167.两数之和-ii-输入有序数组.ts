// 双指针（要利用数组已排序的特点）
function twoSum(numbers: number[], target: number): number[] {
  const n = numbers.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const r = numbers[left] + numbers[right];

    if (r > target) {
      right--;
    } else if (r < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [-1, -1];
};
