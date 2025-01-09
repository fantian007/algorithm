/**
 * 双指针
 * p1 先定位到单词结尾，p2 记录该位置。然后 p1 定位到单词开头，那么 p1-p2 可以截取出单词
 * 循环上述逻辑即可（主要是 p1 不断移动用来寻找单词的开始/结束位置，p2只用来标记结束位置，p2 不需要移动）
 * 严格讲，p1 每次定位到单词前面的空格处，所以为了好处理边界条件，可以在字符串前面加一个空格
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

    p2 = p1 + 1;

    while (p1 > 0 && ns[p1] !== EC) {
      p1--;
    }
    
    // if (p1 + 1 === p2 && ns[p1] === EC) {
    //   break;
    // }
    // 等同上面，改成下面的更好理解
    // 举例：对于 " a xxx"，p1 会移动到 0，p2 会为 2，截取 a 之后，while (p1 > 0) 会退出循环
    // 举例：对于 "  a xxx"，前一次截取完 a 后，p1 会移动到 0 位置，p2 = p1 + 1 会移动到 1 位置，需要用 break 退出循环

    // 边界条件
    if (p1 === 0 && p2 === 1) {
      break;
    }

    // p1 定位到单词前面的空格处，所以 +1
    const w = ns.slice(p1 + 1, p2);
    ca.push(w);

    p2 = p1;
  }

  return ca.join(' ');
};

console.log(reverseWords("the"));
// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("  hello world  "));
// console.log(reverseWords("a good   example"));

export {};
