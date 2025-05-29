const sort = (arr: number[]) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    };
  };
}

const arr = [1, 3, 4, 2];
sort(arr);
console.log(arr);

export { }
