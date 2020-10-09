// Uma função pura é uma função que seu valor de retorno
// é determinado APENAS pelos seus valores de entrada , sem 
// efeitos colaterais observáveis (não altera nada fora da função).

// impura, pois depende de PI que é um valor externo
// se esse valor mudar, o resultado da função será diferente
function areaCirculoInpura(raio) {
  return raio * raio * Math.PI // PI é constante, logo mesmo sendo impura, não há grandes problemas
}

// versão pura da função acima
function areaCirculoPura(raio, pi) {
  return raio * raio * pi
}

console.log(areaCirculoInpura(10))
console.log(areaCirculoPura(10, Math.PI))