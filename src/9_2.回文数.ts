/*
 * [9] 回文数
 */

function isPalindrome(x: number): boolean {
  const c = x.toString().split("");

  while (c.length > 1) {
    const head = c.shift();
    const tail = c.pop();

    if (head !== tail) {
      return false;
    }
  }

  // 是回文
  if (c.length === 0 || c.length === 1) {
    return true;
  }

  return false;
}
