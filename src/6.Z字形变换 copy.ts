/**
 * 模拟 Z 字形 排列
 */
function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  // 最终的字符串
  let r = '';

  // 按 Z 字形顺序 存储各元素 元素：[行，列，当前字符在 s 字符串中的索引]
  const arr: [number, number, number][] = [];

  // 行索引
  let k = 0;
  // 列索引
  let j = 0;
  // 方向：1-向下；0-向上
  let d = 1;

  // 遍历字符串，开始模拟 Z字形 步骤
  for (let i = 0; i < s.length; i++) {
    // 处于第一行
    if (k === 0) {
      // 向下遍历
      d = 1;
    }

    // 处于最后一行
    if (k === numRows - 1) {
      // 向上遍历
      d = -1;
    }

    // 向下遍历，行 +1，列不变
    if (d === 1) {
      arr.push([k, j, i]);
      k++;
    }

    // 向上遍历，行 -1，列 +1
    if (d === -1) {
      arr.push([k, j, i]);
      k--;
      j++;
    }
  };

  // 二维数组
  const matrix = new Array(numRows).fill(0).map(_ => new Array<[number, number, number]>());
  // 将一维数组 arr 按行 聚合成 二维数组
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i][0];

    matrix[row].push(arr[i]);
  };

  // 遍历二维数组，按行拼接字符
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    for (let j = 0; j < row.length; j++) {
      const item = row[j];

      r += s[item[item.length - 1]];
    };
  };

  return r;
};

// const r = convert('AB', 1); // AB
const r = convert('PAYPALISHIRING', 3); // PAHNAPLSIIGYIR
// const r = convert('PAYPALISHIRING', 4); // PINALSIGYAHRPI
console.log(r);

export { }
