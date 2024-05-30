// 利用栈来实现
function removeDuplicates(s: string): string {
  const stack = [];

  for (const char of s) {
    if (stack.length) {
      const top = stack[stack.length - 1];

      if (top === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}
