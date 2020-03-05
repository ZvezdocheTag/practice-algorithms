export function bubbleSort(arr: number[]) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}
