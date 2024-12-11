function hIndex(citations: number[]): number {
  // 倒序
  citations.sort((a, b) => b - a);

  let r = 0;

  // 遍历数组
  for (let i = 0; i <= citations.length; i++) {
    // 引用次数 是否 >= 篇数（i + 1)
    if (citations[i] >= i + 1) {
      // 更新篇数
      r = i + 1;
    }
  };

  // 返回篇数
  return r;
};


const r = hIndex([3, 0, 6, 1, 5]); // 3
// const r = hIndex([1, 3, 1]); // 1
// const r = hIndex([0]); // 0
// const r = hIndex([0, 1]); // 1
console.log(r);

export { }
