// 对角线翻转 + 上下对称行翻转
function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // 对角线翻转
  for (let i = 0; i < n; i++) {
    // n - i 防止同个元素被翻转2次，只翻转对角线左上角元素
    for (let j = 0; j < n - i; j++) {
      // 和左上角元素对称的 右下角元素 的坐标
      const posX = (n - j) - 1;
      const posY = (n - i) - 1;

      const t = matrix[i][j];
      matrix[i][j] = matrix[posX][posY];
      matrix[posX][posY] = t;
    };
  };

  // 上下对称行翻转
  for (let i = 0; i < n / 2; i++) {
    [matrix[i], matrix[n - i - 1]] = [matrix[n - i - 1], matrix[i]];
  };
};

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
];
rotate(matrix);

console.log(matrix);

export { }
