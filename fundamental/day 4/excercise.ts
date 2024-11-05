// Exercise 1

function trianglePattern(height: number): string {
  let current = 1;
  let result = ""

  for (let i = 1; i <= height; i++){
    let line = ""

    for(let j  = 1;j <= i;j++){
      line += current < 10 ? `0${current}` : `${current}`
      current++
      
    }
    result += line.trim() + "\n"
  }
  return result.trim()
}

console.log("Excercise 1 =",trianglePattern(4))


//Excercise 2
function loopFizzBuzz (n: number): string {
  let result = [];

  for (let i = 1;i <= n;i++){
    if (i % 3 === 0 && i % 5 === 0){
      result.push("FizzBuzz")
    } else if (i % 3 === 0){
      result.push("Fizz")
    } else if (i % 5 === 0){
      result.push("Buzz")
    } else {
      result.push(i.toString())
    }
  }
  return result.join(", ")
}

console.log("Exercise 2 =", loopFizzBuzz(6))

//Excercise 3
function BMICalculator(weight:number, height:number):string {
  let calculate = weight / (height * height)

  if (calculate <= 18.5) {
    return "Less Weight"
  } else if (calculate >= 18.5 && calculate <=24.9) {
    return "Ideal"
  } else if (calculate >= 25.0 && calculate <=29.9) {
    return "Over Weight"
  } else if (calculate >= 30.0 && calculate <= 39.9) {
    return "Very Overweight"
  } else {
    return "Obesity"
  }
}

console.log("Excercise 3", BMICalculator(100,150))

//Excercise 4
function removeOddNumbers(arr: number[]): number[] {
  return arr.filter(num => num % 2 ===0)
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Excercise 4", removeOddNumbers(array))

//Excercise 5
function splitString(input: string): string[] {
  return input.split(" ")
}

const input = "Hello World"
console.log("Excercise 5", splitString(input))