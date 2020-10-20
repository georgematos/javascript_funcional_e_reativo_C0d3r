const { ajax } = require("rxjs/ajax")
const { map, concatAll } = require("rxjs/operators")
const { XMLHttpRequest } = require('xmlhttprequest')

ajax({
  createXHR: () => new XMLHttpRequest(),
  url: 'https://api.github.com/users/cod3rcursos/repos'
})
  .pipe(
    map(resp => JSON.parse(resp.xhr.responseText)),
    concatAll(),
    map(repo => repo.full_name)
  )
  .subscribe(console.log)