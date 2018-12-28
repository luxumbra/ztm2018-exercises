/*
******* Advanced Arrays
*/

const array = [1, 2, 10, 16]
const double = []

const newArray = array.forEach((num) => {
  double.push(num * 2)
})
console.log('forEach: ', double)

// Map, filter, reduce
// These methods are pure - no side effects and whatever is input, they always return a value.
// Map
const mapArray = array.map((num) => {
  return num * 2 // map must always have a return!
})

// or even cleaner (because map only has one param and returns one value)
const mapArray2 = array.map(num => num * 2)

console.log('Map: ', mapArray)

// when looping through arrays and performing simple operations, use Map
// forEach iterates through an array but does not perform any action on the original array.
// map transforms the array and always has a return element

// forEach leads to actions which create 'side-effects'
// map tends to eliminate side-effects

// Filter
const filterArray = array.filter(num => num > 5)
console.log('Filter: ', filterArray);

// Reduce
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num
}, 0)
console.log('Reduce: ', reduceArray)
