class MyStack {
  queue1 = [];
  queue2 = [];

  constructor() {

  }

  // 2 个队列用来交换顺序
  // 假设 queue1 就是模拟的栈，特点是先入的要放到栈底，但是又不让用 unshift，借助 queue2
  // 将 push 的元素放入 queue2, 然后把 queue1 所有元素移到queue2，这个时候，新入的元素在 queue2 中不就是相当于栈底了么？
  // 然后再把 queue2 所有元素移入 queue1，queue2 置空，准备接收下个 push 的新元素
  push(x: number): void {
      this.queue2.push(x);

      while (this.queue1.length) {
          this.queue2.push(this.queue1.pop());
      }

      while (this.queue2.length) {
          this.queue1.push(this.queue2.pop());
      }
  }

  pop(): number {
      return this.queue1.pop();
  }

  top(): number {
      if (this.queue1.length) {
          return this.queue1[this.queue1.length - 1];
      }

      return undefined;
  }

  empty(): boolean {
      return this.queue1.length ? false : true;
  }
}

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/