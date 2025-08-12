const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
let highestValue = -Infinity
   
    for (i = 0; i < arr.length; i++) { 
        if (arr[i] > highestValue) {
        highestValue = arr[i];
        }      
        }
      return highestValue;
} 

biggestNumberInArray(array);





function biggestNumberInArray2(arr) {
let highestValue = -Infinity
    for (item of array) {
    if  (item > highestValue) {
        highestValue = item;
    }
}
    return highestValue;
}  

biggestNumberInArray2(array);

function biggestNumberInArray3(arr) {
 let highestValue = 0;
 arr.forEach(value => {
  if (value > highestValue) {
  highestValue = value;
  }
 })
 return highestValue;
}

biggestNumberInArray3(array);



// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
for (item in basket) {
 if (item === lookingFor) {
     console.log('The item is already in the basket!');
}  
}
}

 checkBasket(amazonBasket, 'books');


// compares the lookingFor with the value of basket

function checkBasket(basket, lookingFor) {
for (item in basket) {
 if (basket[item] === lookingFor) {
     console.log('The item is already in the basket!');
}  
}
}

 checkBasket(amazonBasket, 2);