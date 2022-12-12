//setting up data for use
const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf8')
const testData = fs.readFileSync('test.txt', 'utf8')
const splitData = data.split('\n')

//block total array
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
console.log(newArr, 'new array with total')

//get the max in the total array
let numb = Math.max(...newArr)
console.log(numb, 'max num')

//sort the array in ascending order
const asceArr = newArr.sort((a, b) => b - a)
console.log(asceArr, 'ascending')

//get top 3 and add them together
let topThreeTotal = 0
for (let i = 0; i < 3; i++) {
  console.log(asceArr[i])
  topThreeTotal = asceArr[i] + topThreeTotal
}
console.log(topThreeTotal, 'topthreetotal')
