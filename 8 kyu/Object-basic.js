// Give you a function animal, accept 1 parameter:obj like this:
// {name:"dog",legs:4,color:"white"}
// and return a string like this: "This white dog has 4 legs."

let someAnimal = {
  name: "dog",
  legs: 4,
  color: "white"
}
function animal(){
  return 'This ' + someAnimal.color + ' ' + someAnimal.name +  ' has ' + someAnimal.legs + ' legs.';
}
console.log(animal(someAnimal))