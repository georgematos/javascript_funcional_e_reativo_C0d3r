const { Observable } = require("rxjs");

const stream = (min, max) => {
  return new Observable(subscriber => {
    Array(max - min).fill().map((_, i) => {
      subscriber.next(min + i)
    })
  })
}
stream(3, 8).subscribe((n) => console.log(n))