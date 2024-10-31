// 先拆分为数组，从数组末尾开始相加计算
function addBinary(a: string, b: string): string {
  // 字符串拆数组
  const ar = a.split('').map(Number).reverse();
  const br = b.split('').map(Number).reverse();

  // 字符串最大长度
  let max = Math.max(ar.length, br.length);

  // 结果
  let r = '';
  // 进位
  let c = 0;
  // 当前操作索引
  let k = 0

  // 模拟二进制
  while (k <= max) {
    const i1 = ar[k] ?? 0;
    const i2 = br[k] ?? 0;

    // 2者相加 + 进位
    const sum = i1 + i2 + c;

    // 当前位置的数
    r = sum % 2 + r;

    // 更新进位
    if (sum >= 2) {
      c = 1;
    } else {
      c = 0;
    }

    k++;
  }

  // 可能会出现 '00', 这种直接返回 '0'
  if (r.startsWith('0')) {
    return r.slice(1);
  } else {
    return r;
  }
};

// const r = addBinary("11", '1'); // 100
// const r = addBinary("1010", "1011"); // 10101
const r = addBinary("0", "0"); // 0
console.log(r);

export { }
