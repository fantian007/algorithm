// 1. s + s 去除头尾的字符串，如果内部还包含 s，则返回 true
// 2. 一个字符串中是否包含另一个字符串，用 KMP
function repeatedSubstringPattern(s: string): boolean {
  if (s.length <= 1) {
    return false;
  }

  const s2 = s + s;
  const trimS2 = s2.slice(1, -1);

  const next = [0];
  let j = 0;
  for (let i = 1; i < s.length; i++) {
    while (j > 0 && s[j] !== s[i]) {
      j = next[j - 1];
    }

    if (s[j] === s[i]) {
      j++;
    }

    next.push(j);
  }

  let k = 0;
  for (let i = 0; i < trimS2.length; i++) {
    while (k > 0 && trimS2[i] !== s[k]) {
      k = next[k - 1];
    }

    if (trimS2[i] === s[k]) {
      if (k === s.length - 1) {
        return true;
      }

      k++;
    }
  }

  return false;
}

// const r = repeatedSubstringPattern("aba");
const r = repeatedSubstringPattern("abab");
console.log(r);

export {};
