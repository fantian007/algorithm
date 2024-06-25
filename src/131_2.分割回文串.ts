// 是否回文字符串
const isMirrorStr = (str: string, start: number, end: number) => {
  let left = start;
  let right = end;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// 主函数
function partition(s: string): string[][] {
  const r: string[][] = [];
  const path: string[] = [];

  const backtracking = (start: number) => {
    if (start >= s.length) {
      r.push(path.slice());
      return;
    }

    for (let i = start; i < s.length; i++) {
      if (i > start && !isMirrorStr(s, start, i)) {
        // 相当于放弃当前树枝，不再继续深入。切换到下一个树枝的同层节点继续深入
        continue;
      }

      path.push(s.substring(start, i + 1));
      backtracking(i + 1);
      path.pop();
    }
  };

  backtracking(0);

  return r;
}

const r = partition("aab");

console.log(r);

export {};
