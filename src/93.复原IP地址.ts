function restoreIpAddresses(s: string): string[] {
  const r: string[] = [];
  const path: string[] = [];

  const backtracking = (start: number) => {
    if (start >= s.length) {
      if (path.length === 4) {
        r.push(path.join("."));
      }

      return;
    }

    for (let i = start; i < s.length; i++) {
      const v = s.substring(start, i + 1);

      // 剪枝
      if (
        // 大于3位数，一定大于 255
        v.length > 3 ||
        // 数值大于 255
        Number(v) > 255 ||
        // 有前导 0
        (v.length > 1 && v.startsWith("0")) ||
        // 超出 4 段
        path.length >= 4
      ) {
        // 相当于放弃当前树枝，不再继续深入。切换到下一个树枝的同层节点继续深入
        continue;
      }

      path.push(v);
      backtracking(i + 1);
      path.pop();
    }
  };

  backtracking(0);

  return r;
}

// const r = restoreIpAddresses("25525511135");
const r = restoreIpAddresses("101023");
console.log(r);

export {};
