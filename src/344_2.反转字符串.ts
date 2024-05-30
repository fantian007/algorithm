/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const len = s.length;
  let left = 0;
  let right = len - 1;

  while (left < right) {
    const t = s[left];
    s[left] = s[right];
    s[right] = t;

    left++;
    right--;
  }
}

const a = ["H","a","n","n","a","h"];

reverseString(a);

console.log(a);

export {};
