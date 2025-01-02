/**
 * 使用映射简化 if else
 * Map 可以保持插入顺序
 */
function intToRoman(num: number): string {
  const m = new Map<number, string>([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]);

  let r = '';

  while (num > 0) {
    for (let [k, v] of m) {
      if (num >= k) {
        r += v;
        num -= k;
        break;
      }
    }
  }

  return r;
};

const r = intToRoman(3749); // MMMDCCXLIX
// const r = intToRoman(1000); // M
console.log(r);

export { }
