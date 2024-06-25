/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  const n = board.length;

  const isValid = (row: number, col: number, k: string): boolean => {
    // 行检查
    for (let i = 0; i < n; i++) {
      if (board[row][i] === k) return false;
    }

    // 列检查
    for (let i = 0; i < n; i++) {
      if (board[i][col] === k) return false;
    }

    // 妙啊
    const startX = Math.floor(row / 3) * 3;
    const startY = Math.floor(col / 3) * 3;

    for (let i = startX; i < startX + 3; i++) {
      for (let j = startY; j < startY + 3; j++) {
        if (board[i][j] === k) {
          return false;
        }
      }
    }

    return true;
  };

  const backtracking = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === ".") {
          for (let k = 1; k <= n; k++) {
            if (isValid(i, j, k.toString())) {
              board[i][j] = k.toString();
              if (backtracking()) return true;
              board[i][j] = ".";
            }
          }

          return false;
        }
      }
    }

    return true;
  };

  backtracking();
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const r = solveSudoku(board);
console.log(r);

export {};
