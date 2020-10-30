const fs = require('fs')
const { Observable } = require('rxjs')

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
     if(file.match(regex)) {
       subsecriber.next(file)
      }
    },
   complete() {}
}))

const readFiles = () =>
  (source) => new Observable(subscriber => {
    const subscription = source.subscribe({
      next(value) {
        const file = fs.readFileSync(`${__dirname}/legendas/${value}`, { encoding: 'utf8', flag: 'r' })
        subscriber.next(file)
      },
      error(error) {
        subscriber.error(error)
      },
      complete() {
        subscriber.complete()
      }
    })
    return () => subscription.unsubscribe()
  })

// const readFiles = (filesNames) => {
//   const array = []
//   for (let f of filesNames) {
//     const file = fs.readFileSync(`${__dirname}/legendas/${f}`, { encoding: 'utf8', flag: 'r' })
//     array.push(file)
//   }
//   return array
// }

const changeFileLinesToOneArrayElements = (openFiles) => {
  if (Array.isArray(openFiles)) {
    return openFiles.flatMap(file => file.split('\n'))
  }
}

const removeEmptyLines = (files) => {
  // se a linha for vazia o trim vai remover
  return files.map(f => f.trim())
}

const removeTagLines = (files) => {
  const lineIsTag = '^<'
  return files.filter(line => !line.match(lineIsTag))
}

const removeNumberLines = (files) => {
  const lineIsNumerLine = '^\\d+'
  return files.filter(line => !line.match(lineIsNumerLine))
}

const removeTrashCharsFromLines = (array) => {
  return array.map(l => l.replace(/(\r\n|\n|\r|^- |\.+|\?$|,|♪|<[^>]*>|"|\?|!|\[|\]|--|\d)/gm, ""))
}

const linesToWords = (lines) => {
  let result = lines.map(l => l.split(" "))
  let words = result.flat()

  return words
}

const removeTrashWords = (words) => {
  return words.filter(w => w !== '' && w !== '-')
}

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
    // readFiles()
  )
  .subscribe(console.log)

// listFilesFromPath(pathOfLegends)
//   .then((filenames) => filterFilesForExtension('srt', filenames))
//   .then(readFiles)
//   .then(changeFileLinesToOneArrayElements)
//   .then(removeEmptyLines)
//   .then(removeNumberLines)
//   .then(removeTagLines)
//   .then(removeTrashCharsFromLines)
//   .then(linesToWords)
//   .then(removeTrashWords)
//   .then(countElements)
//   .then(console.log)