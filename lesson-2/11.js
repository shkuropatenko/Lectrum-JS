const array = [2, -1, -3, 15, 0, 4];
let sum = 0;
for (let index of array) {
  if (index > 0) {
    sum += index;
  } 
}
console.log(sum);