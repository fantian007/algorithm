// 合并数组之后，再合并区间
function insert(intervals: number[][], newInterval: number[]): number[][] {
  intervals.push(newInterval);

  if (intervals.length === 0) {
    return [];
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const r: number[][] = [];
  let start = intervals[0][0];
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= end) {
      end = Math.max(end, intervals[i][1]);
    } else {
      r.push([start, end]);

      [start, end] = intervals[i];
    }
  };

  r.push([start, end]);

  return r;
};

const r = insert([[1, 3], [6, 9]], [2, 5]);
console.log(JSON.stringify(r));
export { };
