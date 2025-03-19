function merge(intervals: number[][]): number[][] {
  const r = [];

  // 按区间开始节点排序
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  // 当前合并的区间
  let [start, end] = intervals[0];

  for (let i = 0; i < intervals.length; i++) {
    // 当前区间
    const [curStart, curEnd] = intervals[i];
    // 下一个区间
    const [nextStart, nextEnd] = intervals[i + 1] ?? [];

    // 结尾点取最大值
    end = Math.max(end, curEnd);

    // 末尾节点
    if (nextStart === undefined) {
      r.push([start, end]);
      return r;
    }

    if (end >= nextStart) {
      continue;
    }
    else {
      r.push([start, end]);

      start = nextStart;
    }
  }
};

// const r = merge([
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ]); // [[1,6],[8,10],[15,18]]
// const r = merge([[1, 4], [4, 5]]); // [1, 5]
const r = merge([[1, 4], [2, 3]]); [1,4]
// const r = merge([[1, 10], [4, 5], [6, 7], [8, 9]]);
// const r = merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]);
console.log(JSON.stringify(r));

export { };
