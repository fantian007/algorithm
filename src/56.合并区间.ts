function merge(intervals: number[][]): number[][] {
  const len = intervals.length;

  if (len <= 1) {
    return intervals;
  }

  // 按左边界排序
  intervals.sort((a, b) => a[0] - b[0]);

  const r: number[][] = [];
  // 每个不重叠区间起始点
  let [left, right] = intervals[0];

  for (let i = 1; i < len; i++) {
    // 重叠，更新右边界
    if (intervals[i][0] <= right) {
      right = Math.max(right, intervals[i][1]);
    }
    // 不重叠，更新新区间起止节点
    else {
      r.push([left, right]);

      [left, right] = intervals[i];
    }
  }

  r.push([left, right]);

  return r;
}

const r = merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
console.log(r);

export {};
