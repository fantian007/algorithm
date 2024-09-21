function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = {};

  for (let i = 0; i < magazine.length; i++) {
    map[magazine[i]] = (map[magazine[i]] || 0) + 1;
  };

  for (let i = 0; i < ransomNote.length; i++) {
    const c = map[ransomNote[i]];

    if (c) {
      map[ransomNote[i]]--;
    } else {
      return false;
    }
  };

  return true;
}

console.log(canConstruct("aa", "abb"));
