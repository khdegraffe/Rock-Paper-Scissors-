// const test1 = 87;
// const test2 = 93;
// const test3 = 55;
// const test4 = 64;
// const test5 = 100;
// const testAverage = (test1 + test2 + test3 + test4 + test5) / 5;
// console.log(testAverage);

// let myWeight = 175;
// myWeight += 20;
// console.log("Eating TooMuch", myWeight);

// myWeight -= 40;
// console.log("Running a marathon...", myWeight);

// myWeight *= 1.5;
// console.log("Weight after sitting aroung", myWeight);

// myWeight /= 3.875;
// console.log("Weight after eating a snack", myWeight);

// myWeight--;
// console.log(myWeight);

// myWeight++;
// myWeight++;
// myWeight++;
// console.log(myWeight);

// //String Concatenation
// const myName = "Khalil";
// const greeting = "Hello";
// console.log(greeting + " " + myName);

// //String Interpolation
// const someName = "Juias";
// const food = "soup";

// console.log(`My name is ${someName} and I like ${food}.`);

// //MATH OBJECT

// //min
// console.log(Math.min(3, 2, 1));

// const array1 = [2, 3, 4];
// console.log(Math.min(...array1));

// let num1 = 34;
// let num2 = 342;
// Math.min(num1, num2);

// console.log(Math.min(num1, num2));

// //Math.max
// console.log(Math.max(num1, num2));

// //Math.floor
// console.log(Math.floor(4.78));
// // output : 4

// //Math.ceil
// console.log(Math.ceil(5.33));
// // output : 6

// //Math.round
// console.log(Math.round(5.33));
// // output: 5

// console.log(Math.round(5.67));
// // output : 6

// //Math.random
// // Math.floor(Math.random() * max);

// //String Methods

// //to.UpperCase()
// const sentance = "hello world";
// console.log(sentance.toUpperCase());

// //to.LowerCase()
// // const name = 'KHALIL';
// // console.log(name.toLowerCase());

// let originalString = "Hello, World!";
// let myNewName = originalString.toLowerCase();
// console.log(myNewName);

// //charAt
// const intro = `How's everybody doing?!`;
// console.log(intro.charAt(8));
// //output = e

// const opener = `How's everybody doing?!`;
// console.log(intro.charAt(8).toUpperCase());

// CONDITIONALS

// const iLikeChocolate = 'true';

// if (iLikeChocolate) {
//   console.log('Eat it!');
// } else  {
//   console.log('Don\'t eat it!');
//   }

// if ('hello world')  { console.log("truthy") }  else { console.log("falsey") };

// // if (null)  { console.log("truthy") } else { console.log("falsey") };

// // if (undefined)   { console.log("truthy") } else { console.log("falsey") };

// // if (0)   { console.log("truthy") } else { console.log("falsey") };

// // if ('')    { console.log("truthy") } else { console.log("falsey") };

// // if (865)    { console.log("truthy") } else { console.log("falsey") };

// // if (-9.7)     { console.log("truthy") } else { console.log("falsey") };

// // if (NaN)     { console.log("truthy") } else { console.log("falsey"

// // Comparison Operators
// // <
// // >
// // <=
// // >=
// // ===
// // ==
// // !==

// const myTestScore  = 85;
// const myFriendScore = 90;
// if  (myTestScore >  myFriendScore) {
//   console.log('You owe me $$$')
// } else {
//   console.log('I owe you $$$');
// }

// // Logical Operators
// // && (AND)
// // || (OR)
// // ! (NOT)

// const hungry =  true;
// const timeOfDay = 'dinnertime';

// if (hungry === true && timeOfDay === 'lunchtime') {
//   console.log('eat lunch');
// } else if (hungry === true && timeOfDay !== 'lunchtime') {
//   console.log('eat dinner');
// } else if (hungry === true && timeOfDay === 'dinnertime') {
//   console.log('eat a snack');
// } else {
//   console.log('Do not eat');
// }

