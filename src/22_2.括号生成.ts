/**
 * 回溯
 * 
 * 思路：
 * 1. 初始可使用的 ( 或者 ) 的个数都是 n
 * 2. 进行自由拼接，使用了 2 个 递归来 组合 （ 和 ），如果有 3 种符号，同理使用 3 个递归；或者使用 for 循环，遍历3次拼接不同的符号
 * 3. 自由拼接，有大量不符合要求的情况，将不符合要求的剪枝即可
 * 4. 拼接过程中遵守 2 个规定：
 *  1. 左右括号的数量初始为 n, 递归过程中可使用数量不能小于 0，保证了括号的对数是 n
 *  2. 右括号的可使用数量始终 大于 左括号（左括号已使用的数量不能小于右括号已使用数量），保证了是配对的括号
 */
function generateParenthesis(n: number): string[] {
  const r: string[] = [];

  // left, right 为还可使用的 左右括号的 数量
  const dfs = (cur: string, left: number, right: number) => {
    if (left < 0 || left > right) {
      return;
    }

    if (left === 0 && right === 0) {
      r.push(cur);
      return;
    }

    dfs(cur + '(', left - 1, right);
    dfs(cur + ')', left, right - 1);
  }

  dfs('', n, n);

  return r;
};

// const r = generateParenthesis(1);
const r = generateParenthesis(3);
console.log(r);

export { }

