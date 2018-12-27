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
