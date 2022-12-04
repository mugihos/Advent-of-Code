const fs = require('fs')

const data = fs.readFileSync('input.txt', 'utf8')

const splitData = data.split('\n')

const newArr = []
let total = 0
for (let i = 0; i < splitData.length; i++) {
  if (splitData[i] !== '') {
    total = total + Number(splitData[i])
  } else {
    newArr.push(total)
    total = 0
  }
}
let numb = Math.max(...newArr)
console.log(numb)
