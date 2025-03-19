function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return [];

  const r = [[nums[0]]] as number[][];
  let rIndex = 0;

  // 连续数字 分组
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === r[rIndex].at(-1) + 1) {
      r[rIndex].push(nums[i]);
    } else {
      r.push([nums[i]]);
      rIndex++;
    }
  }

  // 每个分组取 首尾
  return r.map(arr => {
    if (arr.length >= 2) {
      return `${arr.at(0)}->${arr.at(-1)}`;
    } else {
      return arr.at(0).toString();
    }
  });
};

const r = summaryRanges([0, 1, 2, 4, 5, 7]);
// const r = summaryRanges([0, 2, 3, 4, 6, 8, 9]);
console.log(r);

export { }
