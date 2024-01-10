// this
// PascalCase
// new
function Animals(name, color) {
  this.name = name;
  this.color = color;
}

Animals.prototype.sound = function () {
  let sound;
  //   console.log("this.name", this.name);
  switch (this.name) {
    case "cat":
      sound = "meewee";
      break;
    case "goat":
      sound = "mmeee";
      break;
    case "bmw":
      sound = "thats is car";
      break;

    default:
      break;
  }
  console.log("sound", sound);
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
console.log("Car.prototype", Car.prototype);
let car1 = new Car("bmw", "red", "bmw").sound();
console.log("car1", car1);

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
        this.sound = "meewee";
        break;
      case "goat":
        this.sound = "mmeee";
        break;
      case "bmw":
        this.sound = "";
        break;
      case "benz":
        this.sound = `this is a ${this.name}`;
        break;

      default:
        break;
    }
    // clo
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

let carOne = new Cars("benz", "blue", "benz").prices(500).sounds();
console.log("carOne", carOne);
