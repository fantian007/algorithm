// 题目：将一个字符串，转为合法的 IP 地址，列出所有可能组合。例如：25525511135 => ['255.255.11.135', '255.255.111.35']

// 是否合法的 IP 段（范围是 0 - 255; 长度最大为 3; 不能以 0 开头）
const isValidSegment = (s: string): boolean => {
  if (s.length <= 0 || s.length > 3) return false;
  if (parseInt(s) > 255) return false;
  if (s.length > 1 && s[0] === '0') return false;

  return true;
}

const restoreIpAddresses = (s: string): string[] => {
  const r: string[] = [];
  const n = s.length;

  if (n < 4 || n > 12) return [];

  const backtracking = (path: string[], start: number) => {
    if (path.length === 4 && start === n) {
      r.push(path.slice().join('.'));
      return;
    }

    for (let i = 1; i <= 3; i++) {
      if (start + i > n) break;

      const segment = s.slice(start, start + i);

      if (!isValidSegment(segment)) {
        continue;
      }

      path.push(segment);
      backtracking(path, start + i);
      path.pop();
    };
  }

  backtracking([], 0);

  return r;
}

const r = restoreIpAddresses('25525511135');
console.log(r);

export { }
