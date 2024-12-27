// 1. 定义大小相同的数组，初始值都为 1
// 2. 从左到右遍历一遍，大的 + 1
// 3. 从右到左遍历一遍，大的 + 1（不一定要 +1， 使用 max 判断）
// 4. 求和
function candy(ratings: number[]): number {
  const r: number[] = new Array(ratings.length).fill(1);

  // 从左到右遍历
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      r[i] = r[i - 1] + 1;
    }
  }

  // 从右到左遍历
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      // 使用 max 是为了使 糖果数 最小
      r[i] = Math.max(r[i], r[i + 1] + 1);
    }
  }

  // 求和
  return r.reduce((a, b) => a + b, 0);
}

// const r = candy([1, 2, 2, 5, 4, 3, 2]);
const r = candy([1, 3, 4, 5, 2]);
console.log(r);

export {};
