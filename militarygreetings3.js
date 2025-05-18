let name = "Khalil";
let rank = "Count";
let age = "26";

if (age < 18) {
  console.log("You are too young for the military!");
} else if (name === "Rugen" && rank === "Count") {
  console.log(
    "My name is Inigo Montoya, you killed my father, prepare to die."
  );
} else if (rank === "Captain") {
  console.log(`Aye Aye Captain ${name}.`);
} else if (rank === "Private" && age > 40) {
  console.log(`What have you been doing with your life ${name}?`);
} else {
  console.log(
    `Hello ${rank} ${name}, I cannot wait to celebrate your ${
      age + 1
    }th birthday next year!`
  );
}
