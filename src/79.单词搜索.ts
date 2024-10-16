function exist(board: string[][], word: string): boolean {
  const row = board.length;
  const col = board[0].length;

  if (row === 0) {
    return false;
  }

  // i,j 是当前位置，index 是 word 中字符索引
  const backtracking = (i: number, j: number, index: number) => {
    // 剪枝1：超出二维数组边界，返回 false
    if (i < 0 || j < 0 || i >= row || j >= col) {
      return false;
    }

    // 剪枝2：当前位置字符和 word 中对应索引字符不匹配，返回 false
    if (board[i][j] !== word[index]) {
      return false;
    }

    // 符合条件，返回 true
    if (index === word.length - 1) {
      return true;
    }

    // 将走过的位置置为 null, 加上剪枝判断，防止重复走
    board[i][j] = null;

    // 如果无法枚举 + 通用逻辑，用 for 循环；如果是固定的几种选择，直接枚举；
    // 每个位置，可以向 上右下左 4 个方向走
    const res =
      // 上
      backtracking(i - 1, j, index + 1) ||
      // 右
      backtracking(i, j + 1, index + 1) ||
      // 下
      backtracking(i + 1, j, index + 1) ||
      // 左
      backtracking(i, j - 1, index + 1);

    // 之前置为 null，回撤之后，记得恢复原来的值
    board[i][j] = word[index];

    // 有一个方向走通，那么返回 true
    return res;
  }

  // 遍历二维数组，每个位置都进行递归判断
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 有一个位置作为开头可以走通，那么返回 true
      if (backtracking(i, j, 0)) return true;
    };
  };

  return false;
};

const r = exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCEDF");
console.log(r);

export { }
