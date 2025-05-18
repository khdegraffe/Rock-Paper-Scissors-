const raceNumber = Math.floor(Math.random() * 1000);

const earlyRegistration = true;

const runnerAge = 24;

if (runnerAge >= 18 && earlyRegistration === true) {
  raceNumber += 1000;
}
console.log(`Your race number is ${raceNumber}`);

if (runnerAge >= 18 && earlyRegistration === true) {
  console.log(`You will race at 9:30am and your race number is ${raceNumber}`);
} else if (runnerAge >= 18 && earlyRegistration === false) {
  console.log(`You will race at 11:00am and your number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30pm and your number is ${raceNumber}`);
}
