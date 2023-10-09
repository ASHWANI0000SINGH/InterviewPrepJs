//1. New Keyword
// It is used to create instance of the class
// Sets the prototype of the newely created object to Animal class

// 2. class keyword
// In javascript class is used to create blueprint of objects 
// class is also considered as fcuntion in javascript 
//  we can define class , as function declartion or function exppression


// 3. super keyword
//  It is used to access proprties of parnet or ancesstor class.

// 4. Method overriding
// Method overriding simply means when  we have same method in parent and child class but method 
//  works differently so that is called as method overriding


// new keyword
class Animal{
    constructor(name,species){
        this.name=name,
        this.species=species
        
    }
}

const animal1=new Animal("jakie","labra");
console.log(animal1)    



//method overriding
class Human{
    constructor(){

    }
    eat(){
        return "human eat chicken"
    }
}
class Genz extends Human{
    constructor(){
        super()

    }
    eat(){
        return "human eat only vegetables"
    }
}
const human1= new Genz()
console.log(human1.eat());
