// 1. Call- It is used to bind the obj with the function called
// 2. Apply-It is used to bind the onj with the function and extra arguments is passed in the Array.
// 3. Bind- It returns the function when we bind the onj with the function
// and we can invoke the function wherever we want.

// call
// As we know in js all functions are considered as object method
// so we can bind particular function with any object 
// so that the this value will be that object

// apply
// apply is same just need to pass the argumnets in array

// bind
// bind method is used to bind the current function with the obj and then we can keep that in other variavle 
// and we can use it


function about(age,hobby){
    console.log (`${this.name} is a ${this.profession} and he is ${age} years old and he likes playing ${hobby}`)
}

const ashwaniObj={
    name:"Ashwani",
    profession:"Software engineer"
}

const ajayObj={
    name:"Ajay",
    profession:"Operation Manager"
}
const rajObj={
    name:"Raj",
    profession:"Procurement Manager"
}
about.call(ashwaniObj,25,"basket ball");
about.bind(ajayObj,[24,"gym"]);
const obj3=about.bind(rajObj,26,"football");
obj3();
