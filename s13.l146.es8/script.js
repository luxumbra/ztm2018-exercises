/*
****** ES8 new features
*/

// Pad

let paddedStart = 'I have padding before me'.padStart(17)
console.log(paddedStart)

let paddedEnd = 'I have padding after me'.padEnd(10)
console.log(paddedEnd)

// Trailing commas
const bike = (
  a,
  b,
  c,
  d,
  e,
) => { console.log(e) }

bike(7, 2, 3, 4, 5)

const obj1 = {
  username0: 'Dave',
  username1: 'Bob',
  username2: 'Jane',
  username3: 'James'
}

// Object.values
// Object.entries
// Object.keys

Object.values(obj1).forEach(value => { // returns a list of values from the object
  console.log(value)
})

Object.entries(obj1).forEach(value => { // returns an array from the object - this seems the best?
  // Can use .map .filter, etc on this. Nice.
  console.log(value)
})

Object.keys(obj1).forEach((key, index) => { // returns the key and value from the object
  console.log(key, obj1[key])
})

const sortUsername = Object.entries(obj1).map(value => {
  return value[1] + value[0].replace('username', '')
})
console.log(sortUsername)

// Async Await
// to be covered in a separate lesson
