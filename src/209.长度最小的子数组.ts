// 滑动窗口
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
const r = minSubArrayLen(15, [1, 2, 3, 4, 5]);
console.log(r);

export { };
