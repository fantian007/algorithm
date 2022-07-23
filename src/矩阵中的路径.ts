function exist(board: string[][], word: string): boolean {
  let exist = false;
  const rowLen = board.length;
  const colLen = board[0].length;

  const inTwoDimension = (data: [number, number][], target: [number, number]) => {
    return data.find(d => d[0] === target[0] && d[1] === target[1]);
  }

  const backdrop = (pos: [number, number][] = []) => {
    if (exist) {
      return;
    }

    const subStr = pos.reduce((a, b) => a + board[b[0]][b[1]], '');

    if (subStr === word) {
      exist = true;

      return;
    }

    if (!word.startsWith(subStr)) {
      return;
    }

    // 末尾位置
    const [i, j] = pos.slice(-1)?.[0];

    const dire = [
      [i - 1, j],
      [i, j + 1],
      [i + 1, j],
      [i, j - 1]
    ];

    for (const d of dire) {
      const [_i, _j] = d;

      if (_i < 0 || _i >= rowLen || _j < 0 || _j >= colLen) {
        continue;
      }

      if (inTwoDimension(pos, [_i, _j])) {
        continue;
      }

      pos.push([_i, _j]);

      backdrop(pos);

      pos.pop();
    }
  }

  // 开始
  for (let i = 0; i < rowLen; i++) {
    if (exist) {
      break;
    }

    for (let j = 0; j < colLen; j++) {
      if (exist) {
        break;
      }

      backdrop([[i, j]]);
    }
  }

  return exist;
};

const r = exist(
  [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
  // "ABCCED"
  // "CCEESS"
  // "CCEESE"
  // "SFCSE"
  // "SFCF"
);

// const r = exist(
//   [["C","A","A"],["A","A","A"],["B","C","D"]],
//   // "AAB"
//   "AAAAAA"
// )

// const r = exist(
//   [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]],
//   "ABCEFSADEESE"
// )

console.log(r);