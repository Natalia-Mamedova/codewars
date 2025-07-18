// The averages must be calculated

// Solution:

let marks = [5, 4, 3, 5, 4, 4]

function getAverage(anyArray){
let sum = 0;
    for (let i = 0; i < anyArray.length; i++) {
        sum = sum + anyArray[i]
    }
    return Math.floor(sum / anyArray.length);
}
let averageMarks = getAverage(marks);
console.log(averageMarks);
