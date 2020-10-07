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

const removeTrashLines = (files) => {
  const lineIsNumerLine = '^\\d+'
  const lineIsTag = '^<'
  const lineIsEmpty = '^\s*$'
  const lineIsAnEscape = '^\\r'

  return files.filter(line =>
    !line.match(lineIsNumerLine) &&
    !line.match(lineIsTag) &&
    !line.match(lineIsEmpty) &&
    !line.match(lineIsAnEscape)
  )
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
  return words
    .filter(w => w !== '')
    .filter(w => w !== '-')
}

const countWords = (arrayWords) => {
  words = {}
  for (w of arrayWords) {
    words[w] = (words[w] || 0) + 1
  }
  const resultList = Object.keys(words).map((key) => ({
    'word': key,
    'qtd': words[key]
  })).sort((a, b) => b.qtd - a.qtd)

  return resultList
}

listFilesFromPath(pathOfLegends)
  .then((filenames) => filterFilesForExtension('srt', filenames))
  .then(readFiles)
  .then(changeFileLinesToOneArrayElements)
  .then(removeTrashLines)
  .then((lines) => removeTrashCharsFromLines(lines))
  .then(linesToWords)
  .then(removeTrashWords)
  .then(countWords)
  .then(console.log)