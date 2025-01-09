/**
 * 模拟 Z 字形 排列
 */
function convert(s: string, numRows: number): string {
  // 二维数组，内部一维数组不定长(定长会浪费空间)
  // 二维数组中的每行存储 Z 字形 的每行字符
  const arr = new Array(numRows).fill(0).map(_ => new Array());

  // 当前遍历字符索引
  let i = 0;
  // 当前行
  let row = 0;
  // Z 字形 遍历方向：1-下; 0-上
  let d = 1;

  while (i < s.length) {
    // 对应行存入当前遍历到的字符
    arr[row].push(s[i]);

    // 下次处理的字符
    i++;

    // 向下，行 +1
    if (d === 1) {
      row++;
    }
    // 向上，行 -1
    else {
      row--;
    }

    // 边界：超出了行
    if (row === numRows) {
      // row 需要向上 2 行，回退之后不能小于 0
      row = Math.max(row - 2, 0);
      // 下次向上遍历
      d = 0;
    }

    // 边界：超出了行
    if (row < 0) {
      // row 需要向下 2 行，但是不能超出最大行索引
      row = Math.min(row + 2, numRows - 1);
      // 下次向下遍历
      d = 1;
    }
  }

  // 使用 flat 变为一维数组，再 join 变字符串
  return arr.flat().join('');
};

const r = convert('AB', 1); // AB
// const r = convert('PAYPALISHIRING', 3); // PAHNAPLSIIGYIR
// const r = convert('PAYPALISHIRING', 4); // PINALSIGYAHRPI
console.log(r);

export { }
