/**
 * 回溯
 * 
 * 思路：
 * 1. 递归（回溯）过程中其实并没有去配对括号，只是不断将不符合条件的字符串删除
 * 2. 一个位置上既可以是 (，也可以是 ），过程中不断地进行各种拼接
 * 3. 拼接要符合要求，有2种情况：
 *  1. ( 的个数不能超过 n
 *  2. ) 的个数要始终不超过 ( 的个数
 * 不符合条件的拼接要去除
 * 4. 剩下的自然就是符合条件的（1 保证了括号的对数，2 保证了是有效的配对）
 */
function generateParenthesis(n: number): string[] {
  const r: string[] = [];
  const path: string[] = [];

  const backtracking = (left: number, right: number) => {
    // left > n: ( 的个数超了
    // left < right: ) 不能超过 ( 的个数
    if (left > n || left < right) {
      return;
    }

    // 符合条件，记录
    if (path.length === 2 * n) {
      r.push(path.join(''));
      return;
    }

    // 下一个元素可以是 ( 或者 )，都拼接一遍试试，反正递归过程中不符合条件的都会被去除
    for(let i = 0; i < 2; i++) {
      if (i === 0) {
        path.push('(');
        // 由于拼接了一个 (，所以 ( 的使用个数 +1， ）的使用个数保持不变
        backtracking(left + 1, right);
        path.pop();
      }
      if (i === 1) {
        path.push(')');
        // 由于拼接了一个 ），所以 ） 的使用个数 +1，（ 的使用个数保持不变
        backtracking(left, right + 1);
        path.pop();
      }
    };
  }

  backtracking(0, 0);

  return r;
};

// const r = generateParenthesis(1);
const r = generateParenthesis(3);
console.log(r);

export { }

