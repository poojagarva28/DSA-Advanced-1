const arr = [0, 1, 2, 3, 1, 2, 3, 4, 4, 5];
const duplicateArr = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      duplicateArr.push(arr[i]);
    }
  }
}

console.log(`duplicates in array [${arr}] are ${duplicateArr}`);
