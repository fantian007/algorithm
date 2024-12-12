/**
 * 基于前面解法，输出数组不计算在复杂度内，所以我们可以 复用输出 数组，达到 O(1) 空间复杂度
 * 1. 将输出数组 当 L 使用，然后再动态由右侧的值 计算出结果
 */
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;

  const L = new Array(nums.length);

  // 左侧数组乘积
  L[0] = 1;
  for (let i = 1; i < n; i++) {
    L[i] = L[i - 1] * nums[i - 1];
  };

  let R = 1;
  for (let i = n - 1; i >= 0; i--) {
    L[i] = L[i] * R;

    // 记录 右侧的值
    R = R * nums[i];
  };

  return L;
};

const r = productExceptSelf([1, 2, 3, 4]) // [24, 12, 8, 6];
console.log(r);

export { }
