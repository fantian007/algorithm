function isValidSudoku(board: string[][]): boolean {
  // 每行 1-9 的个数
  const row = new Array(9).fill(0).map(_ => new Array(9).fill(0));
  // 每列 1-9 的个数
  const col = new Array(9).fill(0).map(_ => new Array(9).fill(0));
  // 每宫（3x3）方块内 1-9 的个数
  const subBox = new Array(3).fill(0).map(_ => new Array(3).fill(0).map(_ => new Array(9).fill(0)));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // 只统计数字
      if (board[i][j] !== '.') {
        // 数字 1-9
        const v = Number(board[i][j]);
        // 数字在各数组内的下标
        const num_index = v - 1;

        // 填充行数组
        row[i][num_index] += 1;
        // 填充列数组
        col[j][num_index] += 1;

        // 数字 在哪个方块 中的下标
        const row_box_index = Math.floor(i / 3);
        const col_box_index = Math.floor(j / 3);
        // 填充 方块数组
        subBox[row_box_index][col_box_index][num_index] += 1;

        // 每行、每列、每个方块 内 1-9 只允许出现一次
        if (row[i][num_index] > 1 || col[j][num_index] > 1 || subBox[row_box_index][col_box_index][num_index] > 1) {
          return false;
        }
      }
    }
  }

  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

const r = isValidSudoku(board);
console.log(r);

export { }
