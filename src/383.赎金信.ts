function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map();

  for (const str of magazine) {
    const t = map.get(str);

    map.set(str, t ? t + 1 : 1);
  }

  for (const str of ransomNote) {
    if (!map.has(str)) {
      return false;
    }

    if (map.get(str) <= 0) {
      return false;
    } else {
      map.set(str, map.get(str) - 1);
    }
  }

  return true;
}

console.log(canConstruct("aa", "ab"));

export {};
