// 普通递归：每次递归调用都会在内存栈中创建新的栈帧（保存参数、局部变量、返回地址等），若递归深度过深（如几万次），会导致栈溢出（RangeError: Maximum call stack size exceeded）。

/**
 * 尾递归优化 是编译引擎来优化的，非代码层面优化
 * 
 * 当 递归调用是 函数的最后一句（后面没有计算逻辑），且 return，那么引擎会进行尾递归优化（有的引擎不会优化）
 * 优化：不创建新的函数栈，复用之前创建的函数栈
 */
const fib = (n: number) => {
  if (n === 1) return 1;
  // 无法优化，因为 最后一句 非直接调用递归函数，而是 n * fib
  return n * fib(n - 1);
}

// 改个写法
const fib2 = (n: number, acc: number = 1) => {
  if (n === 1) return acc;

  // 直接调用递归函数，当前句 和 后面 都没有额外的计算逻辑，引擎会负责优化
  return fib2(n - 1, n * acc);
}

console.log(fib2(5));
