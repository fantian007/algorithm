function longestPalindrome(s: string): string {
  if (s.length <= 1) {
    return s;
  }

  const n = s.length;

  const p = (left: number, right: number) => {
    while (left >= 0 && right < n && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.substring(left + 1, right);
  }

  let ret = '';

  for (let i = 0; i < n; i++) {
    // 对应上一个版本中的 2种情况

    // 以 s[i] 为中心的最长回文串
    const r1 = p(i, i);
    // 以 s[i], s[i+1] 为中心的最长回文串(s[i] === s[i+1])
    const r2 = p(i, i + 1);

    // ret, r1, r2 取长度最长的字符串
    ret = ret.length > r1.length ? ret : r1;
    ret = ret.length > r2.length ? ret : r2;
  };

  return ret;
};

const r = longestPalindrome('babad');
// const r = longestPalindrome('cbbd');
console.log(r);

export { };

