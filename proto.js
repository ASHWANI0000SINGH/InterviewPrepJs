// 1. Proto is basically the property where one class is linked with the other class
// or we can also say that it can be used to inherit property of ancesstor class
// eg when we use any array property , we have so many array method which is basically
//  with the help of proto we can access its property

//2. Prototype is same as proto

//3. Prototypal chain is basically the chain of classes which are linked by the help of proto

//4. Prototypal inheritence is basically how we can use methods of ancesstor class 
// 1. In JAvascript we have a keyword "__proto__ or [[prototype]]" linked with the object or classes.
// 2. Either its linked to null or refrences with another object.
// 3. So protypal inheryance is basically when we try to acces proprties of child class which is not there 
// 4. then we will look into the ancensotr class or parent class 
// 5. which is called as protypal inheritance

//Using Class
class Animal {
  constructor(dogname, species, age) {
    this.dogname = dogname;
    this.species = species;
    this.age = age;
  }
  getDetailAnimal() {
    return `${dogname} species is ${this.species} and its age is ${this.age} `;
  }
}

class Dog extends Animal {
  constructor(dogname, species, age) {
    super(dogname, species, age);
    this.speed = 40;
  }
  dogSpeed() {
    return `${this.dogname} is a dog , its species is ${this.species} and its age is ${this.age} and it can run at ${this.speed}`;
  }
}


// using Object
const animal = {
  getDetails(dogName, species, age) {
    return `${dogName} species is ${species} and its age is ${age} `;
  },
};
const dog = {
    dogDetails(legs) {
      return `dog has ${legs} `;
    },
  };
  
dog.__proto__=animal


console.log(dog);



var cat = {breed: "Russian Blue"} // cat.__proto__ lists all its methods and cat.prototype returns undefined as expected
var dog= {age: 7} // same for the dog variable
// Now, let's see how we can get the cat object to access the properties of the dog object

Object.setPrototypeOf(cat, dog) // allows the cat object to access the properties of the dog object

// Even though we've used 'setPrototypeOf', the cat object still doesn't have a prototype property. It only has a reference to the dog object via __proto__:

console.log(cat.hasOwnProperty('prototype')) // returns false

console.log(cat.breed) // returns 7




// using objects 
const animals={
  eat:true
}
const rabbit={
  walk:true
}
rabbit.__proto__=animals
console.log(rabbit.eat);