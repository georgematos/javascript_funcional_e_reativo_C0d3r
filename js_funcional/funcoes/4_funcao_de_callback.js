const somarNoTerminal = (a, b) => console.log(a + b)

const subtrairNoTerminal = (a, b) => console.log(a - b)

const somar = (a, b) => a + b
const subtrair = (a, b) => a - b

const exec = (a, b, callback) => callback(a, b)

exec(56, 38, somarNoTerminal)
exec(182, 27, subtrairNoTerminal)

console.log(exec(200, 30, subtrair))

console.log(exec(200, 30, somar))

console.log(exec(200, 30, (a, b) => a + b))

// let n = 0
// const fn = () => {
//   console.log(n)
//   n++
// }

// setInterval(fn, 1000);