// 将表达式操作 转为 公式计算
// left + right = sum
// left - right = target
// left = (sum + target) / 2
// sum,target 都是常数，结果就是 找数组中是否有 和为 (sum+target)/2 的子集
function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((a, b) => a + b, 0);
  const left = (sum + target) / 2;

  const r: number[][] = [];
  const path: number[] = [];

  const traverse = (start: number) => {
    // 子集求和
    const s = path.reduce((a, b) => a + b, 0);

    if (s === left) {
      r.push(path.slice());
      // 不能 return, 可能有 0 还要加入 path
      // return;
    }

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      traverse(i + 1);
      path.pop();
    }
  };

  traverse(0);

  return r.length;
}

// const r = findTargetSumWays([1, 1, 1, 1, 1], 3);
const r = findTargetSumWays([1, 0], 1);
console.log(r);

export {};
