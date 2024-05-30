function reverseStr(s: string, k: number): string {
  const arr = s.split("");
  const len = arr.length;

  for (let i = 0; i < len; i += 2 * k) {
    let left = i;
    let right = left + k - 1 > len - 1 ? len - 1 : left + k - 1;

    while (left <= right) {
      const t = arr[left];
      arr[left] = arr[right];
      arr[right] = t;

      left++;
      right--;
    }
  }

  return arr.join('');
}

console.log(reverseStr("abcdefg", 4));
