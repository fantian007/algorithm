/**
 * 思路：
 * 1. 遇到一个 1，数量 +1； 以该点出发，向 4 个方向遍历，将遇到的 1 都改为 0（代表相邻的1都访问过了），遇到 0 则停止
 * 2. 遍历二维数组，以每个点为出发点，重复上述逻辑，遇到的 1 的个数，就是岛屿的数量
 */
function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  // 深度优先搜索函数
  const dfs = (i: number, j: number) => {
    // 判断是否越界或者当前单元格不是陆地
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
      return;
    }

    // 将当前单元格标记为已访问（设置为 '0'）
    grid[i][j] = '0';

    // 向四个方向进行深度优先搜索
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  // 遍历整个网格
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 当前单元格是陆地，才会执行
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
}

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];

console.log(numIslands(grid));

export { }
