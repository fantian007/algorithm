// 利用 异或运算
function addBinary(a: string, b: string): string {
  let c = 0;
  const charArr: number[] = [];

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    // 注意：是 Numer(a[i] ?? 0)，不是 Number(a[i]) ?? 0。Number(undefined) 为 NaN，注意区别
    const v1 = Number(a[i] ?? 0);
    const v2 = Number(b[j] ?? 0);

    // 当前位置的数值
    charArr.unshift(v1 ^ v2 ^ c);

    // 进位
    c = v1 + v2 + c > 1 ? 1: 0;
  }
  
  if (c === 1) {
    charArr.unshift(1);
  }

  return charArr.join('');
};

// const r = addBinary("11", '1'); // 100
// const r = addBinary("1010", "1011"); // 10101
const r = addBinary("0", "0"); // 0
console.log(r);

export { }
