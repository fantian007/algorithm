/**
 * 本解法超时，主要是不断求左右两侧的最大值比较耗时
 * 
 * 就是求出每个索引处 左右两边的 最大值，然后最大值里求出最小值
 * 如果最小值比当前位置还小，说明无法存储水
 * 如果最小值比当前位置大，当前位置存储的水为 两者差值
 * 累加求和即可
 */
function trap(height: number[]): number {
  let r = 0;

  for (let i = 1; i < height.length - 1; i++) {
    const left = Math.max(...height.slice(0, i));
    const right = Math.max(...height.slice(i + 1, height.length));

    const min = Math.min(left, right);

    if (min > height[i]) {
      r += min - height[i];
    }
  };

  return r;
};

// const r = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); // 6
const r = trap([4, 2, 0, 3, 2, 5]); // 9
console.log(r);

export { };
