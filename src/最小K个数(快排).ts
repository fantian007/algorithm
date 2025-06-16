// 分区，返回基准元素的最终位置
const partition = (arr: number[], left: number, right: number) => {
  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  };

  [arr[i], arr[right]] = [arr[right], arr[i]];

  return i;
}

const quickSelect = (arr: number[], left: number, right: number, k: number) => {
  const pivotIndex = partition(arr, left, right);

  if (pivotIndex === k - 1) {
    return;
  } else if (pivotIndex > k - 1) {
    quickSelect(arr, left, pivotIndex - 1, k);
  } else {
    quickSelect(arr, pivotIndex + 1, right, k);
  }
}

const smallestK = (arr: number[], k: number) => {
  quickSelect(arr, 0, arr.length - 1, k);

  return arr.slice(0, k);
}

const r = smallestK([1, 3, 2, 5, 4, 6], 2);
console.log(r);

export { }
