/* É uma função que toma multiplos armumentos um de cada vez.
  Dada uma função com 3 parametros, a versão curry tomará um
  argumento e retornará uma função que toma o próximo argumento,
  que retorna uma função que toma o terceiro argumento. A última
  função returna o resultado dela aplicado a todos os argumentos
*/

const somarDoisNumeros = a => b => a + b

console.log(somarDoisNumeros(5)(8))