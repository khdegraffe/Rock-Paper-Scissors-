//PROJECT: Dog Years

//I declared a variable `myAge` and set it to my actual age, 26.
const myAge = 26;

//Here we have a variable of the first two years, using `let` to declare because the value will change
let earlyYears = 2;
earlyYears *= 10.5;

//I declared a new variable equal to myAge minus two, and this laterYears variable will have it's value change later.
let laterYears = myAge - 2;

//Here we calculated the number of dog years accounted for by my later years using the multiplication assignment operator
laterYears *= 4;

//I declared a new variable of my age in dog years by adding our early years and later years calculations together.
const myAgeInDogYears = earlyYears + laterYears;

//Here I declared my name as a string and then called the .toLowerCase() method to declare it as a new variable called myName.
let originalName = "Khalil";
let myName = originalName.toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
