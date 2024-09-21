function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const map: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  };

  for (let i = 0; i < t.length; i++) {
    const c = map[t[i]];

    if (c) {
      map[t[i]]--;

      if (map[t[i]] < 0) return false;
    } else {
      return false;
    }
  };

  return true;
};

const r = isAnagram('anagram', 'nagaram');
console.log(r);

export { }
