// 二分法找目标节点，找到之后从两边扩散查找即可
function searchRange(nums: number[], target: number): number[] {
  const len = nums.length;

  let r: number[] = [];
  let left = 0, right = len - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      // 找到了
      r.push(mid);

      // a,b 分别往两边查找
      let a = mid - 1;
      let b = mid + 1;

      // 左
      while (nums[a] === target) {
        r.unshift(a);
        a--;
      }

      // 右
      while (nums[b] === target) {
        r.push(b);
        b++;
      }

      // 找到了就不继续二分了
      break;
    }
  }

  if (r.length) {
    // 返回数组首尾值
    return [r[0], r[r.length - 1]];
  } else {
    // 未找到，返回
    return [-1, -1];
  }
};

const r = searchRange([5, 7, 7, 8, 8, 10], 8);

console.log(r);

export { }
