// Clojure é quando uma função lembra do seu escopo léxico (arquivo), 
// mesmo quando a função é usada fora desse escopo.

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

// ---------------------

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

// Na essência makeAdder trata-se de uma funão fábrica - constrói outras funções.

var add5 = makeAdder(5); // add5 é a agora uma função que recebe um valor y e retornará esse valor + 5
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

// Emulando métodos privados com closure

var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter
    }
  }
})();

console.log(Counter.value())
Counter.increment();
Counter.increment();
console.log(Counter.value())
Counter.decrement();
console.log(Counter.value())