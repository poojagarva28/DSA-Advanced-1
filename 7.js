const arr = [1, 2, 3, -2, -5, -7, 0];
let j = 0;
console.log(`input array : [${arr}] `);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < j) {
    if (i != j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    j++;
  }
}

console.log(`Negative numbers are moved to one side of an array : [${arr}]`);
