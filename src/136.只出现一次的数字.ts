// 位运算：异或
// a ^ a = 0
// a ^ 0 = a
// 满足交换律和结合律
function singleNumber(nums: number[]): number {
  let r = 0;

  for (let i = 0; i < nums.length; i++) {
    // 不断异或即可，相同的数异或 = 0，最后剩余的数就是出现一次的数
    r ^= nums[i];
  }

  return r;
};

export { }
