const fs = require('fs')
const { Observable } = require('rxjs')
const { reduce } = require('rxjs/operators')

const pathOfLegends = `${__dirname}/legendas`

const listFilesFromPath = (pathDir) => {
  return new Observable(subscriber => {
    try {
      fs.readdirSync(pathDir).forEach(file => subscriber.next(file))
      subscriber.complete()
    } catch (e) {
      subscriber.error(e)

    }
  })
}

// Fabrica de operadores
function operatorsFactory(fn) {
  return (source) => new Observable(subscriber => {
    const subscription = fn(subscriber)
    source.subscribe({
      next: subscription.next,
      error: subscription.error || (e => subscriber.error(e)),
      complete: subscription.complete || (e => subscriber.complete(e))
    })
  })
}

// Operador
const filterFilesByExtension = (ext) =>
  operatorsFactory(subsecriber => ({
    next(file) {
      const regex = `.${ext}$`
      if (file.match(regex)) {
        subsecriber.next(file)
      }
    },
    complete() {
      subsecriber.complete()
    }
  }))

const readFiles = () =>
  operatorsFactory(subscriber => ({
    next(file) {
      const readedFile = fs.readFileSync(`${__dirname}/legendas/${file}`, { encoding: 'utf8', flag: 'r' })
      subscriber.next(readedFile)
      // subscriber.complete()
    },
    complete() {
      subscriber.complete()
    }
  }))

const divideFileInLines = () =>
  operatorsFactory(subscriber => ({
    next(openFile) {
      subscriber.next(openFile.split('\n'))
    },
    complete() {
      subscriber.complete()
    }
  }))

const removeWhiteSpaces = () =>
  operatorsFactory(subscriber => ({
    next(file) {
      subscriber.next(file.map(line => line.trim()))
    },
    complete() {
      subscriber.complete()
    }
  }))


const removeTagLines = () =>
  operatorsFactory(subscriber => ({
    next(file) {
      subscriber.next(file.filter(line => !line.match('^<')))
    },
    complete() {
      subscriber.complete()
    }
  }))

const removeNumberLines = () =>
  operatorsFactory(subscriber => ({
    next(file) {
      subscriber.next(file.filter(line => !line.match('^\\d+')))
    },
    complete() {
      subscriber.complete()
    }
  }))

const removeTrashCharsFromLines = () =>
  operatorsFactory(subscriber => ({
    next(file) {
      subscriber.next(file.map(l => l.replace(/(\r\n|\n|\r|^- |\.+|\?$|,|♪|:|<[^>]*>|"|\?|!|\[|\]|--|\d)/gm, "")))
    },
    complete() {
      subscriber.complete()
    }
  }))


const linesToWords = () =>
  operatorsFactory(subscriber => ({
    next(file) {
      const mapped = file.map(l => l.split(" "))
      subscriber.next(mapped.flat())
    },
    complete() {
      subscriber.complete()
    }
  }))

const removeTrashWords = () =>
  operatorsFactory(subscriber => ({
    next(file) {
      subscriber.next(file.filter(w => w !== '' && w !== '-'))
    },
    complete() {
      subscriber.complete()
    }
  }))

const countElements = (arrayElements) => {
  const elements = arrayElements.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1
    return acc
  }, {})

  return Object.keys(elements).map(key => {
    return { 'element': key, 'qtd': elements[key] }
  }).sort((a, b) => b.qtd - a.qtd)
}

listFilesFromPath(pathOfLegends)
  .pipe(
    filterFilesByExtension('srt'),
    readFiles(),
    reduce((acc, val) => acc + val),
    divideFileInLines(),
    removeWhiteSpaces(),
    removeTagLines(),
    removeNumberLines(),
    removeTrashCharsFromLines(),
    linesToWords(),
    removeTrashWords()
  ).subscribe(result => console.log(countElements(result)))
