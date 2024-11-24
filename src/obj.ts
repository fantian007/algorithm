
export const count = (str: string) => {
  const o = {};

  for (const s of str) {
    o[s] = (o[s] || 0) + 1;
  }

  return o;
}

export const merge = (o1: object, o2: object) => {
  const ks = Array.from(new Set(Object.keys(o1).concat(Object.keys(o2))));
  const o = {};

  for (const k of ks) {
    o[k] = (o1[k] || 0) + (o2[k] || 0);
  }

  return o;
}

export const equal = (o1: object, o2: object) => {
  const k1 = Object.keys(o1);
  const k2 = Object.keys(o2);

  if (k1.length !== k2.length) {
    return false;
  }

  for (const k of k1) {
    if (o1[k] !== o2[k]) {
      return false;
    }
  }

  return true;
}
