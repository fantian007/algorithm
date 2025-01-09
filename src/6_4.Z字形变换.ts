/**
 * 模拟 Z 字形 排列
 */
function convert(s: string, numRows: number): string {
  // 行数 1，直接返回字符串
  if (numRows === 1) {
    return s;
  }

  // 一维数组，存放每行字符串
  const arr = new Array(numRows).fill('');

  // 当前行
  let row = 0;
  // Z 字形 遍历方向：-1-上; 1-下
  let d = -1;

  for (const c of s) {
    // 对应行 拼接字符
    arr[row] += c;

    // 到达边界，改变方向
    if (row === 0 || row === numRows - 1) {
      d = -d;
    }

    // 用方向值对 行数进行 加减
    row += d;
  }

  // 使用 flat 变为一维数组，再 join 变字符串
  return arr.join('');
};

const r = convert('AB', 1); // AB
// const r = convert('PAYPALISHIRING', 3); // PAHNAPLSIIGYIR
// const r = convert('PAYPALISHIRING', 4); // PINALSIGYAHRPI
console.log(r);

export { }
