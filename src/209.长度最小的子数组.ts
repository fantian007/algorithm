/**
 * 滑动窗口
 * 
 * 双指针，左指针先固定不动，右指针右移扩大范围；当和大于等于target时，左指针开始右移缩小范围，右指针不动。
 * 左指针移动到不能再缩小了（保持 >= target 的最低限度），左指针再固定不动，右指针再次右移扩大范围。
 * 循环上述过程，大于等于target过程中不断更新最小长度，最后返回最小长度。
 * 
 * 原理：
 * 当某次右移 >= target 时，需要从窗口中取出一些数，让和 >= target 时，又能缩小窗口范围
 * 如果从右侧取出，那么和一定会 < target, 因为移动右指针前一次就是小于的
 * 如果从左侧取出，那么和可能依然会 >= target
 */
function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let len = Infinity; // 或者 nums.length + 1，设置一个不可能的数值即可
  let sum = 0;

  while (right < nums.length) {
    sum += nums[right];

    if (sum >= target) {
      while (sum - nums[left] >= target) {
        sum -= nums[left++];
      }

      len = Math.min(len, right - left + 1);
    }

    right++;
  }

  return len === Infinity ? 0 : len;
}

// const r = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
// const r = minSubArrayLen(15, [1, 2, 3, 4, 5]);
// const r = minSubArrayLen(8, [3, 4, 4, 2, 8, 5]);
const r = minSubArrayLen(8, [1, 2, 2, 6, 1, 0]);

console.log(r);

export { };
