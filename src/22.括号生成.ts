// 回溯
function generateParenthesis(n: number): string[] {
  const r: string[] = [];

  // open 还可使用的左括号的数量，close 还可使用的右括号的数量
  const dfs = (cur: string, open: number, close: number) => {
    if (open === 0 && close === 0) {
      r.push(cur);
      return;
    }

    if (open > 0) {
      // close 最大涨到 n
      dfs(cur + '(', open - 1, close + 1);
    }

    if (close > 0) {
      // close 开始减少，最小是 0
      dfs(cur + ')', open, close - 1);
    }
  }

  dfs('', n, 0);

  return r;
};

// const r = generateParenthesis(1);
const r = generateParenthesis(3);
console.log(r);

export { }

