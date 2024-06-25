function findSubsequences(nums: number[]): number[][] {
  const r: number[][] = [];
  const path: number[] = [];

  const backtracking = (start: number) => {
    if (path.length >= 2) {
      r.push(path.slice());
    }

    // 记录同一层使用过的元素
    const s = new Set<number>();

    for (let i = start; i < nums.length; i++) {
      if (nums[i] < path[path.length - 1]) {
        continue;
      }

      // 同一层，不可使用相同元素。不用 pop, 下个 深度，s 会被清空
      if (s.has(nums[i])) {
        continue;
      }

      // 这是也是针对同层不能使用相同元素，但有个前提，nums 是有序的。
      // 本题是无序的，用上面的 set 方法
      // if (i > start && nums[i] === nums[i - 1]) continue;

      // 记录本层使用过的元素
      s.add(nums[i]);

      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };

  backtracking(0);

  return r;
}

// const r = findSubsequences([4, 6, 7, 7]);
const r = findSubsequences([4, 7, 6, 7]);
// const r = findSubsequences([4, 4, 3, 2, 1]);
// const r = findSubsequences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1]);
console.log(r);

export {};
