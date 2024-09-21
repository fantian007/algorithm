// 模拟法
function spiralOrder(matrix: number[][]): number[] {
  let r: number[] = [];

  let m = matrix.length;
  let n = matrix[0].length;

  let top = 0;
  let bottom = m - 1;
  let right = n - 1;
  let left = 0;

  // 注意：左右没相遇，还要判断上下是否相遇
  while (r.length < m * n) {
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        r.push(matrix[top][i]);
      };

      top++;
    }


    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        r.push(matrix[i][right]);
      };

      right--;
    }

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        r.push(matrix[bottom][i]);
      };

      bottom--;
    }


    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        r.push(matrix[i][left]);
      };

      left++;
    }
  }

  return r;
}

console.log(
  spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ])
);
