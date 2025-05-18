//adult runners (18 && over), young runners ( < 18 yo)
//runners can register early or late
//runners are assigned a race number and start time based on their age and registration
//early runners recieve a race number at or above 1000
//all others receive a number below 1000

//adults run at 930am or 11, early at 930, late at 11
//youth run at 1230, regardless of early/late

let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = true;

let age = 17;

if (earlyRegistration === true && age >= 18) {
  raceNumber += 1000;
}

if (earlyRegistration === true && age >= 18) {
  console.log(
    `Your race will begin at 9:30am. Your race number is ${raceNumber}.`
  );
} else if (age >= 18 && earlyRegistration !== true) {
  console.log(
    `Your race will begin at 11:00am. Your race number is ${raceNumber}.`
  );
} else {
  console.log(
    `Your race begins at 12:30pm. Your race number is ${raceNumber}.`
  );
}
