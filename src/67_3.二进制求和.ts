function addBinary(a: string, b: string): string {
  const arr = a.split('');
  const brr = b.split('');

  let r = '';
  let c = 0;

  while (arr.length || brr.length) {
    const sum = +(arr.pop() ?? 0) + +(brr.pop() ?? 0) + c;

    c = sum >= 2 ? 1 : 0;
    r = (sum % 2) + r;
  }

  if (c) {
    r = c + r;
  }

  return r;
};


// const r = addBinary("11", '1'); // 100
// const r = addBinary("1010", "1011"); // 10101
const r = addBinary("0", "0"); // 0
console.log(r);

export { }
