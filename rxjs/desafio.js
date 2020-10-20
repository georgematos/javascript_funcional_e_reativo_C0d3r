const { Observable } = require("rxjs");

const stream = (min, max) => {
  return new Observable(subscriber => {
    Array(max - min).fill().map((_, i) => {
      subscriber.next(min + i)
    })
    subscriber.complete()
  })
}
stream(3, 8).subscribe((n) => console.log(n))

const nums = [1, 2, 3, 4, 5]

nums.forEach(n => { 
  setTimeout(() => { 
    console.log(n) 
  }, n * 1000) 
});