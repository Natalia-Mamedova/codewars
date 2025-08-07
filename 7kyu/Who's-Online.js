// Description:
// You want to show your users which of their friends are online and available to chat!
// Given an input of an array of objects containing usernames, status and time since last activity (in mins),
// create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// Solution:

let friends = [{
  name: 'David',
  status: 'online',
  lastActivity: 10
}, {
  name: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  name: 'Bob', 
  status: 'online',
  lastActivity: 104
}]

function whosOnline(friends) {
    const result = {
        online: [],
        offline: [],
        away: []
    };

    friends.forEach(friend => {
        if (friend.status === 'online') {
            if (friend.lastActivity <= 10) {
                result.online.push(friend.name);
            } else {
                result.away.push(friend.name);
            }
        } else if (friend.status === 'offline') {
            result.offline.push(friend.name);
        }
    });

    return result;
}

console.log(whosOnline(friends));