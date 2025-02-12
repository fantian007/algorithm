function canConstruct(ransomNote: string, magazine: string): boolean {
  const m1 = {};
  const m2 = {};

  for (const c of ransomNote) {
    m1[c] ??= 0;
    m1[c]++;
  }

  for (const c of magazine) {
    m2[c] ??= 0;
    m2[c]++;
  }

  for (const c in m1) {
    if (!m2[c] || m2[c] < m1[c]) {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("a", "b")); // false
// console.log(canConstruct("aa", "ab")); // false

export { };
