function candy(ratings: number[]): number {
  const candys: number[] = new Array(ratings.length).fill(1);

  // 从左到右遍历
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candys[i] = candys[i - 1] + 1;
    }
  }
  // [1,2,3,4,1]

  // 从右到左遍历
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      // 使用 max 是为了不破坏 从左到右 的大小关系
      candys[i] = Math.max(candys[i], candys[i + 1] + 1);
      // 下面这种写法会破坏
      // candys[i] = candys[i + 1] + 1;
    }
  }
  // [1,2,3,4,1]

  return candys.reduce((a, b) => a + b, 0);
}

// const r = candy([1, 2, 2, 5, 4, 3, 2]);
const r = candy([1, 3, 4, 5, 2]);
console.log(r);

export {};
