function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (stack.length === 0) {
      stack.push(char);
      continue;
    }

    const last = stack[stack.length - 1];

    if (char === '}' && last === '{') {
      stack.pop();
      continue;
    }

    if (char === ')' && last === '(') {
      stack.pop();
      continue;
    }

    if (char === ']' && last === '[') {
      stack.pop();
      continue;
    }
    
    stack.push(char);
  };

  return stack.length === 0;
}

// console.log(isValid("()"));
console.log(isValid("()[]{}"));

export { };
