let low = 0;
let hight = n - 1;

let input = 0;

while (low <= hight) {
  let mid = (low + hight) / 2;

  if (array[mid] === input) return mid;

  if (input < array[mid]) {
    hight = mid + 1;
  }

  if (input > array[mid]) {
    low = mid - 1;
  }
}

return -1; // value not found
