// Description:
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
// ordered from shortest to longest.

const words = ["Telescopes", "Glasses", "Eyes", "Monocles"]

const sortByLength = words => {
return words.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(words));
