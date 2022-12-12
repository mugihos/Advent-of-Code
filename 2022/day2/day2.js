//setting up data for use
const fs = require('fs')
const data = fs.readFileSync('test.txt', 'utf8')
const testData = fs.readFileSync('test.txt', 'utf8')
const splitData = data.split('\n')

//put each match in one array
const splitArr = []
for (let i = 0; i < splitData.length; i++) {
  const splitMatch = splitData[i].split(' ')
  splitArr.push(splitMatch)
}

const rock = 1
const paper = 2
const scissors = 3
let score = 0

const obj = splitArr.reduce((accumulator, value) => {
  return { ...accumulator, [value[0]]: value[1] }
}, {})
console.log(obj)

//shape points X(R): 1, Y(P):2, Z(S):3
//match points Lose: 0, Draw: 3, Win: 6
//A: Rock, B: Paper, C: Scissors

//3 types of draw, XX, YY, ZZ
//X can win if Z > B
//Y can win if X > A
//Z can win if Y > P

//winning patterns
