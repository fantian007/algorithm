/**
 * Do not return anything, modify nums1 in-place instead.
 * 双指针
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let c = nums1.length - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] < nums2[p2]) {
      nums1[c] = nums2[p2];
      p2--;
    } else {
      nums1[c] = nums1[p1];
      p1--;
    }

    c--;
  }

  while (p1 >= 0) {
    nums1[c--] = nums1[p1--];
  }

  while (p2 >= 0) {
    nums1[c--] = nums2[p2--];
  }
};