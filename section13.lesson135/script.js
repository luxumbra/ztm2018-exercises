/*********
 ECMAScript 6
 *********/

// const & let

// const player = 'Dave'
// let experience = 100
// let wizardLevel = false

// if (experience > 90) {
//   let wizardLevel = true
// }

// const player = {
//   player: 'Dave',
//   experience: 100,
//   wizardLevel: true
// }

/*
******* destructuring
*/

// const obj = {
//   player: 'Bobby',
//   experience: 100,
//   wizardLevel: false
// }

// const player = obj.player
// const experience = obj.experience
// let wizardLevel = obj.wizardLevel

// const { player, experience } = obj // destructured
// let { wizardLevel } = obj

/*
******* Object properties
*/

// const name = 'John Snow'

// const obj2 = {
//   [name]: 'Hello',
//   [1 + 2]: 'Hi',
//   ['John' + 'Snow']: 'Hello there'
// }
// console.log(obj2)

// const a = 'simon'
// const b = true
// const c = {}

// const obj3 = {
//   a, b, c
// }
// console.log(obj3)

// Template strings
// const name = 'Dave'
// const age = 43
// const pet = 'cat'

// const greeting = 'Hello' + name + ', how are you today?' // old style strings
// const greetingBest = `Hello ${name}, you seem to be ${age - 10}! What a lovely ${pet} you have!` // new template strings

// function greet (name = '', age = 43, pet = 'cat') {
//   return `Hello ${name}, you seem to be ${age - 10}! What a lovely ${pet} you have!`
// }

/*
******** JavaScript Types: Symbols
*/
// Symbols can contain the same values but are always unique
// let sym1 = Symbol()
// let sym2 = Symbol('foo')
// let sym3 = Symbol('foo')

// console.log(sym2 === sym3)

/*
********** Arrow functions
*/

// normal function
// function add1 (a, b) {
//   return a + b
// }

// // arrow function
// const add2 = (a, b) => a + b
