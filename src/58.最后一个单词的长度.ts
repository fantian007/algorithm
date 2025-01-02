function lengthOfLastWord(s: string): number {
  // 记住要去除空串
  // return s.split(' ').filter(Boolean).slice(-1)[0].length;
  // return s.trim().split(' ').slice(-1)[0].length;
  // return s.trim().split(' ').pop().length;
  return s.trim().split(' ').at(-1).length;
};

const r = lengthOfLastWord("Hello World");
console.log(r);

export { };
