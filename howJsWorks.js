// 1.global execution context created.
// 2.Then all primitve data will go into the stack memory
// 3.Then all refernce type will go in heap memory such as functions and arrays, objects
// 4. Now this keyword will be set to global window object.
// Before execution
// 5 .Variable created with var will be undefined in the memory
// 6. Variable created with let and const will be unitialized in the mwmory at start.
// 7. Now it will start executing the code line by line 
// 8 .All variable will be initialized .
// 9 If variable with var in created and not initailzed then it will give undefined
// 10. for others it will give  error of uninitialization
// 11. for promises , callbacks and setTimeout it will be handled by web broser API
// 12 . After the exection of all async task it will wait in the call back queue
// 13. promises will be waiting in microtask queu and settimeout will be in call back queue.
// 14. event loop will check the call stack is empty or not
// 15  When the call stack is empty then it will run async task .

// console.log(myName)  /1. /ans- is undefined
var myName;
// console.log(myFullName)//2. ans- Cannot access 'myFullName' before initialization
let myFullName;

console.log(foo());// 3.ans -anonomus or arrow function gives Cannot access before initialization
const foo= ()=>{ // 
    return 1;
}
