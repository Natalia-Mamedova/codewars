// Description:
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Input strings will only contain letters.

const people = ["Ryan", "Kieran", "Jason", "Yous"]

const friend = (friends) => friends.filter(name => name.length === 4)

console.log(friend(people))