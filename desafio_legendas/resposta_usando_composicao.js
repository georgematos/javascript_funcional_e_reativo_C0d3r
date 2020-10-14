const fs = require('fs')

const pathOfLegends = `${__dirname}/legendas`

const listFilesFromPath = (pathDir) => {
  return new Promise((resolve) => {
    fs.readdir(pathDir, (err, filesNames) => {
      if (err) {
        console.log(err)
      }
      resolve(filesNames)
    })

  })
}

const filterFilesForExtension = (ext, files) => {
  const regex = `.${ext}$`
  if (Array.isArray(files)) {
    return files.filter(file => file.match(regex))
  }
}

const readFiles = (filesNames) => {
  const array = []
  for (let f of filesNames) {
    const file = fs.readFileSync(`${__dirname}/legendas/${f}`, { encoding: 'utf8', flag: 'r' })
    array.push(file)
  }
  return array
}

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

const toLowerCase = (words) => {
  return words.map(w => w.toLowerCase())
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
    return {'element': key, 'qtd': elements[key]}
  }).sort((a, b) => b.qtd - a.qtd)
}

function composicao(...funcoes) {
  return function (valor) {
    return funcoes.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc)
      } else {
        return fn(acc)
      }
    }, valor)
  }
}

const filesForExtension = listFilesFromPath(pathOfLegends)
  .then((filenames) => filterFilesForExtension('srt', filenames))

const revelarPalavrasMaisUsadas = composicao(
  readFiles,
  changeFileLinesToOneArrayElements,
  removeEmptyLines,
  removeNumberLines,
  removeTagLines,
  removeTrashCharsFromLines,
  linesToWords,
  toLowerCase,
  removeTrashWords,
  countElements
)

revelarPalavrasMaisUsadas(filesForExtension).then(console.log)