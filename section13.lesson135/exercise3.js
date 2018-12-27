// change everything below to the newer Javascript!

// let + const
let a = 'test'
const b = true
const c = 789
a = 'test2'

// Destructuring
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
  city: 'Bristol'
}

const { firstName, lastName, eyeColor } = person
let { age, city } = person

// Object properties
let d = 'test'
let e = true
let f = 789

var okObj = {
  d,
  e,
  f
}

// Template strings
const message = `Hello ${firstName}, have I met you before? I think we met in ${city} last summer no???`

// default arguments
// default age to 10;
// function isValidAge(age = 10) {
//     return age
// }
const isValidAge = (age = 10) => age

// Symbol
// Create a symbol: "This is my first Symbol"
const myFirstSymbol = Symbol('This is my first Symbol')

// Arrow functions
function whereAmI (username, location) {
  if (username && location) {
    return 'I am not lost'
  } else {
    return 'I am totally lost!'
  }
}
const whereAmI2 = (username, location) => {
  if (username && location) {
    return 'I am not lost'
  } else {
    return 'I am totally lost!'
  }
}
