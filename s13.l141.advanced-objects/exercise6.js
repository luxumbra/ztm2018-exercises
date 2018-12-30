//Evaluate these:
//#1
[2] === [2] // false
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5}; // 5
object1.a = 4; // 4


//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
class Animal {
  constructor(name, type, color, voice) {
    this.name = name
    this.type = type
    this.color = color
    this.voice = voice

  }
}

class Mammal extends Animal {
  constructor(name, type, color, voice
  ) {
    super(name, type, color, voice
    )
  }
  sound() {
    let greet = `'${this.voice}' Hi, I'm '${this.voice}' ${this.name} and '${this.voice}' I'm a ${this.color} ${this.type}`
    return greet
  }
}

const cow = new Mammal('Daisy', 'Cow', 'Brown', 'Moo')
const dog = new Mammal('Rex', 'Dog', 'Many coloured', 'Woof')

console.log(cow.sound())
