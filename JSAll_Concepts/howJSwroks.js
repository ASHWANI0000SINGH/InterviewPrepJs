// 1. In jS when there is code running 

// compiling phase ******************************

// 2. First it will create GEC(Global execution Context)
// 3. "this " key word will bbe asigned to window object
// 4.  In call stack all varibal will be placed , with var initialized to undefined in the starting 
// 5.   And for let and const will be uninitialzied 
// 6. Then code will run line by line 
// 7. if anything is accesesed before declared will throw error for let and const 
// 8 . but for var it will be undefined

// exection phase *****************************************
// 1. When everyting is stored in the memory then js runs line by line
// 2. And all the execution takes place 
// 3. It will create call stack for execution(if there are multiple function)
// 4. Then it will pile up all the function in stack
//5. and it will pop of all the function from call stack after execting it
//6. When the code runs completely then Gec is also removed 


// referenc
// https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/