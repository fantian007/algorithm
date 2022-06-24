/*
 * @lc app=leetcode.cn id=304 lang=typescript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
class NumMatrix {
    public dp: number[][];

    constructor(matrix: number[][]) {
        this.dp = Array.from({ length: matrix.length }, _ => [0]);

        this.dp[0][0] = matrix[0][0];

        for (let i = 1; i < matrix[0].length; i++) {
            this.dp[i][0] = this.dp[i-1][0] + matrix[i][0];
        }

        for (let j = 1; j < matrix.length; j++) {
            debugger
            this.dp[0][j] = this.dp[0][j-1] + matrix[0][j];
        }

        for (let j = 1; j < matrix.length; j++) {
            const col = matrix[j];

            for (let i = 1; i < col.length; j++) {
                this.dp[i][j] = this.dp[i][j-1] + this.dp[i-1][j] - this.dp[i-1][j-1];
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        console.log(this.dp);
        return this.dp[row2][col2] - this.dp[row2][col1] - this[row1][col2] + this.dp[row1][col1];
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

