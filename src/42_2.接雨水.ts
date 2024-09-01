/**
 * 双指针优化
 */
function trap(height: number[]): number {
  const len = height.length;

  if (len < 2) {
    return 0;
  }

  // 记录每个位置左边柱子的最大高度
  const maxLeft = new Array(len).fill(0);
  // 记录每个位置右边柱子的最大高度
  const maxRight = new Array(len).fill(0);

  // 记录每个柱子左边柱子的最大高度（包含自己）
  maxLeft[0] = height[0];
  for (let i = 1; i < len; i++) {
    maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
  };

  // 记录每个柱子右边柱子的最大高度（包含自己）
  maxRight[len - 1] = height[len - 1];
  for (let i = len - 2; i > 0; i--) {
    maxRight[i] = Math.max(height[i], maxRight[i + 1]);
  };

  // 每个位置处 左右柱子最大高度，取较小值，和当前位置高度的差值，就是存水量
  let r = 0;
  for (let i = 1; i < height.length - 1; i++) {
    const min = Math.min(maxLeft[i], maxRight[i]);

    if (min > height[i]) {
      r += min - height[i];
    }
  };

  return r;
};

const r = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); // 6
// const r = trap([4, 2, 0, 3, 2, 5]); // 9
console.log(r);

export { };
