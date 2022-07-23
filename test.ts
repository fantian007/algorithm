function exist(board: string[][], word: string): boolean {
  let exist = false;
  const rowLen = board.length;
  const colLen = board[0].length;
  const pos = [[0, 0]];
  const subStrChars = [board[0][0]];

  const backdrop = (directions: Record<string, boolean> = {}) => {
    if (exist) {
      return;
    }

    const subStr = subStrChars.join('');

    if (subStr === word) {
      exist = true;
      return;
    }

    let prevI = 0;
    let prevJ = 0;

    if (!word.startsWith(subStr)) {
      subStrChars.pop();
      const r = pos.pop();

      prevI = r[0];
      prevJ = r[1];
    }

    let i = prevI;
    let j = prevJ;

    if (pos.length) {
      const t = pos.slice(-1)[0];

      i = t[0];
      j = t[1];
    }

    const e = pos.slice(0, -1).find(t => t[0] === i && t[1] === j);
    if (e) {
      return;
    }

    if (i < 0 || j < 0 || i >= rowLen || j >= colLen) {
      return;
    }
    else {
      // 上
      const topI = i - 1;
      const topJ = j;
      if (!directions.top && topI !== prevI && topI >= 0) {
        const topV = board[topI][topJ];
        subStrChars.push(topV);
        
        directions.bottom = true;
        pos.push([topI, topJ]);
        backdrop(directions);
      }

      // 右
      const rightI = i;
      const rightJ = j + 1;
      if (!directions.right && rightJ !== prevJ && rightJ < colLen) {
        const rightV = board[rightI][rightJ];
        subStrChars.push(rightV);

        directions.left = true;
        pos.push([rightI, rightJ]);
        backdrop(directions);
      }

      // 下
      const bottomI = i + 1;
      const bottomJ = j;
      if (!directions.bottom && bottomI !== prevI && bottomI < rowLen) {
        const bottomV = board[bottomI][bottomJ];
        subStrChars.push(bottomV);

        directions.top = true;
        pos.push([bottomI, bottomJ]);
        backdrop(directions);
      }

      // 左
      const leftI = i;
      const leftJ = j - 1;
      if (!directions.left && leftJ !== prevJ && leftJ >= 0) {
        const leftV = board[leftI][leftJ];
        subStrChars.push(leftV);

        directions.right = true;
        pos.push([leftI, leftJ]);
        backdrop(directions);
      }
    }
  }

  backdrop();

  return exist;
};

const r = exist(
  [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
  // "ABCCED"
  // "CCEESS"
  "ABFS"
);

console.log(r);