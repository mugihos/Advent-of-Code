//setting up data for use
const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf8')
const splitData = data.split('\n')

//put each match in one array
const splitArr = []
for (let i = 0; i < splitData.length; i++) {
  const splitMatch = splitData[i].split(' ')
  splitArr.push(splitMatch)
}

// const obj = splitArr.reduce((accumulator, value) => {
//   return { ...accumulator, [value[0]]: value[1] }
// }, {})
// console.log(obj)

//shape points X(R): 1, Y(P):2, Z(S):3
//match points Lose: 0, Draw: 3, Win: 6
//X(A): Rock, Y(B): Paper, Z(C) Scissors

//3 types of draw, XX, YY, ZZ
//X can win if Z > B
//Y can win if X > A
//Z can win if Y > P

//need to calculate the score for each match > keep adding to the total and then get the score for all match together

let total = 0
for (let i = 0; i < splitArr.length; i++) {
  const rock = 1
  const paper = 2
  const scissors = 3
  const winner = 6
  const draw = 3
  const first = splitArr[i][0]
  const second = splitArr[i][1]

  if (first === 'A' && second === 'Y') {
    total = total + winner + paper
  } else if (first === 'B' && second === 'Z') {
    total = total + winner + scissors
  } else if (first === 'C' && second === 'X') {
    total = total + winner + rock
  } else if (first === 'A' && second === 'Z') {
    total = total + scissors
  } else if (first === 'B' && second === 'X') {
    total = total + rock
  } else if (first === 'C' && second === 'Y') {
    total = total + paper
  } else if (first === 'A' && second === 'X') {
    total = total + draw + rock
  } else if (first === 'B' && second === 'Y') {
    total = total + draw + paper
  } else if (first === 'C' && second === 'Z') {
    total = total + draw + scissors
  }
}

console.log(total)
