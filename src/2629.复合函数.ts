type F = (x: number) => number;

function compose(functions: F[]): F {

  return function (x) {
    // return functions.reverse().reduce((p, c) => c(p), x);
    return functions.reduceRight((p, c) => c(p), x);
  }
};

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9

export { };
