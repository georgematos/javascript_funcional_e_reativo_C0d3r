/**
 * Currying na prática
 * Converter celsius pra fahrenheit
 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const primeiroGrauCurried = (a) => (b) => (x) => a * x + b;

const celsiusToFahrenheit = primeiroGrauCurried(1.8)(32)

readline.question("Celsius: ", celsius => {
  console.log(celsiusToFahrenheit(celsius))
  readline.close();
})



