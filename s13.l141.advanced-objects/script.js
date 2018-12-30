/*
****** Advanced Objects
*/

// Reference types
const object1 = { value: 10 }
const object2 = object1
const object3 = { value: 10 }

// object1 === object2 returns true
// object1 === object3 returns false
// this is because object1 and object3 are separate reference type objects so their type does not match, whereas object2 references object1 and so, they match.

// Context
// Sometimes mixed up with Scope.
// Scope is created when a function is created
function a() {
  // scope lives here
  let something = 2
}

// Context refers to our location within an object
// to get the current context, we use `this` keyword. So, as an example:
console.log(this) // `this` in the current context will return the window object

function b () {
  let something = 2
  console.log(this) // `this` in this context, returns the window object again because we are still in the root of the window object.
}

const object4 = { // here we create an object
  a: function() {
    console.log(this) // `this` is now in object4 context so will return the contents of this object, not those of window
  }
}

// Instantiation
// Copying an object and reuse the code, creating an instance of that Object which can then be modified.

// a class is an object we want to be able to copy.
class Player {
  constructor (name, type) {
    console.log('Player: ', this)

    // In order to copy it, a class needs a constructor, which outlines all the properties needed
    this.name = name // whenever accessing properties of a class, we use `this` to access everything within the class.
    this.type = type
  }
  // classes need methods to perform actions
  introduce () {
    console.log(`Hi, I am ${this.name}, I am a ${this.type}`)
  }
}

// to copy a class and inherit its properties, we use `extends`
class Wizard extends Player {
  constructor (name, type) {
    super(name, type) // we must use `super` in order to interact with the parent class constructor (`this` wont work without it)
    console.log('Wizard: ', this)
  }
  play () {
    console.log(`Cool!! I'm a ${this.type} and my name is ${this.name}`)
  }
}

const wizard1 = new Wizard('Bob', 'Healer')
const wizard2 = new Wizard('Jenny', 'Dark Mage')
