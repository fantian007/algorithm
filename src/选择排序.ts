const arr = [1, 3, 4, 2];

const sort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {

      const min = arr[minIndex];
      const cur = arr[j];

      if (min > cur) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      const t = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = t;
    }
  }
}

sort(arr);

console.log(arr);
