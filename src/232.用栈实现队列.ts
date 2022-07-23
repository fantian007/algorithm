/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
    private stack1 = [];
    private stack2 = [];

    constructor() {}

    push(x: number): void {
        this.stack1.push(x);
    }

    pop(): number {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }

        const v = this.stack2.pop();

        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop());
        }

        return v;
    }

    peek(): number {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }

        const v = this.stack2.pop();
        this.stack2.push(v);

        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop());
        }

        return v;
    }

    empty(): boolean {
        return this.stack1.length > 0 ? false: true;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

