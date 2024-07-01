function findMinArrowShots(points: number[][]): number {
  // 按起始点升序排序
  points.sort((a, b) => a[0] - b[0]);

  let cnt = 1;
  let endX = points[0][1];

  for (let i = 1; i < points.length; i++) {
    const [x1, x2] = points[i];

    // 结束点 尽量取小点的
    if (x2 <= endX) {
      endX = x2;
    }

    // 只记录最小的结束点
    if (x1 > endX) {
      endX = x2;
      cnt++;
    }
  }

  return cnt;
}

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
