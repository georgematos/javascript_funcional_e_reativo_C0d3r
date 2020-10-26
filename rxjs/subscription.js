const { interval, timer, Subscription } = require('rxjs')
const { pipe, delay, timeout } = require('rxjs/operators')

const numberEmitter = timer(3000, 500)

const subs1 = numberEmitter.subscribe(console.log)
const subs2 = numberEmitter.subscribe(console.log)
const subs3 = numberEmitter.subscribe(console.log) // vai executar pra sempre

const subscription = new Subscription();
subscription.add(subs1)
subscription.add(subs2)

setTimeout(() => {
  subscription.unsubscribe()
}, 6000);
