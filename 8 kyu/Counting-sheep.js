// Instructions:
// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

// Solution:

const sheep = [true, false, true, true, true, false] 

const  countSheeps = arraySheep => {
return arraySheep.reduce((count, sheep) => {
    if (sheep === true) {
    return count + 1;
    }
    return count;
}, 0);
};

console.log(countSheeps(sheep));
