/**
 * Do not return anything, modify nums1 in-place instead.
 * 双指针
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let a = m - 1, b = n - 1, c = nums1.length - 1;

  const s = m + n;

  // 从后往前遍历，避免了数组元素移动
  for (let i = 0; i < s; i++) {
    if (a < 0 || b < 0) {
      break;
    }

    if (nums1[a] < nums2[b]) {
      nums1[c] = nums2[b];
      b--;
      c--;
    } else {
      nums1[c] = nums1[a];
      a--;
      c--;
    }
  };

  if (a < 0) {
    for (let i = b; i >= 0; i--) {
      nums1[c--] = nums2[i];
    };
  }

  if (b < 0) {
    for (let i = a; i >= 0; i--) {
      nums1[c--] = nums1[i];
    };
  }
};

const nums1 = [1, 2, 3, 0, 0, 0]; // [1,2,2,3,5,6]
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1);

export { };

