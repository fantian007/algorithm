function findMinArrowShots(points: number[][]): number {
  // 按起始点升序排序，起始点相同的，按结束点升序排序
  points.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let cnt = 1;
  // 第一个点作为初始区间
  let endX = points[0][1];

  for (let i = 1; i < points.length; i++) {
    const [x1, x2] = points[i];

    // 结束点 尽量取小点的
    if (x2 <= endX) {
      endX = x2;
    }

    // 如果遍历到的节点，起始点比之前区间的结束点大，那么开始新的区间
    if (x1 > endX) {
      endX = x2;
      cnt++;
    }
  }

  return cnt;
}

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
const r = findMinArrowShots([
  [9, 12],
  [1, 10],
  [4, 11],
  [8, 12],
  [3, 9],
  [6, 9],
  [6, 7],
]);
console.log(r);

export {};
