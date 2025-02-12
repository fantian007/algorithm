function rotate(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;

  // 对角线翻转
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 避免翻转2遍，又翻转回起始状态
      if (i > j) {
        continue;
      }

      // 交换位置
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 每行对称翻转
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n / 2; j++) {
      [matrix[i][j], matrix[i][n - j - 1]] = [matrix[i][n - j - 1], matrix[i][j]];
    }
  }
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
