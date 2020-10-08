const fs = require('fs')
const { resolve } = require('path')

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
  return files.filter(file => file.match(regex))
}

const readFileNames = (filePath) => {
  return new Promise((resolve, reject) => {
    try {
      const file = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
      resolve(file)
    } catch (error) {
      reject(error)
    }
  })
}

const openFiles = (filesNames) => {
  // Promisse.all resolve todas as promessas e só depois retorna um array com todas as respostas
  return Promise.all(filesNames.map(fileName => readFileNames(`${__dirname}/legendas/${fileName}`)))
}

const changeFileLinesToOneArrayElements = (openedFiles) => {
  return openedFiles.flatMap(file => file.split('\n'))
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

const toLowerCase = (strings) => {
  return strings.map(s => s.toLowerCase())
}

const countElements = (array) => {
  return Object.values(array.reduce((acc, el) => {
    const qtd = acc[el] ? acc[el].qtd + 1 : 1 // se o elemento ainda não existe conta 1x, se existir, conta qtd+1
    acc[el] = { word: el, qtd } // cria um objeto dentro do acc se ele n existir, se existir ele sobrescreverá com a nova qtd
    return acc
  }, {})).sort((a, b) => b.qtd - a.qtd) 
}

listFilesFromPath(pathOfLegends)
  .then((filenames) => filterFilesForExtension('srt', filenames))
  .then(openFiles)
  .then(changeFileLinesToOneArrayElements)
  .then(removeEmptyLines)
  .then(removeNumberLines)
  .then(removeTagLines)
  .then(removeTrashCharsFromLines)
  .then(linesToWords)
  .then(removeTrashWords)
  .then(toLowerCase)
  .then(countElements)
  .then(console.log)