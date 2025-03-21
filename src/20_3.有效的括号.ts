function isValid(s: string): boolean {
  const m = {
    '[': ']',
    '(': ')',
    '{': '}'
  }

  const stack = [];

  for (const char of s) {
    if (m[char]) {
      stack.push(char);
    } else {
      if (char === m[stack.pop()]) {
        continue;
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// console.log(isValid("()"));
console.log(isValid("()[]{}"));

export { };
