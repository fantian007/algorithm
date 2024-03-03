function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let len = nums.length + 1;
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

  return len === nums.length + 1 ? 0 : len;
}

const r = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
console.log(r);
