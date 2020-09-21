function bomDia() {
  console.log("Bom dia!")
}

const boaTerde = function () {
  console.log("Boa tarde!")
}

// passagem de função como parametro para outra função
function executarQualquerCoisa(fn) {
  if (typeof fn === 'function') {
    fn();
  }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTerde)

// retornar uma função a partir de outra função

function potencia(base) {
  return function(exp) {
    return Math.pow(base, exp)
  }
}

const potenciaDe2 = potencia(2)
const potenciaDe3 = potencia(3)


console.log(potenciaDe2(8))
console.log(potenciaDe3(3))

const potenciaDe3el4 = potencia(3)(4)

console.log(potenciaDe3el4);