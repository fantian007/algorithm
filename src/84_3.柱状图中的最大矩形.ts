/**
 * 双指针，解决超时
 */
function largestRectangleArea(heights: number[]): number {
  let max = 0;
  const len = heights.length;
  // 第一个小于当前柱子的左侧柱子的下标，初始化为 -1
  const minLeft = new Array(len).fill(-1);
  // 第一个小于当前柱子的右侧柱子的下标，初始化为 len
  const minRight = new Array(len).fill(len);

  for (let i = 1; i < len; i++) {
    let t = i - 1;

    // 如果左边的柱子比当前柱子高，那么找比左边柱子第一个更低的柱子
    while (t >= 0 && heights[t] >= heights[i]) {
      // 直接找比 height[t] 更低的第一个柱子，不要用 t-- 重复计算，遍历 i 的时候，左边 minLeft[t] 都计算过了
      t = minLeft[t];
    }

    minLeft[i] = t;
  };

  for (let i = len - 2; i >= 0; i--) {
    let t = i + 1;

    // 如果右边的柱子比当前柱子高，那么找比右边柱子第一个更低的柱子
    while (t >= 0 && heights[t] >= heights[i]) {
      // 直接找比 height[t] 更低的第一个柱子，不要用 t++ 重复计算，遍历 i 的时候，右边 minRight[t] 都计算过了
      t = minRight[t];
    }

    minRight[i] = t;
  };

  for (let i = 0; i < len; i++) {
    const h = heights[i];
    const w = minRight[i] - minLeft[i] - 1;

    max = Math.max(h * w, max);
  };

  return max;
};

// [-1, 0, 1]
// [-1, -1, 1]
// const r = largestRectangleArea([2, 1, 2]); // 3
// const r = largestRectangleArea([2, 3]); // 4
const r = largestRectangleArea([2, 1, 5, 6, 2, 3]); // 10
console.log(r);
export { };
