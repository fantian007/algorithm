// 使用栈，遇到 操作符，取出栈顶的 2 个元素进行计算，计算结果再入栈
function evalRPN(tokens: string[]): number {
  if (tokens.length === 1) {
    return parseInt(tokens[0]);
  }

  const stack = [];

  const op = ["+", "-", "*", "/"];

  for (const t of tokens) {
    if (!op.includes(t)) {
      stack.push(t);
    } else {
      // 注意 a,b 的顺序，b 是操作数，a 是被操作数。b 要先弹出。
      const b = parseInt(stack.pop());
      const a = parseInt(stack.pop());

      let r;

      if (t === "+") {
        r = a + b;
      } else if (t === "-") {
        r = a - b;
      } else if (t === "*") {
        r = a * b;
      } else if (t === "/") {
        const c = a / b;

        // 向 0 截断
        if (c < 0) {
          r = Math.ceil(c);
        } else {
          r = Math.floor(c);
        }
      }

      stack.push(r);
    }
  }

  return stack[0];
}
