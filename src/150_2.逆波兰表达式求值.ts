// 使用栈，遇到 操作符，取出栈顶的 2 个元素进行计算，计算结果再入栈
function evalRPN(tokens: string[]): number {
  if (tokens.length < 3) return +tokens[0];

  const ops = { '+': 1, '-': 1, '*': 1, '/': 1 };
  const stack = [];

  for (const t of tokens) {
    if (!ops[t]) {
      stack.push(+t);
    } else {
      const a = stack.pop();
      const b = stack.pop();

      // 使用 eval 简化判断，但是 eval 执行效率慢
      // 被操作数要 加括号，类似 a=1, b=-2，组合成 1--2 这种不是算术表达式，加括号：1-(-2)
      let v = eval(`${b}${t}(${a})`);
      // 要求 向零截断
      v = v > 0 ? Math.floor(v) : Math.ceil(v);

      stack.push(v);
    }
  }

  return stack[0];
};

// const r = evalRPN(["2","1","+","3","*"]); // 9
// const r = evalRPN(["4", "13", "5", "/", "+"]); // 6
const r = evalRPN(["4", "-2", "/", "2", "-3", "-", "-"]); // 6
console.log(r);

export { }
