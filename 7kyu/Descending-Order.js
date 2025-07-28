// Make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.


function descendingOrder(n) {
  
  const digits = n.toString().split('')
  digits.sort((a, b) => b - a);
  return parseInt(digits.join(''), 10);
}

console.log(descendingOrder(122567));