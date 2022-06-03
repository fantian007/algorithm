/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 * 
 * 就是同行，同列，对角线上不能有皇后
 */

// @lc code=start
type C = 'Q' | '.';

function solveNQueens(n: number): string[][] {
  const res = [];

  const board: C[][] = Array.from({ length: n }, () => new Array<C>(n).fill('.'));

  const p = (board: C[][], row: number) => {
    if (row === n) {
      res.push(board.map(d => d.join('')));
    }

    for (let i = 0; i < n; i++) {
      if (!isValid(n, board, row, i)) {
        continue;
      }

      board[row][i] = 'Q';
      p(board, row + 1);
      board[row][i] = '.';
    }
  }

  p(board, 0);

  return res;
};

const isValid = (n: number, board: C[][], row: number, col: number) => {
  // 检查列
  for (let i = 0; i < row; i++) {
    const v = board[i][col];

    if (v === 'Q') {
      return false;
    }
  }

  // 检查左上角
  for (
    let i = row - 1, j = col - 1;
    i >= 0 && j >= 0;
    i--, j--
  ) {
    const v = board[i][j];

    if (v === 'Q') {
      return false;
    }
  }

  // 检查右上角
  for (
    let i = row - 1, j = col + 1;
    i >= 0 && j < n;
    i--, j++
  ) {
    const v = board[i][j];

    if (v === 'Q') {
      return false;
    }
  }

  return true;
}
// @lc code=end

