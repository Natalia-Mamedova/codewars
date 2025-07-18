// Given an array of integers your solution should find the smallest integer.

let someArray = [15, 21, 8, -3, -12]

function findSmallestInt(array) {
    let smallest = array[0]
  for (let i = 0; i < array.length; i++) {
    if (smallest > array[i]) {
        smallest = array[i]
    }
  }
  return smallest
}
let result = findSmallestInt(someArray)
console.log(result);
