function findMinArrowShots(points: number[][]): number {
  if (points.length === 0) return 0;

  // 起始点排序
  points = points.sort((a, b) => a[0] - b[0]);

  // 第一个区间结束点
  let [, endX] = points[0];
  let cnt = 1;

  for (let i = 1; i < points.length; i++) {
    let [nextStartX, nextEndX] = points[i];

    // 缩小范围，确保 x2 能被射中
    if (nextEndX <= endX) {
      endX = nextEndX;
    }

    // 区间不重叠（上次射击的区间），气球 +1
    if (nextStartX > endX) {
      cnt++;
      endX = nextEndX;
    }
  }

  return cnt;
};

// const r = findMinArrowShots([
//   [10, 16],
//   [2, 8],
//   [1, 6],
//   [7, 12],
// ]);
// const r = findMinArrowShots([
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, 8],
// ]);
// const r = findMinArrowShots([
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
// ]);
// const r = findMinArrowShots([
//   [9, 12],
//   [1, 10],
//   [4, 11],
//   [8, 12],
//   [3, 9],
//   [6, 9],
//   [6, 7],
// ]);
const r = findMinArrowShots([
  [1, 5],
  [4, 8],
  [6, 9],
  [12, 15]
]);
console.log(r);

export { };
