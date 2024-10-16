function totalNQueens(n: number): number {
  // 棋盘
  const board = new Array(n).fill(0).map(m => new Array(n).fill('.'));

  let r = 0;

  const isValid = (row: number, col: number) => {
    // 检查列
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') {
        return false;
      }
    }

    // 检查左上角
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }

    // 检查右上角
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }

    return true;
  }

  const backtracking = (row: number) => {
    if (row === n) {
      r++;
      return;
    }

    for (let j = 0; j < n; j++) {
      if (!isValid(row, j)) {
        continue;
      }

      board[row][j] = 'Q';
      backtracking(row + 1);
      board[row][j] = '.';
    };
  }

  backtracking(0);

  return r;
};

const r = totalNQueens(4); // 2
console.log(r);

export { }
