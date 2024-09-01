/**
 * 暴力解法
 * 1. 遍历数组，从当前元素向两边扩张，用 left, right 记录左右边界
 * 2. 当 left, right 元素出现比当前元素更低的柱子，停止边界扩张
 * （为什么不降低矩形高度，左右继续扩张呢？最终面积不一定小。这个更大的矩形不是以当前元素为基准考虑的，遍历到某个元素的时候，自然会计算到这种情况，这里只考虑以当前柱子为顶点，形成的最大区域）
 * 3. 当前柱子能形成的最大区域面积是: 当前柱子高度 * (right - left - 1)
 * 4. 遍历元素时，不断更新最大值
 */
function largestRectangleArea(heights: number[]): number {
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    let left = i;
    let right = i;

    for (; left >= 0; left--) {
      if (heights[left] < heights[i]) {
        break;
      }
    };

    for (; right < heights.length; right++) {
      if (heights[right] < heights[i]) {
        break;
      }
    };

    let h = heights[i];
    let w = right - left - 1;

    max = Math.max(max, h * w);
  };

  return max;
};

const r = largestRectangleArea([2, 1, 5, 6, 2, 3]); // 10
console.log(r);
export { };

