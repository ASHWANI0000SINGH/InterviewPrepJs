//1. getters
// getters are basically functions which gets the properties of the object using get keyword
// setters are basically functions which chnage the property of the obuject using set keyword


const student={
    name:"ashwani",
    get getName(){
        return this.name;
    },
    set changeName(name){
        this.name=name;
    }
}
console.log(student.getName);
student.changeName="ashwani kumar singh"
console.log(student.name);
