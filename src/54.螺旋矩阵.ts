// 模拟法
function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }

  const m = matrix.length; // 行数
  const n = matrix[0].length; // 列数

  // 四个边界
  let top = 0;
  let right = n - 1;
  let bottom = m - 1;
  let left = 0;

  // 当前遍历位置
  let x = 0;
  let y = 0;

  const r = [matrix[x][y]];

  // 是否遍历完毕
  const isDone = () => r.length === m * n;

  while (!isDone()) {
    // 遍历上方行
    while (y < right) {
      y++;
      r.push(matrix[x][y]);
    }
    // 上边界下移（去掉刚遍历的行）
    top++;

    if (isDone()) {
      break;
    }

    // 遍历右侧列
    while (x < bottom) {
      x++;
      r.push(matrix[x][y]);
    }
    // 右边界左移
    right--;

    if (isDone()) {
      break;
    }

    // 遍历下方行
    while (y > left) {
      y--;
      r.push(matrix[x][y]);
    }
    // 下边界上移
    bottom--;

    if (isDone()) {
      break;
    }

    // 遍历左侧列
    while (x > top) {
      x--;
      r.push(matrix[x][y]);
    }
    // 左边界右移
    left++;

    if (isDone()) {
      break;
    }
  }

  return r;
}

console.log(
  spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ])
);

export { }