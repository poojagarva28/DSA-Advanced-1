let arr = [12, 3, 5, 7, 19];
let n = arr.length;
const k = 5;
let smallest, largest;

arr.sort((a, b) => a - b);

console.log(arr); // 3,5,7,12,19

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < k) {
    smallest = arr[i];
  }
  if (arr[i] > k) {
    largest = arr[i];
    break;
  }
}

if (k >= arr[arr.length - 1]) {
  largest = "not available in array";
}
if (k <= arr[0]) {
  smallest = "not available in array";
}

console.log("value of k:", k);
console.log("Kth(k=" + k + ")'s" + " smallest:", smallest);
console.log("Kth(k=" + k + ")'s" + " largest:", largest);
