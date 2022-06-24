/*
 * @lc app=leetcode.cn id=752 lang=typescript
 *
 * [752] 打开转盘锁
 */

// @lc code=start

/**
 * 向上拨动某一位
 */
const up = (ns: string, j: number) => {
  const n = ns.split('');

  if (n[j] === '9') {
    n[j] = '0';
  } else {
    n[j] = (Number(n[j]) + 1).toString();
  }

  return n.join('');
}

/**
 * 向下拨动某一位
 */
const down = (ns: string, j: number) => {
  const n = ns.split('');

  if (n[j] === '0') {
    n[j] = '9';
  } else {
    n[j] = (Number(n[j]) - 1).toString();
  }

  return n.join('');
}

function openLock(deadends: string[], target: string): number {
  const queue: string[] = [];
  const visited: Set<string> = new Set();

  queue.push('0000');
  let deepth = 0;

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const cur = queue.shift();

      if (deadends.includes(cur)) {
        continue;
      }

      if (cur === target) {
        return deepth;
      }

      for (let j = 0; j < 4; j++) {
        const u = up(cur, j);
        if (!visited.has(u)) {
          queue.push(u);
          visited.add(u);
        }
        
        const d = down(cur, j);
        if (!visited.has(d)) {
          queue.push(d);
          visited.add(d);
        }
      }
    }

    deepth++;
  }

  return -1;
};
// @lc code=end

