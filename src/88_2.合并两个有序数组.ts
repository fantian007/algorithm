/**
 * Do not return anything, modify nums1 in-place instead.
 * 双指针
 * 用了 splice，其实不算是原地修改
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = 0;
  let p2 = 0;

  while (true) {
    if (p1 < m && p2 < n) {
      if (nums1[p1] <= nums2[p2]) {
        p1++;
        continue;
      } else {
        nums1.splice(p1, 0, nums2[p2]);
        nums1.pop();
        m++;
        p1++;
        p2++;
      }
    } else {
      for (let i = p2; i < nums2.length; i++) {
        nums1[p1] = nums2[i];
        p1++;
      }

      break;
    }
  }
};

const nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1);

export { };

