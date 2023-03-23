/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 



findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  return usersArray.find(function(val){
    return val.username === username;
  })
}


// const users = [
//   {username: 'mlewis'},
//   {username: 'akagen'},
//   {username: 'msmith'}
// ];
// console.log(findUserByUsername(users, 'mlewis')) // {username: 'mlewis'})


// Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string.
//  The function should remove the object from the array. If the object is not found, return undefined. 



function removeUser(usersArray, username) {
  const idx = usersArray.findIndex(function(obj){
    return obj.username === username;})

    if(idx === -1) return;
    
    usersArray = usersArray.splice(idx,1);
    return usersArray[0]
    }
   


const users = [
  {username: 'mlewis'},
  {username:'akagen'},
  {username: 'msmith'}
];

console.log(removeUser(users, 'akagen'))// {username: 'akagen'}
console.log(removeUser(users, 'akagen')) // undefined
