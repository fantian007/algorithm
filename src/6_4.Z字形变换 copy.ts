/**
 * 模拟 Z 字形 排列
 */
function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  // 行
  let i = 0;
  // 列
  let j = 0;
  // 字符串索引
  let index = 0;
  // 方向标识
  let f = -1;
  // 存放字符的二维数组
  const arr: string[][] = new Array(numRows).fill(0).map(_ => []);

  while (index < s.length) {
    if (i === 0) {
      f = -1;
    }

    if (i === (numRows - 1)) {
      f = 1;
    }

    if (f === -1) {
      arr[i].push(s[index]);
      i++;
    }

    if (f === 1) {
      arr[i].push(s[index]);
      i--;
      j++;
    }

    index++;
  }

  return arr.map(ar => ar.join('')).flat().join('');
};

const r = convert('AB', 1); // AB
// const r = convert('PAYPALISHIRING', 3); // PAHNAPLSIIGYIR
// const r = convert('PAYPALISHIRING', 4); // PINALSIGYAHRPI
console.log(r);

export { }
