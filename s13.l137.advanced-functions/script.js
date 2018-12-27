// Advanced functions in ES6

// Closures
const first = () => {
  // all const & let within a function are limited in scope to that function
  // this avoids naming conflicts.
  const greet = 'Hi'
  const second = () => {
    alert(greet)
  }
  return second
}

const newFunc = first()
newFunc()

// - A function ran, it executed but it's never going to execute again
// - BUT it's going to remember that there are references to those variables
// - so the child scope always has access to the parent scope

// Currying
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
const multiplyBy5 = curriedMultiply(5)

// Compose
const compose = (f, g) => (a) => f(g(a))

const sum = (num) => num + 1

compose(sum, sum)(5)

// Avoiding side-effects with Functional Purity
// Side Effect: If a function logs to console or interacts with an external variable
// eg:
let z = 1
function y() {
  // this function changes the value of let z (side effect), which is external to this function
  z = 2
}

// Functional Purity - the ideal or aim when writing a function
// no console.log use / side effects
// must always return something
// This becomes "Deterministic" - it always returns the same result
