// No 1
function lowestToHighest(arr: number[]) {
  if (arr.length === 0) {
    return -1
  }

  const sortedArr = arr.slice().sort((a,b) => a-b)
  const lowest = arr[0]
  const highest = arr[sortedArr.length -1]
  const average = Math.floor(arr.reduce((sum, num) => sum + num, 0) / arr.length);

  return `Lowest ${lowest}, Highest ${highest}, Average ${average}`
}

const arr1  = [12, 5, 23, 18, 4, 45, 32]
console.log("No 1 Answer", lowestToHighest(arr1))


// No 2

function concateWord(arr: string[]){
  const lastWord = arr.pop()
  return arr.join(", ") + ", and " + lastWord
}

const words = ["apple", "banana", "cherry", "date"];
console.log("Answer 2 is", concateWord(words))

//No 3 
function secondSmallest(arr: number[]) {
  arr.sort((a,b) => a-b);
  return arr[1]
}

console.log("Number 3 is", secondSmallest([5, 3, 1, 7, 2, 6]))

// No 4
function sumArrays(arr1: number[], arr2:number[]){
  return arr1.map((num, index) => num + arr2[index])
}

console.log("Number 4 is", sumArrays([1, 2, 3], [3, 2, 1]))

// No 5

function addUniqueElement(arr: number[], newElement: number) {
  if (!arr.includes(newElement)){
    arr.push(newElement)
  }
  return arr;
}

console.log(addUniqueElement([1, 2, 3, 4], 4));
console.log(addUniqueElement([1, 2, 3, 4], 7));

//No 6

// No 7

function insertMaxNum(maxSize: number, ...intergers: number[]){
  const result: number[] = []
  for (const interger of intergers){
    if (result.length < maxSize){
      result.push(interger)
    } else {
      break;
    }
  }
  return result
}

console.log("insertMaxNum",insertMaxNum(5, 5, 10, 24, 3, 6, 7, 8))

//No 8
function combineArrays(arr1: number[], arr2: number[]){
  return [...arr1, ...arr2]
}

console.log("combineArrays", combineArrays([1, 2, 3], [4, 5, 6]))

//No 9


function findDuplicates(arr: number[]){
  let res = []

  for(let i = 0;i < arr.length;i++){
    for(let j = 0;j < arr.length;j++){
      if (arr[i] === arr[j]){
        if (!res.includes(arr[i])){
          res.push(arr[i])
        }
        break
      }
    }
  }
  return res
}
const duplicateArr = [1, 2, 2, 2, 3, 3, 4, 5, 5]
console.log("find duplicates", findDuplicates(duplicateArr))

// No 10

function findDifference (arrOne: number[], arrTwo: number[]){
  arrOne.filter((element) => !arrTwo.includes(element))
}

const arrOne = [1, 2, 3, 4, 5],arrTwo = [3, 4, 5, 6, 7];
console.log(findDifference(arrOne,arrTwo))

//No 11

function filterPrimitives(arr: any[]){
  return arr.filter(item => item !== Object(item))
}

const mixedArr = [1, [], undefined, {}, "string", {}, []];
console.log(filterPrimitives(mixedArr));

// No 12

function sumOfDuplicates(arr: number[]){
  const sortedArr = arr.sort((a,b) => a -b)
  let sum = 0
  for(let i = 0; i < sortedArr.length; i++){
    if (sortedArr[i] === sortedArr[i+1]){
      sum += sortedArr[i];

      while ( sortedArr[i] === sortedArr[i + 1]){
        i++
      }
    }
  }
  return sum
}

console.log("Sum of Duplicates", sumOfDuplicates([10, 20, 40, 10, 50, 30, 10, 60, 10]))

//No 13

function rockPaperScissors(playerChoice: 'rock' | 'paper' | 'scissors') {
  const choices = ['rock', 'paper', 'scissors']
  const randomNumber = choices[Math.floor(Math.floor(Math.random() * choices.length))]

  if (playerChoice === randomNumber) {
    return 'Draw';
  }

  if (
    (playerChoice === 'rock' && randomNumber === 'scissors') ||
    (playerChoice === 'paper' && randomNumber === 'rock') ||
    (playerChoice === 'scissors' && randomNumber === 'paper')
  ) {
    return 'Win';
  }

  return 'Lose';
}

console.log("rockPaperScissors",rockPaperScissors('rock'));