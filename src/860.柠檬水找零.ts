// 模拟实际找零的步骤
function lemonadeChange(bills: number[]): boolean {
  // 手里的钱
  let r = [];

  // 排队，买东西
  for (let i = 0; i < bills.length; i++) {
    // 给钱
    r.push(bills[i]);

    // 需要找零的钱
    let z = bills[i] - 5;

    // 正好给了5块，不需要找零，下一位
    if (z === 0) continue;

    // 排序，给别人找零，我们习惯先给大额的，再给小额的
    // 例如：给了20，找15，先给10块，再给5块
    r = r.sort((a, b) => b - a);

    // 看看手里的钱
    for (let i = 0; i < r.length; i++) {
      // 找零完了，不需要再找零了
      if (z === 0) {
        break;
      }

      // 找零
      if (r[i] <= z) {
        // 找给别人了
        r.splice(i, 1);
        //  由于用了 splice, 后面数会前移，i--
        i--;
        // 还需要找的钱
        z -= r[i];
      }
    }

    // 已经找了一圈手里的钱，还需要找零，代表手里的钱已经无法再找零了
    if (z > 0) {
      return false;
    }
  }

  // 前面没有找零失败的情况，那么就是找零成功了
  return true;
}

// const r = lemonadeChange([5, 5, 5, 10, 20]); // true
// const r = lemonadeChange([5, 5, 10, 10, 20]); // false
// const r = lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 20, 5]); // false
const r = lemonadeChange([5, 10, 5, 20, 5, 10]);
console.log(r);

export {};
