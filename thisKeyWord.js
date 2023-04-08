// 1, When we work with normal function this will be referred to the current obj and it also depends upon how the function is called
// 2. arrao function: But when we talk about arrow function this is referred to the global oject.
// secenerio 1(When we have function inside other function)
// in that case when we try to find this value of this it will return window object 
// As nested child this is not binded to the cuuremt object (talking about child function)

// senerio 2 (When we have 2 arrow function nested )
// In that case both this will point to the window object as arrow function doesnt have this

// senerio3 (when we have aroow function inside normal function)
// In that case we will have this value as the cuurent obj


// When we have 2 nested arr
const person1 = {
  age: 26,
  greet() {
    console.log(this.age);
    console.log(this);

    function insideGreet() {
      console.log(this.age);
      console.log(this);
    }
    insideGreet();
  },
};
person1.greet();

const person2 = {
  age: 25,
  greet:()=> {
    console.log(this.age);

    const insideGreet=()=> {
      console.log(this);
    }
    insideGreet();
  },
};
person2.greet();

const person3 = {
  age: 25,
  greet() {
    console.log(this.age);

    const insideGreet=()=> {
      console.log(this);
    }
    insideGreet();
  },
};

person3.greet();


