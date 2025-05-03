/**
 * 双指针
 * @see https://leetcode.cn/problems/container-with-most-water/?envType=study-plan-v2&envId=top-interview-150
 * 思路：每次移动时，移动短柱子，储水量才可能变大
 * 解释：
 * 1. 固定左右柱子时，储水量由短柱子决定。
 * 2. 移动高的柱子（向对方移动），宽度变小，移动之后高度可能增加/减小
 *    1. 如果增加，储水量不变，因为短柱子决定水量
 *    2. 如果减少，储水量更少，因为宽度和高度都小
 * 所以，移动高的柱子，储水量不会变多，只可能变少
 * 3. 移动短的柱子（向对方移动），按同样的道理推理，宽度变小，但是高度可能增加，储水量是可能变大的
 */
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    // 储水量由短柱子决定
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

const r = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
// const r = maxArea([1, 1]); // 1
console.log(r);

export { }
