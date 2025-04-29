// https://leetcode.cn/problems/sqrtx/solutions/238553/x-de-ping-fang-gen-by-leetcode-solution/?envType=study-plan-v2&envId=top-interview-150

// 二分法 不断找中点，然后 中点的平方 约等于 目标值，最后给出近似的中点值
function mySqrt(x: number): number {
  let l = 0, r = x;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);

    const s = mid ** 2;

    if (s === x) {
      return mid;
    } else if (s < x) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return l - 1;
};

const r = mySqrt(8); // 2
// const r = mySqrt(1); // 1
console.log(r);

export { }
