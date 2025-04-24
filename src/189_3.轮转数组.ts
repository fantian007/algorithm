// 将数组中的元素向右轮转 k 个元素
// 数组向右轮转 k 个位置，本质上是把数组的后 k 个元素移到数组的前面，而原数组的前 n - k 个元素（n 为数组长度）则依次后移。通过三次反转数组，能够以一种高效且空间复杂度为  O(1) 的方式达成这个目的
function rotate(nums: number[], k: number): void {
  k %= nums.length;

  // [7,6,5,4,3,2,1]
  reverse(nums, 0, nums.length - 1);
  // [5,6,7,4,3,2,1]
  reverse(nums, 0, k - 1);
  // [5,6,7,1,2,3,4]
  reverse(nums, k, nums.length - 1);
}

/**
 * 双指针翻转数组区间元素
 */
function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    // 交换元素
    [nums[start], nums[end]] = [nums[end], nums[start]];

    // 向内走
    start++;
    end--;
  }
}
// const arr = [1, 2, 3, 4, 5, 6, 7];
// rotate(arr, 3); // [5,6,7,1,2,3,4]
// const arr = [-1, -100, 3, 99];
// rotate(arr, 2); // [3,99,-1,-100]
// const arr = [1, 2, 3, 4, 5, 6];
// rotate(arr, 2); // [5,6,1,2,3,4]
const arr = [1, 2];
rotate(arr, 3); // [2,1]
console.log(arr);

export { };
