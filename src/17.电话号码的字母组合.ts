function letterCombinations(digits: string): string[] {
  const r: string[] = [];

  if (digits.length === 0) {
    return r;
  }
  const letterMap = [
    "", // 0
    "", // 1
    "abc", // 2
    "def", // 3
    "ghi", // 4
    "jkl", // 5
    "mno", // 6
    "pqrs", // 7
    "tuv", // 8
    "wxyz", // 9
  ];

  // i 代表遍历到第几个按键
  const backtracking = (path: string[], i: number) => {
    if (path.length === digits.length) {
      r.push(path.join(""));
      return;
    }

    const num = digits[i];
    // 当前按键上的字母
    const letters = letterMap[num];

    // j 自己局部作用域记录着遍历到了第几个字母
    for (let j = 0; j < letters.length; j++) {
      const char = letters[j];

      path.push(char);

      // 跳到下一个按键
      backtracking(path, i + 1);

      path.pop();
    }
  };

  backtracking([], 0);

  return r;
}

const r = letterCombinations("234");

console.log(r);

export {};
