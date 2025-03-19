function merge(intervals: number[][]): number[][] {
  if (intervals.length === 1) {
    return intervals;
  }

  const len = intervals.length;
  // 按区间开头排序
  intervals.sort((a, b) => a[0] - b[0]);

  const r: number[][] = [];

  let [start, end] = intervals[0];

  for (let i = 1; i < len; i++) {
    // 新区间开始
    if (intervals[i][0] > end) {
      r.push([start, end]);
      // 通过解构给 start, end 赋值
      [start, end] = intervals[i];
    } else {
      // 区间连续，更新区间结束值（取最大值）
      end = Math.max(end, intervals[i][1]);
    }
  };

  // 防止漏掉最后一个区间
  if (r.length === 0 || r.at(-1)[1] !== end) {
    r.push([start, end]);
  }

  return r;
}

const r = merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
// const r = merge([[1, 4], [4, 5]]);
// const r = merge([[1, 4], [2, 3]]);
// const r = merge([[1, 10], [4, 5], [6, 7], [8, 9]]);
console.log(JSON.stringify(r));

export { };
