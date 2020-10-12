const nums = [4, 2, 5, 7, 8, 3]

/*
  3 - recursividade

    Há dois aspectos importantes de uma função recursiva:
    1 - existe uma condição de parada
    2 - ela chama a si mesma até a condição ser satisfeita
*/

function somar(array, total = 0) {
  // poderia ser criada uma variável para acumular o total, porém, a função seria impura
  if (array.length === 0) {
    return total
  }

  // chama-se a própria função passando os dados processados
  return somar(array.slice(1), total + array[0])
}

console.log(somar(nums))