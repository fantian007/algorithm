/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
    public preSums: number[];

    constructor(nums: number[] = []) {
        const n = nums.length;
        this.preSums = new Array(n + 1);

        this.preSums[0] = 0;

        nums.reduce((a, b, i) => {
            const next_i = a + b;

            this.preSums[i + 1] = next_i;

            return next_i;
        }, 0);
    }

    sumRange(left: number, right: number): number {
        return this.preSums[right + 1] - this.preSums[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