// GRADES EXERCISE
// 1. Create a variable called "testGrade" which is a random number between 0 and 100.
// 2. Create a series of conditionals that returns which letter grade corresponds with the score. For reference:
// 0 to 65 is an "F"
// 65 to 70 is a "D"
// 71 to 79 is a "C"
// 80 to 89 is a "B"
// 90 to 100 is an "A"

// const testGrade = Math.floor(Math.random() * 100);
// console.log(testGrade);

// if (testGrade >= 0 && testGrade <= 65) {
//   console.log("F");
// } else if (testGrade >= 65 && testGrade <= 70) {
//   console.log("D");
// } else if (testGrade >= 71 && testGrade <= 79) {
//   console.log("C");
// } else if (testGrade <= 89 && testGrade >= 80) {
//   console.log("B");
// } else if (testGrade >= 90 && testGrade <= 100) {
//   console.log("A");
// }

// // MILITARY EXERCISE

// const name = "Rugen";
// const rank = "Count";
// const age = 24;

// if (age < 18) {
//   console.log("You are too young for the military!");
// } else if (name === "Rugen" && rank === "Count") {
//   console.log(
//     "My name is Inigo Montoya, you killed my father, prepare to die."
//   );
// } else if (rank === "Captain") {
//   console.log(`Aye Aye Captain ${name}.`);
// } else if (rank === "Private" && age > 40) {
//   console.log(`What have you been doing with your life ${name}?`);
// } else {
//   console.log(
//     `Hello ${rank} ${name}, I cannot wait to celebrate your ${
//       age + 1}th birthday next year!`
//   );
// }

// FUNCTIONS = A section of reusable code.
//             Declare code once, use it whenever you want
//             Cal the function to execute that code.

// function happyBirthday(name, age) {
//   console.log(`Happy birthday ${name}! You are ${age} years old today!`)
// }
// happyBirthday("Luke", 25);

// function add(x,y) {
//   let result = x + y;
//   return result;
// }

// let answer = add(2, 3);
// console.log(answer);

// const greet = function (guestName, hostName) {
//   console.log(`Hello ${guestName}! Welcome to ${hostName}'s party!`);
// };

// greet("Bob", "Aaron");
// greet("Cindy", "Jeff");
// greet("Juan", "Luke");

// function multiply(x,y) {
//   let result = x * y;
//   return result;
// }

// let answer = multiply(2,3);
// console.log(answer);

// //ARROW FUNCTIONS
// const salad = () => {
//   console.log("Hello World");
// }
// salad();

// RESTARTING DEV 30 FEBRUARY 2nd, 2025 //

// var name = "khalil";

// if (name === "khalil");
// {
//   console.log("cool");
// }

// var car = {
//   color: "red",
//   wheels: 4,
//   drive: function () {
//     alert("vroom!");
//   }
// };

// console.log("car");
// // ^^^^THIS VARIABLE 'CAR' HAS MULTIPLE PROPERTIES^^^^//

// var myName = 'Luuuk';

// var myAge = 31;

// var myFamily = ['Liz', 'Jamaal', 'Charlo'];

// var myCar = {
//   color: 'gray',
//   make: 'Toyota',
//   year: '2016'
// };

// let myWeight = 167;

// //ate OD cookies
// myWeight += 20;

// //ran a marathon
// myWeight -= 10;

// //lift and cut for 3 months
// myWeight -= 17;
// console.log(myWeight);

// let someName = "Khalil";
// let occupation = "software engineer";

// console.log(`${someName} is a ${occupation}!`);

//min
// console.log(Math.min(5, 300, 10, 1));

// // let num1 = 32;
// // let num2 = 64;

// // let min = Math.min(num1, num2);

// // console.log(min);

// //max
// let num1 = 322;
// let num2 = 30000;

// Math.max(num1, num2); // 30000

// //floor
// console.log(Math.floor(7.56)); // 7

// //ceil
// console.log(Math.ceil(7.56)); // 8

// // round
// console.log(Math.round(3.64));

// //ranom
// console.log(Math.floor(Math.random() * 10)); //this will generate a random whole number between 1 & 10

