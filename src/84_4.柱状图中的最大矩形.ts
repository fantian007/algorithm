/**
 * 单调栈
 * 同接雨水，但是本题栈内元素是从小到大
 */
function largestRectangleArea(heights: number[]): number {
  // 由于栈内元素是从小到大，如果 heights 元素都是从小到大，那么就不会走 else 分支了，所以末尾加了 0，让 stack 内元素都可以参加计算
  heights.push(0);
  const len = heights.length;

  let r = 0;
  const stack: number[] = [0];

  for (let i = 1; i < len; i++) {
    let top = stack[stack.length - 1];

    // 从小到大
    if (heights[top] < heights[i]) {
      stack.push(i);
    } else if (heights[top] === heights[i]) {
      stack.pop(); // 同等高度的柱子，保留一个就行，减少计算量（都保留也行）
      stack.push(i);
    } else {
      // 出现了低柱子
      while (stack.length && heights[top] > heights[i]) {
        // 数组 [0, i] 区间的 最高柱子
        let mid = stack.pop();
        // mid 左侧第一个低柱子
        let left = stack.length ? stack[stack.length - 1] : -1;
        // mid 右侧第一个低柱子
        let right = i;

        // 矩形宽度
        let w = right - left - 1;
        // 矩形高度
        let h = heights[mid];
        // 矩形面积
        r = Math.max(r, w * h);

        // 下一个最高柱子
        top = stack[stack.length - 1];
      }

      stack.push(i);
    }
  };


  return r;
};

// [-1, 0, 1]
// [-1, -1, 1]
// const r = largestRectangleArea([2, 1, 2]); // 3
const r = largestRectangleArea([0, 1, 2]); // 2
// const r = largestRectangleArea([2, 3]); // 4
// const r = largestRectangleArea([2, 1, 5, 6, 2, 3]); // 10
console.log(r);
export { };
