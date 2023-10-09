// It basically checks the lexical scope of the function in upward direction and remembers the variable
// when function is created in 
// function foo(){
//     let myName="Ashwani";
//      function insideFoo(){
//         return myName;
//      }
//     return insideFoo;
// }
// const ans=foo();
// console.log(ans())

// function foo(){
//     let myName="ash";

//     function foo2() {
//         console.log(myName)
        
//     }
//     foo2()
// }
// foo()




