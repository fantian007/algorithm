function solveNQueens(n: number): string[][] {
  const r: string[][] = [];
  const board = new Array(n)
    .fill(0)
    .map((_) => new Array(n).fill(".")) as string[][];

  function isValid(row: number, col: number, board: string[][]): boolean {
    const n: number = board.length;

    // 检查列（行不用检查，递归 i + 1 保证每行只有一个 Q）
    for (let row of board) {
      if (row[col] === "Q") return false;
    }

    let x = row;
    let y = col;

    // 检查 45度角
    while (y < n && x >= 0) {
      if (board[x--][y++] === "Q") return false;
    }

    y = col;
    x = row;

    // 检查 135度角
    while (y >= 0 && x >= 0) {
      if (board[x--][y--] === "Q") return false;
    }

    // 225度角、315度角 不用检查，因为还没有遍历到，没有 Q 存在

    return true;
  }

  const backtracking = (row: number, board: string[][]) => {
    if (row === n) {
      r.push(board.map((m) => m.join("")));
      return;
    }

    for (let i = 0; i < n; i++) {
      // if 相当于剪枝
      if (isValid(row, i, board)) {
        board[row][i] = "Q";
        // 下一行
        backtracking(row + 1, board);
        board[row][i] = ".";
      }
    }
  };

  backtracking(0, board);

  return r;
}

const r = solveNQueens(4);
console.log(r);

export {};
