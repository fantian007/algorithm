function fib(n: number): number {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (n >= 2) {
    return fib(n - 1) + fib(n - 2);
  }
}

const r = fib(4);
console.log(r);

export {};
