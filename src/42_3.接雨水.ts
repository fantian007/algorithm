/**
 * 单调栈
 * 之前都是按列计算，该解法 用行来计算
 */
function trap(height: number[]): number {
  const len = height.length;

  if (len < 2) {
    return 0;
  }

  const stack: number[] = [0];
  let r = 0;

  for (let i = 1; i < len; i++) {
    // 栈顶元素
    let top = stack[stack.length - 1];

    // 栈内元素 从大到小
    if (height[top] > height[i]) {
      stack.push(i);
    }
    // 如果相邻的相同，取右侧元素高度
    else if (height[top] === height[i]) {
      stack.pop(); // 该句有没有都行，有了会减少计算量
      stack.push(i);
    }
    // 说明出现了凹槽，能储存雨水
    else {
      // 如果右侧有更高柱子，还能形成储水区
      while (stack.length && height[top] < height[i]) {
        // 出现了更大高度，当前元素 mid 作为谷底（谷底到左右两侧较小高度柱子形成储水区域，需要计算出区域的宽高）
        let mid = stack.pop();

        // 当前元素左侧是否有较高柱子，没有则不能储水，不用计算
        if (stack.length) {
          // 谷底左边柱子的索引
          const left = stack[stack.length - 1];
          // 谷底右边柱子的索引
          const right = i;
          // 谷底处能存储的水量高度
          const h = Math.min(height[left], height[right]) - height[mid];
          // 出栈元素处能存储的水量宽度
          const w = i - left - 1;
          // 储水量
          r += h * w;

          // 当前谷底计算完毕，以前一个元素作为谷底，继续判断
          top = stack[stack.length - 1];
        }
      }

      // 下一个更小的元素入栈
      stack.push(i);
    }
  };

  return r;
};

const r = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); // 6
// const r = trap([4, 2, 0, 3, 2, 5]); // 9
console.log(r);

export { };
