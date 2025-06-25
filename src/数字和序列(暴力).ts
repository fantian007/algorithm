// 给一个字符串："112358"，前2个数的和 = 后一个数的和
// 例如：1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, ...， 其中和不以 0 开头
// "199100199" 也符合序列
// 求写个 isXuLie 函数，判断给出的字符串，可否组成序列

export const slice = (str: string, i: number, n: number) => str.slice(i, i + n);

/**
 * 暴力 + 剪枝
 */
export const isXuLie = (str: string) => {
  const n = str.length;
  if (n < 3) return false;

  // 第1个数长度
  for (let n1 = 1; n1 <= n / 2; n1++) {
    // 若长度>1，第一个数不能以0开头
    if (n1 > 1 && str[0] === '0') continue;

    // 第2个数长度
    for (let n2 = 1; n1 + n2 <= n - 1; n2++) {
      // 若长度>1，第二个数不能以0开头
      if (n2 > 1 && str[n1] === '0') continue;

      // 前面只是长度的遍历，从这里开始才是从头截取字符判断

      // i,j,k 分别指向 第1个，第2个，第3个 数开始位置
      let i = 0, j = n1, k = n1 + n2;
      if (k > n) continue;

      // 前2个数
      let a = parseInt(slice(str, i, n1));
      let b = parseInt(slice(str, j, n2));

      while (k < n) {
        const sum = a + b;
        const sumStr = sum.toString();
        const sumLen = sumStr.length;

        // 第3个数的长度超了
        if (k + sumLen > n) break;
        // 和不相等
        if (slice(str, k, sumLen) !== sumStr) break;

        // 3个数的起始坐标 轮动
        i = j; j = k; k += sumLen;
        // 前2个数的值 轮动
        a = b; b = sum;
      }

      if (k === n) return true;
    }
  }

  return false;
}

console.log(isXuLie('112358')); // true
console.log(isXuLie('199100199')); // true
console.log(isXuLie('123')); // true (1+2=3)
console.log(isXuLie('1203')); // false
