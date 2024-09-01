/**
 * 双指针，暴力解法的优化版本（超时）
 */
function largestRectangleArea(heights: number[]): number {
  let max = 0;
  const len = heights.length;
  // 第一个小于当前柱子的左侧柱子的下标，初始化为 -1
  const minLeft = new Array(len).fill(-1);
  // 第一个小于当前柱子的右侧柱子的下标，初始化为 len
  const minRight = new Array(len).fill(len);

  for (let i = 1; i < len; i++) {
    let j = i;

    while (j >= 0) {
      j--;

      if (heights[j] < heights[i]) {
        break;
      }
    }

    minLeft[i] = j;
  };

  for (let i = 0; i < len - 1; i++) {
    let j = i;

    while (j < len) { // 注意 while 里面 不能是 j++, 要考虑 j === 0 的情况，不走循环
      j++;

      if (heights[j] < heights[i]) {
        break;
      }
    }

    minRight[i] = j;
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
