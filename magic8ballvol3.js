const userName = "Khalil";

const nameOutput =
  userName === "" ? console.log(`Hello!`) : console.log(`Hello, ${userName}!`);

const userQuestion = "will I see you again?";

console.log(`${userName} asks ${userQuestion}?`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";
console.log(randomNumber);

if (randomNumber === 0) {
  eightBall = "It is certain";
} else if (randomNumber === 1) {
  eightBall = "It is decidedly so";
} else if (randomNumber === 2) {
  eightBall = "Reply hazy try again";
} else if (randomNumber === 3) {
  eightBall = "Cannot predict now";
} else if (randomNumber === 4) {
  eightBall = "My sources say no";
} else if (randomNumber === 5) {
  eightBall = "Outlook not so good";
} else {
  eightBall = "Signs point to yes";
}

console.log(eightBall);
