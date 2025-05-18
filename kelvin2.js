const kelvin = 300;

const celsius = kelvin - 273;
console.log(celsius);

let newton = celsius * (33/100);

newton = Math.floor(newton);
console.log(newton);

let temperature = newton;

console.log(`The temp is ${temperature} degrees Newton.`);



// let fahrenheit = celsius * (9 / 5) + 32;

// fahrenheit = Math.floor(fahrenheit);

// const TEMPERATURE = fahrenheit;
// console.log(`The temperature is ${TEMPERATURE} degrees fahrenheit.`);
