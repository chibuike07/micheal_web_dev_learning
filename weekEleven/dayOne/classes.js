// this
// PascalCase
// new
function Animals(name, color) {
  this.name = name;
  this.color = color;
}

Animals.prototype.sound = function () {
  let sound;
  switch (this.name) {
    case "cat":
      sound = "meewee";
      break;
    case "goat":
      sound = "mmeee";
      break;
    case "bmw":
      sound = `that is car ${this.name}`;
      break;

    default:
      break;
  }
  return sound;
};

const firstAnimal = new Animals("cat", "black").sound();
const secAnimal = new Animals("goat", "black");

console.log("firstAnimal", firstAnimal);
console.log("secAnimal", secAnimal);
console.log("secAnimal.sound()", secAnimal.sound());

function Car(name, color, company) {
  Animals.call(this, name, color);
  this.company = company;
}

Car.prototype = Object.create(Animals.prototype);
let car1 = new Car("bmw", "red", "bmw").sound();

// es6 class

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.price = 0;
    this.sound = "";
  }
  sounds() {
    switch (this.name) {
      case "cat":
        return (this.sound = "meewee");

      case "goat":
        return (this.sound = "mmeee");
      case "bmw":
        return (this.sound = `this is a ${this.name}`);
      case "c class":
        this.sound = `this is a ${this.name}`;
        break;
      default:
        break;
    }
    return this;
  }
  prices(price) {
    this.price = price;
    return this;
  }
}

let animal1 = new Animal("bmw", "red");
console.log("animal1", animal1.prices(400).sounds());
// console.log("animal1", animal1.price(400));

class Cars extends Animal {
  constructor(name, color, company) {
    super(name, color);
    this.company = company;
    this.sound = "";
    this.price = 0;
  }
}

let carOne = new Cars("c class", "blue", "benz").prices(500).sounds();
console.log("carOne", carOne);

// carOne Cars {
//   name: 'c class',
//   color: 'blue',
//   price: 500,
//   sound: 'this is a c class',
//   company: 'benz'
// }
