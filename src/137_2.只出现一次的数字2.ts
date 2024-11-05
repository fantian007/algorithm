// https://leetcode.cn/problems/single-number-ii/solutions/746993/zhi-chu-xian-yi-ci-de-shu-zi-ii-by-leetc-23t6/?envType=study-plan-v2&envId=top-interview-150
// https://leetcode.cn/problems/single-number-ii/solutions/8944/single-number-ii-mo-ni-san-jin-zhi-fa-by-jin407891/?envType=study-plan-v2&envId=top-interview-150
// https://leetcode.cn/problems/single-number-ii/

// 模3算法，这次不采用累加，采用状态转变方式，(00)-(01)-(10)-(00) 3种状态循环转变
// 由于取余结果为 0,1,2。2的表示需要两位 bit 组合来表示
// 对应关系反应了各位1的累加对3取余的结果(每次遇到1，转变为下一个状态，格式：组合-取余结果)：00-0, 01-1，10-2。3种状态循环转变，再遇到1，转变为 00
// 10 变 01 组合无非就是 0和1 的互相反转，可以用 ^ 运算。n ^ 1 会将 n 的每位 bit 反转
// 但是有2点约束：
//  1. 00 变 01 时，需要保持第一个 bit 不变
//  2. 10 变 00 时，需要保持第二个 bit 不变
// 其余的 01 变 10，直接用 | 即可

// 将这两位用 a,b 来表示，那么：
// 当 a = 0，b = 0 时，a 的下一个状态保持 0，其余 a = a ^ 1
// 当 a = 1，b = 0 时，b 的下一个状态保持 0，其余 b = b ^ 1（不会出现 11 组合，所以只需要判断 a === 1 时，让 b = 0）

// 由以上规律&约束，写出公式：
//  1. a = (a ^ 1) & (a | b)
//  2. b = (b ^ 1) & ~a

// 上面 ab 组合是表示 n 中单个 bit 的取余状态，那么如何表示 n 中所有 bit 的取余结果？
// 将 a,b 扩展，不再局限于单个 bit。例如：a = xxxxxxx, b = xxxxxxx, 那么 a,b 相同位置 i 的2个 bit 组合来表示 n 的第 i 位的取余结果

// 位运算可以同时对 32 个 bit 进行运算，是个并行算法，高效

function singleNumber(nums: number[]): number {
  let a = 0, b = 0;

  for (const n of nums) {
    // a ^ n 就是 遇到 n 的某位 bit 为 1，a 的对应位置反转。b 同理。
    [a, b] = [(a ^ n) & (a | b),  (b ^ n) & ~a];

    // a, b 要同时计算，不能像下面这样分2步写:
    // a = (a ^ n) & (a | b);
    // b = (b ^ n) & ~a;
  };

  // 由于 nums 中相同数字会出现 3 次 和 1次，所以取余结果不会出来 2，所以 ab 不会有 10 组合
  // 意味着 a 中不可能出现 1，a 中全是 0，那么直接返回 b 即可
  return b;
};

const r = singleNumber([2, 2, 3, 2, 6, 6, 6]);
// 010
// 010
// 010
// 011
// ---
// 041
console.log(r);

export { }
