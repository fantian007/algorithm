class MinStack {
  stack = [];
  // 辅助栈：栈顶一直存放最小值（元素值不是和stack一一对应的，数量是相同的）
  helpStack = [];

  constructor() { }

  push(val: number): void {
    if (val > this.helpStack.at(-1)) {
      // 栈顶元素保持最小，再次入栈相同值（数量要保持一致）
      this.helpStack.push(this.helpStack.at(-1));
    } else {
      // 将新入栈的最小值入辅助栈
      this.helpStack.push(val);
    }

    this.stack.push(val);
  }

  pop(): void {
    // 都出栈，入栈/出栈 保持元素个数相同
    this.stack.pop();
    this.helpStack.pop();
  }

  top(): number {
    return this.stack.at(-1);
  }

  getMin(): number {
    return this.helpStack.at(-1);
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin());   // -2
