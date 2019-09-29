const array = [1, 2, 3, 4];
let sum = 0;
for(let index of array) {
  if (index % 2 == 0) {
    sum += index;
  }
}
console.log(sum);
