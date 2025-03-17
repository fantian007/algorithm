// 利用 map 以数字做键，会自动排序的原理
// map 键自动去重，相同的数字不增加计数
// 键是正数才会保证顺序，由于题目说明数值范围是 [-10^9, 10^9]，所以需要将负数 + 10^9 转为正数
function longestConsecutive(nums: number[]): number {
  const m = {};

  nums.forEach(v => m[v + 10 ** 9] = 1);
  const keys = Object.keys(m);

  let c = 1;
  let max = 1;

  for (let i = 1; i < keys.length; i++) {
    if (+keys[i] === (+keys[i - 1] + 1)) {
      c++;
    } else {
      c = 1;
    }

    max = Math.max(max, c);
  }

  return max;
};

// const r = longestConsecutive([100, 4, 200, 1, 3, 2]); // 4
const r = longestConsecutive([1, 0, 1, 2]); // 3
// const r = longestConsecutive([0, -1]); // 2
console.log(r);

export { }
