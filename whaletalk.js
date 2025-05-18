const input = "underground railroad";

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  const inputCharacter = input[i];

  if (inputCharacter === "e") {
    resultArray.push(input[i]);
  }
  if (inputCharacter === "u") {
    resultArray.push(input[i]);
  }

  for (let j = 0; j < vowels.length; j++) {
    const vowelCharacter = vowels[j];

    if (vowelCharacter === inputCharacter) {
      resultArray.push(vowelCharacter);
    }
  }
}

let resultString = resultArray.join("");
// resultString = resultString.toUpperCase();
console.log(resultString.toUpperCase());
