/**
 * 双指针
 * (其实就是将之前的左右填充逻辑，左右交替进行计算)
 */
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;

  let r = new Array(n).fill(1);

  let p1 = 0, p2 = n - 1;
  let lp = 1, rp = 1;

  while (p1 < n && p2 >= 0) {
    r[p2] *= rp;
    r[p1] *= lp;

    lp *= nums[p1++];
    rp *= nums[p2--];
  }

  return r;
};

const r = productExceptSelf([1, 2, 3, 4]) // [24, 12, 8, 6];
console.log(r);

export { }
