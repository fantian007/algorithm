const sort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
  
      if (arr[i] > arr[j]) {
        const t = arr[i];
        
        arr[i] = arr[j];
        arr[j] = t;
        // 交换
        // [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
}

const arr = [1,3,4,2];
sort(arr);
console.log(arr);

export {}
