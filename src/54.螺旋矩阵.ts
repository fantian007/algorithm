function spiralOrder(matrix: number[][]): number[] {
  const ret = [];

  if (matrix.length === 0) {
    return [];
  }

  const m = matrix.length; // 行数
  const n = matrix[0].length; // 列数

  let top = 0;
  let right = n - 1;
  let bottom = m - 1;
  let left = 0;

  let x = 0;
  let y = 0;

  const isDone = () => ret.length === m * n;

  while (!isDone()) {
    while (y <= right) {
      ret.push(matrix[x][y++]);
    }

    if (isDone()) {
      break;
    }

    y--;
    x++;
    top++;

    while (x <= bottom) {
      ret.push(matrix[x++][y]);
    }

    if (isDone()) {
      break;
    }

    x--;
    y--;
    right--;

    while (y >= left) {
      ret.push(matrix[x][y--]);
    }

    if (isDone()) {
      break;
    }

    y++;
    x--;
    bottom--;

    while (x >= top) {
      ret.push(matrix[x--][y]);
    }

    if (isDone()) {
      break;
    }

    x++;
    y++;
    left++;
  }

  return ret;
}

console.log(
  spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ])
);
