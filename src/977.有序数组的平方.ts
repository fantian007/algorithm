/**
 * 有序数组的平方（双指针）
 */
function sortedSquares(nums: number[]): number[] {
  const r = [];

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const a = Math.pow(nums[left], 2);
    const b = Math.pow(nums[right], 2);

    console.log(a, b)

    if (a < b) {
      r.unshift(b);
      right--;
    } else if (a > b) {
      r.unshift(a);
      left++;
    } else {
      if (left !== right) {
        r.unshift(a, b);
      } else {
        r.unshift(a);
      }

      left++;
      right--;
    }
  }

  return r;
}

const r1 = sortedSquares([-4, -1, 1,1, 3, 10]);
console.log(r1);
