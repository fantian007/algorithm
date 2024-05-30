function reverseStr(s: string, k: number): string {
  const r = [];
  const len = s.length;
  let base = 0;
  let fast = 0;
  let slow = 0;
  let i = 0;

  while (base < len) {
    while (i < k) {
      fast += 2;
      slow += 1;
      i++;

      // if (slow >= len) {
      //   break;
      // }
    }

    i = 0;

    let right = slow - 1;

    while (right >= base) {
      r.push(s[right]);
      right--;
    }

    while (slow < fast) {
      if (slow >= len) {
        break;
      }

      r.push(s[slow++]);
    }

    if (fast < len) {
      slow = fast;
      base = slow;
      i = 0;
    }

    if (fast >= len && slow < len) {
      while (slow >= base) {
        r.push(s[slow]);
        slow += 1;
      }
    }

    if (slow >= len) {
      break;
    }
  }

  return r.join('');
}

console.log(reverseStr("abcd", 10));
