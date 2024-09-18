function lengthOfLastWord(s: string): number {
  // 记住要去除空串
  return s.split(' ').filter(Boolean).slice(-1)[0]?.length ?? 0;
};

const r = lengthOfLastWord("Hello World");
console.log(r);

export { };
