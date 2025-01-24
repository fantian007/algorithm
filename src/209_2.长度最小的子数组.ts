// 同理，换种写法
function minSubArrayLen(target: number, nums: number[]): number {
  const n = nums.length;
  let p1 = 0;
  let p2 = 0;
  let sum = 0;
  let len = Infinity;

  while (p2 < n) {
    sum += nums[p2];

    while (sum < target) {
      p2++;
      sum += nums[p2];
    }

    while (sum - nums[p1] >= target) {
      sum -= nums[p1];
      p1++;
    }

    len = Math.min(len, p2 - p1 + 1);

    p2++;
  }

  return sum >= target ? len : 0;
};
// const r = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
// const r = minSubArrayLen(15, [1, 2, 3, 4, 5]);
// const r = minSubArrayLen(8, [3, 4, 4, 2, 8, 5]);
const r = minSubArrayLen(8, [1, 2, 2, 6, 1, 0]); // 2

console.log(r);

export { };
