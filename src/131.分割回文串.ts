// 是否回文字符串
const isMirrorStr = (str: string) => {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// 数组内所有元素是否都是回文字符串
const isMirrorPath = (path: string[]) => {
  for (let i = 0; i < path.length; i++) {
    if (!isMirrorStr(path[i])) {
      return false;
    }
  }

  return true;
};

// 主函数
function partition(s: string): string[][] {
  const r: string[][] = [];

  const backtracking = (path: string[], start: number) => {
    const l = path.join("").length;

    if (l === s.length) {
      // 判断是否回文
      if (isMirrorPath(path)) {
        r.push(path.slice());
      }
    }

    // 这个变量很重要
    // 增加深度的时候清空，从 start位置(下一个字符位置) 遍历
    // 增加宽度的时候拼接
    let c = "";

    for (let i = start; i < s.length; i++) {
      c += s[i];
      path.push(c);

      backtracking(path, i + 1);

      path.pop();
    }
  };

  backtracking([], 0);

  return r;
}

const r = partition("aab");

console.log(r);

export {};