// //STRING OBJECTS

// //toUpperCase
// "khalil".toUpperCase(); // 'KHALIL'

// // toLowerCase
// "KHALIL".toLowerCase(); // 'khalil'

// // charAt
// const name = "Jeffery";
// const index = 4;

// console.log(`The character at index ${index} is ${name.charAt(index)}`); // The character at index 4 is e.

// const originalString = "luna";
// const indexToChange = 0;

// const newCharacter = originalString.charAt(indexToChange).toUpperCase();

// console.log(newCharacter); // returns L

// // includes
// const sentance = "The quick brown bear jumps over the lazy dog.";
// const word = "fox";

// console.log(sentance.includes(word));

// const iLoveGod = true;

// if (iLoveGod) {
//   console.log("Amen");
// } else {
//   console.log("He Loves You");
// }

// const myTestScore = 97;
// const myFriendScore = 84;

// if (myTestScore > myFriendScore) {
//   console.log("You owe me $$$");
// } else {
//   console.log("I owe you $$$");
// }

// Grades
// 1. Create a variable called "testGrade" which is a random number between 0 and 100.
// 2. Create a series of conditionals that returns which letter grade corresponds with the score. For reference:
// 0 to 65 is an "F"
// 65 to 70 is a "D"
// 71 to 79 is a "C"
// 80 to 89 is a "B"
// 90 to 100 is an "A"

// const testGrade = Math.floor(Math.random() * 100);

// console.log(testGrade);

// if (testGrade < 65) {
//   console.log("F");
// } else if (testGrade < 71) {
//   console.log("D");
// } else if (testGrade < 80) {
//   console.log("C");
// } else if (testGrade < 90) {
//   console.log("B");
// } else {
//   console.log("A");
// }

// const meal = function (ingredient, time) {
//   console.log(`${ingredient} will take ${time} to cook.`);
// };

// meal("eggs", "3 minutes");

// let add = function (num1, num2) {
//   return num1 + num2;
// };

// let sum = add (5,2);

// console.log(sum);

// function sayHi() {
//   console.log("hi");
//   console.log("bye");
// }

// sayHi();

// function sum(a, b) {
//   return a + b;
// }

// const value = sum(1, 2);

// console.log(value);

// // SCOPE
// //OUTER VARIABLES -- Here the function has full access to the outer variable so it can modify it as well
// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName ); // John before the function call

// showMessage();

// alert( userName ); // Bob, the value was modified by the function

// let family = ["liz", "jamaal", "khalil", "luna"];

// console.log(family.length);
// console.log(family[3]);
// console.log(family);

// family.pop();
// console.log(family);

// family.shift();
// console.log(family);

// const groceries = ['eggs', 'milk', 'cheese', 'bread', 'beef', 'ham'];

// console.log(groceries[4]);

// groceries.splice(2, 1, 'Yoghurt');

// console.log(groceries);

// var vegtables = ['romaine lettuce', 'tomatoes', 'basil'];
// var drinks = ['milk', 'water', 'wine'];
// var family = ['Bob', 'Sue', 'Ted'];

// var addItem = function (array) {
//   array.push('cucumber');
// };

// addItem(vegtables);

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

// NESTED FOR LOOPS EXAMPLE //
let knicks = [
  "Jalen Brunson",
  "KAT",
  "OG",
  "Josh Hart",
  "Mikal Bridges",
  "Duece",
];

let eastAllStars = [
  "Giannis",
  "Donovan Mitchell",
  "Jayson Tatum",
  "Jalen Brunson",
  "KAT",
  "Damian Lillard",
];

let knicksAllStars = [];

for (let i = 0; i < knicks.length; i++) {
  const knicksPlayer = knicks[i];

  for (let j = 0; j < eastAllStars.length; j++) {
    const allStarPlayers = eastAllStars[j];

    if (knicksPlayer === allStarPlayers) {
      knicksAllStars.push(allStarPlayers);
    }
  }
}

