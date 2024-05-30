function isValid(s: string): boolean {
  const stack = [];

  for (const char of s) {
    if (stack.length) {
      const top = stack[stack.length - 1];

      if (top === "(" && char === ")") {
        stack.pop();
      } else if (top === "[" && char === "]") {
        stack.pop();
      } else if (top === "{" && char === "}") {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length ? false : true;
}

console.log(isValid("()"));

export {};
