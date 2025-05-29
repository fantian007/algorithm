function printDiagonally(matrix) {
  if (!matrix || matrix.length === 0) return [];

  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  // 遍历所有可能的对角线和
  // 一个元素所在的斜向对角线上各点的坐标和是固定的: (0,2),(1,1),(2,0)
  // 最后一个点坐标：[rows - 1, cols - 1]，所以对角线各点坐标的最大和：rows + cols - 2
  for (let sum = 0; sum <= rows + cols - 2; sum++) {
    // 选最右侧的列，有2种情况：1.起始点在第一层的(row = 0)，取 sum；2.起始点不在第一层的，sum 会越界，取 cols - 1 最大列坐标
    let startCol = Math.min(sum, cols - 1);
    let startRow = sum - startCol;

    // 沿着对角线收集元素（行递增，列递减）
    const diagonal = [];
    for (let i = startRow, j = startCol; i < rows && j >= 0; i++, j--) {
      diagonal.push(matrix[i][j]);
    }

    result.push(diagonal);
  }

  return result;
}

// 示例用法
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(JSON.stringify(printDiagonally(matrix)));
// 输出: 
// [
//   [1],
//   [2, 4],
//   [3, 5, 7],
//   [6, 8],
//   [9]
// ]    

export { }