console.log(knicksAllStars);

let names = ["Kyle", "Brian", "Stan", "Mike", "Jeff"];
// let target = "Jeff";
// let result = [];

let doesNameExist = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    const name = array[i];

    if (name === target) {
      return true;
    }
  }

  return false;
};

let doesTargetExist = doesNameExist(names, "Mikey");

console.log(doesTargetExist);

// for (let i = 0; i < names.length; i++) {
//   const personsName = names[i];

//   for (let j = 0; j < target.length; j--) {
//     const targetName = target[j];

//     if (personsName === targetName) {
//       console.log("TRUE");
//     } else {
//       console.log("FALSE");
//     }
//   }
// }
// // console.log(result);

// // let exercise = function (names, target) {
// //   if target
// // }

//ARRAY HELPER METHODS

let array1 = [1, 2, 3];

array1.forEach((array1) => console.log(array1 * 2));

var boxes = [
  { length: 10, width: 15, height: 20 },
  { length: 15, width: 20, height: 25 },
  { length: 20, width: 25, height: 30 },
  { length: 25, width: 30, height: 35 },
  { length: 30, width: 35, height: 40 },
];

var volumes = [];

let budgets = [
  { title: "Rent", amount: 1200 },
  { title: "Groceries", amount: 300 },
];
let expenses = budgets.map(function (budget) {
  return budget.amount;
});

console.log(expenses);

var boxes = [
  { length: 10, width: 15, height: 20 },
  { length: 15, width: 20, height: 25 },
  { length: 20, width: 25, height: 30 },
  { length: 25, width: 30, height: 35 },
  { length: 30, width: 35, height: 40 },
];

let lengths = boxes.map(function (box) {
  return box.length;
});

console.log(lengths);

var boxes = [
  { length: 10, width: 15, height: 20 },
  { length: 15, width: 20, height: 25 },
  { length: 20, width: 25, height: 30 },
  { length: 25, width: 30, height: 35 },
  { length: 30, width: 35, height: 40 },
];

var volumes = boxes.map(function (box) {
  return box.length * box.width * box.height;
});

console.log(volumes);

var users = [
  { id: 1, username: "Susan19", admin: false },
  { id: 2, username: "Antonio10", admin: false },
  { id: 3, username: "Fred15", admin: true },
  { id: 4, username: "Tim43", admin: false },
  { id: 5, username: "JimBob59", admin: true },
  { id: 6, username: "Clark6", admin: false },
  { id: 7, username: "Jameson35", admin: true },
  { id: 8, username: "Jessica40", admin: false },
  { id: 9, username: "Jaleesa13", admin: false },
  { id: 10, username: "Yoni45", admin: false },
];

var selectedUser = users.find(function (user) {
  return user.username === "JimBob59";
});

var shoes = [
  { name: "Nike", price: 200 },
  { name: "Red Wings", price: 250 },
  { name: "Vans", price: 150 },
  { name: "Converse", price: 160 },
  { name: "Reebok", price: 130 },
  { name: "New Balance", price: 175 },
  { name: "Adidas", price: 95 },
  { name: "Keds", price: 140 },
  { name: "Crocs", price: 135 },
];

var lessThan100 = shoes.find(function (shoe) {
  return shoe.price < 100;
});


var findWhere = function (array, criteria) {
  return array.find(function (item) {
    return item [criteria];
  });
};

var myShoe = findWhere(shoes, {price: 95}); // result { name: 'Adidas', price: 95 }


var shoes = [
  { name: "Nike", price: 200 },
  { name: "Red Wings", price: 250 },
  { name: "Vans", price: 50 },
  { name: "Converse", price: 60 },
  { name: "Reebok", price: 130 },
  { name: "New Balance", price: 75 },
  { name: "Adidas", price: 95 },
  { name: "Keds", price: 40 },
  { name: "Crocs", price: 35 },
];

var filterOut = function (array, iteratorFunction) {
  return false
};

var priceRangeNot50to100 = filterOut(shoes, function (shoe) {
  // your code here
});


