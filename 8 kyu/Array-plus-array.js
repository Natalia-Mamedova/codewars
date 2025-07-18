// to get the sum of two arrays... Actually the sum of all their elements

let someArray1 = [12, 24, 5]
let someArray2 = [2, 4, 15]

function arrayPlusArray(array1, array2) {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < array1.length; i++) {
        sum1 = array1[i] + sum1
    }

for (let i = 0; i < array2.length; i++) {
    sum2 = array2[i] + sum2
}
    let sum = sum1 + sum2
    return sum;
}

let result = arrayPlusArray(someArray1, someArray2)
console.log(result)