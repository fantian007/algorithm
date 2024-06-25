/**
 * @see https://programmercarl.com/0040.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8CII.html#%E6%80%9D%E8%B7%AF
 */
function combinationSum2(candidates: number[], target: number): number[][] {
  const r: number[][] = [];

  // 树层去重，需要对数组排序
  candidates = candidates.sort((a, b) => a - b);
  const path: number[] = [];
  let sum = 0;

  // used 记录了 candidates 对应位置的元素是否被添加进 path
  const backtracking = (sum: number, start: number, used: number[]) => {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      r.push(path.slice());
    }

    for (let i = start; i < candidates.length; i++) {
      // 因为有 i - 1 的下标，所以 i > 0
      // 排序后，candidates 相邻的相同，那么可能会有重复
      // used[i - 1] = 0 代表 i-1,i 此时是同层节点，同层节点不可有重复
      // used[i - 1] = 1 代表 i-1,i 此时是同一树枝上节点，一前一后，可重复
      if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === 0) {
        continue;
      }

      path.push(candidates[i]);
      sum += candidates[i];
      used[i] = 1;

      // i+1 保证了相同位置的元素不可使用第二次
      // 进入递归，下一步增加深度，used[i]为 1
      backtracking(sum, i + 1, used);
      // 退出递归，下一步增加宽度，used[i]为 0

      path.pop();
      sum -= candidates[i];
      used[i] = 0;
    }
  };

  backtracking(sum, 0, []);

  return r;
}

const r = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
// const r = combinationSum2([2, 5, 2, 1, 2], 5);

console.log(r);

export {};
