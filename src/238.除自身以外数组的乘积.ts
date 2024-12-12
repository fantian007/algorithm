/**
 * 2个数组，L，R，分别存放 下标 i 左侧数组的乘积，右侧数组的乘积
 * 但是负责度不是 O(1)，是 O(n)
 */
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;

  const L = new Array(nums.length);
  const R = new Array(nums.length);

  // 左侧数组乘积
  L[0] = 1;
  for (let i = 1; i < n; i++) {
    L[i] = L[i - 1] * nums[i - 1];
  };

  // 右侧数组乘积
  R[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    R[i] = R[i + 1] * nums[i + 1];
  };

  // i 处的值 = 左侧 * 右侧
  const r = [];
  for (let i = 0; i < n; i++) {
    r[i] = L[i] * R[i];
  };

  return r;
};

const r = productExceptSelf([1, 2, 3, 4]) // [24, 12, 8, 6];
console.log(r);

export { }
