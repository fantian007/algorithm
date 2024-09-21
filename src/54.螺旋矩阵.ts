// 模拟法
function spiralOrder(matrix: number[][]): number[] {
  // 顺时针收集元素
  const ret = [];

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

  // 是否遍历完毕
  const isDone = () => ret.length === m * n;

  while (!isDone()) {
    // 遍历上方行
    while (y <= right) {
      ret.push(matrix[x][y++]);
    }

    if (isDone()) {
      break;
    }

    // 多+1，减 -1
    y--;
    // 下一行
    x++;
    // 上边界下移（去掉刚遍历的行）
    top++;

    // 遍历右侧列
    while (x <= bottom) {
      ret.push(matrix[x++][y]);
    }

    if (isDone()) {
      break;
    }

    // 同上
    x--;
    y--;
    // 右边界左移
    right--;

    // 遍历下方行
    while (y >= left) {
      ret.push(matrix[x][y--]);
    }

    if (isDone()) {
      break;
    }

    // 同上
    y++;
    x--;
    // 下边界上移
    bottom--;

    // 遍历左侧列
    while (x >= top) {
      ret.push(matrix[x--][y]);
    }

    if (isDone()) {
      break;
    }

    // 同上
    x++;
    y++;
    // 左边界右移
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

export {}