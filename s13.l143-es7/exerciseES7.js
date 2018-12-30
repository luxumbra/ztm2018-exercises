import { BigNumber } from 'bignumber.js'
// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let john = dragons.includes('John')
console.log(john)

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let contains = dragons2.filter(name => name.includes('John'))
console.log(contains);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const powerOf = (x) => {
  const y = 100
  // let num = new BigNumber(x)
  // let sum = num.exponentiatedBy(y)
  let sum = x ** y
  // console.log('sum', sum)
  return sum
}
console.log(powerOf(10000))

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
