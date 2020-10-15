/**
 * Functors são objetos quem implementam a função MAP
 * que também é um "wrapper" de um valor
 */

const nums = [1, 2, 3, 4, 5, 6]

const novosNums = nums.map(el => el + 10)
  .map(el => el * 2)

console.log(nums, novosNums)


/** 
 * nada mais é do que uma função que retorna um objeto
 * que contém o valor passado e uma função map que irá
 * transformar o objeto de acordo com a função passada
 * para ele.
 */
function TipoSeguro(valor) {
  return {
    valor: valor,
    invalido() {
      return this.valor === null || this.valor === undefined
    },
    map(fn) {
      if(this.invalido()) {
        console.error("passou uma função inválida")
        return TipoSeguro(null)
      } else {
        const novoValor = fn(this.valor)
        return TipoSeguro(novoValor)
      }
    }
  }
}

const result = TipoSeguro("um texto qualquer")
  .map(x => x.toUpperCase())
  .map(x => `${x}!!!`)
  // .map(x => null)
  .map(x => x.split("").join("  "))

console.log(result.valor)