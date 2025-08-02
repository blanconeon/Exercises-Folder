// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = [];

array.forEach(item => {
  newArray.push(item.username + "!");
  return newArray;
})

console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames

let mapArray = array.map( value => value.username + "?");

console.log(mapArray);

//Filter the array to only include users who are on team: red

let filterArray = array.filter(value => value.team === "red");

console.log(filterArray);

//Find out the total score of all users using reduce
let reduceArray = array.reduce((acc, value) => {
   return acc + value.score; // remeber acc gets passed the value of value to execute sum & value is not a number but the iterating key. 
}, 0 ) // remeber always put dfeault value in reduce

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray1 = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);