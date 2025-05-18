// Grades
// 1. Create a variable called "testGrade" which is a random number between 0 and 100.
// 2. Create a series of conditionals that returns which letter grade corresponds with the score. For reference:
// 0 to 65 is an "F"
// 65 to 70 is a "D"
// 71 to 79 is a "C"
// 80 to 89 is a "B"
// 90 to 100 is an "A"

const testGrade = Math.floor(Math.random() * 101);

let letterGrade;

if (testGrade < 65) {
 letterGrade = 'F';
} else if (testGrade < 70) {
  letterGrade = 'D';
} else if (testGrade < 80) {
  letterGrade = 'C';
} else if (testGrade < 90) {
  letterGrade = 'B';
} else {
  letterGrade = 'A';
}

console.log(`Score: ${testGrade}. Grade: ${letterGrade}`);
