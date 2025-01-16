// 回溯(大数据量时超时)
function twoSum(numbers: number[], target: number): number[] {
  let r = [];

  const backtrack = (path: number[], start: number) => {
    if (r.length) {
      return;
    }

    if (path.length === 2) {
      if (numbers[path[0]] + numbers[path[1]] === target) {
        r = path.slice();
      }

      return;
    }

    for (let i = start; i < numbers.length; i++) {
      path.push(i);

      backtrack(path, i + 1);

      path.pop();
    }
  }

  backtrack([], 0);

  return r.map(v => v + 1);
};

// const r = twoSum([2, 7, 11, 15], 9); // [1,2]
// const r = twoSum([2, 3, 4], 6); // [1,3]
const r = twoSum([0, 0, 3, 4], 0); // [1,2]

console.log(r);

export { };
