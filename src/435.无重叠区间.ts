function eraseOverlapIntervals(intervals: number[][]): number {
  const len = intervals.length;

  if (len === 0) return 0;

  // 按结束区间点排序
  intervals.sort((a, b) => a[1] - b[1]);

  // 不重叠区间数量
  let cnt = 1;
  let right = intervals[0][1];

  // 记录不重叠的区间
  for (let i = 1; i < len; i++) {
    if (intervals[i][0] >= right) {
      cnt++;
      right = intervals[i][1];
    }
  }

  // 差值就是重叠区间数量
  return len - cnt;
}

const r = eraseOverlapIntervals([
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
]);
console.log(r);

export {};
