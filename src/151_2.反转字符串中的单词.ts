/**
 * 双指针（简化）
 */
function reverseWords(s: string): string {
  const EC = ' ';

  // 添加 前导 0
  const ns = s.padStart(s.length + 1);
  const len = ns.length;

  let ca: string[] = [];

  let p1 = len - 1;
  let p2 = p1;

  while (p1 > 0) {
    while (p1 > 0 && ns[p1] === EC) {
      p1--;
    }

    p2 = p1;

    while (p1 > 0 && ns[p1] !== EC) {
      p1--;
    }
    
    // 边界条件（说明p1前面没有字符了）
    if (p1 === p2) {
      break;
    }

    const w = ns.slice(p1 + 1, p2 + 1);
    ca.push(w);
  }

  return ca.join(' ');
};

console.log(reverseWords("the"));
// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("  hello world  "));
// console.log(reverseWords("a good   example"));

export {};
