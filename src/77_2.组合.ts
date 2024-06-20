/**
 * @see https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html#%E6%80%9D%E8%B7%AF
 * 递归 + 单层循环 可实现 多层循环
 */
function combine(n: number, k: number): number[][] {
  const arr = Array.from({ length: n }, (i, v) => v + 1);
  const r: number[][] = [];

  const backtrack = (path: number[], startIndex: number) => {
    if (path.length === k) {
      r.push(path.slice());
    }

    /**
     * 剪枝优化
     * 1. 还需要的个数 k - path.length
     * 2. 还剩余的可遍历个数：n - i
     * 3. n - i >= k - path.length, 得出 i <= n - (k - path.length) + 1
     */

    // 循环实现了宽度遍历
    const l = path.length;
    for (let i = startIndex; i < n; i++) {
      path.push(arr[i]);
      //   递归实现了深度遍历
      backtrack(path, i + 1);
      path.pop();
    }
  };

  backtrack([], 0);

  return r;
}

const r = combine(4, 2);
console.log(r);

export {};

[1, 2, 3, 4];
