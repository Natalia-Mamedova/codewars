// Task
// You get an array of numbers, return the sum of all of the positives ones.

let numbers = [1, -4, 7, 12];

function sumPositiveNumbers(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
    if(number > 0) {
         sum += number
    }
}
 return sum 
}

console.log(sumPositiveNumbers(numbers))