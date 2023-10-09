let cap = {
    name: "Steve",
    team: "cap",
    petersTeam: function(mem1, mem2){
        console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team with members ${mem1} and ${mem2}`);
    }
}
let ironMan = {
    name: "Tony", 
    team: "iron man"
}

1. // building a polyfill of call///


//Here we will receive an object as a parameter on which function to be called
function.prototype.myCall = function(objOnWhichReqFnToBeInvoked){
    //Here this is cap.petersTeam
    // console.log("value of this:", this);
    // required function to be invoked is in this
    let requiredFn = this;
    // adding requiredFn(cap.petersTeam) in the object(ironMan) on which we want to call the requiredFn(cap.petersTeam)
    objOnWhichReqFnToBeInvoked.requiredFn = requiredFn;
    // calling function with that object ironMan
    objOnWhichReqFnToBeInvoked.requiredFn();
    // deleted added function from the object ironMan
    delete objOnWhichReqFnToBeInvoked.requiredFn;
}
cap.petersTeam.myCall(ironMan); 



**************************************************************
2. // building a polyfill of apply

function.prototype.myApply = function(objOnWhichReqFnToBeInvoked, args){
     let requiredFn = this;
    objOnWhichReqFnToBeInvoked.requiredFn = requiredFn;
    objOnWhichReqFnToBeInvoked.requiredFn(...args);
    
    delete objOnWhichReqFnToBeInvoked.requiredFn;
}
cap.petersTeam.myApply(ironMan,["Loki", "Thor"]);


****************************************************
3. // building a polyfill of bind///


function.prototype.myBind = function(objOnWhichReqFnToBeInvoked){
    const requiredFn = this;
    return function(...args){
        requiredFn.call(objOnWhichReqFnToBeInvoked,...args);
    }
    
}
const boundFn = cap.petersTeam.myBind(ironMan);
boundFn("loki", "thor");
 
 
 *****************************************************
 let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];
  output -> single level of array with num
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];



4.  /Flatten Array */
 function flattenArray(arr){
    console.log(arr)
   let newArray=[];
   for(let i=0;i<arr.length;i++){
     let iseleArray=arr[i];
     if(typeof iseleArray==="object"){
        console.log(iseleArray)
       let nestedArr=flattenArray(iseleArray);
       newArray.push(...nestedArr)
        console.log(nestedArr)
     }
     }else{
       newArray.push(iseleArray)

     }
      console.log(typeof iseleArray==="object")
   }
   return newArray;

 }
 console.log(flattenArray(input))


*********************************************

 let person = {
   firstName: "John",
   lastName: "Doe",
   address: {
     street: "North 1st street",
     city: "San Jose",
     state: "CA",
     country: "USA",
   },
   friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }],
 };




5. //    flatten object/

 {
   Company: 'GeeksforGeeks',
   Address: 'Noida',
   contact: -999999908,
   'mentor.HTML': 'GFG',
   'mentor.CSS': 'GFG',
   'mentor.JavaScript': 'GFG'
 }


function flatObj(obj){
  let newObj={}
  for(let key in obj){
     console.log( typeof obj[key])
    if(typeof obj[key]==="object"){

      let nestedObj=flatObj(obj[key])
      for(let j in nestedObj){
        newObj[key+ "."+j]=nestedObj[j];

      }


    }else{
      newObj[key]=obj[key]

    }
  }
  return newObj
}
console.log(flatObj(obj))
**********************************************


6. /deep copy of an object

 function deepCopy(obj) {
   let newObj={}
   for(let key in obj){
     if(typeof obj[key]==="object"){
       let nestedObj=deepCopy(obj[key]);
       newObj[key]=nestedObj;

     }else{
       newObj[key]=obj[key]
     }
      console.log(typeof obj[key])
   }
   return newObj;
 }

 let deepCopyObj=deepCopy(person);
  console.log(deepCopy(person));
 deepCopyObj.lastName="singh";
 deepCopyObj.address.street="bangalore"

 console.log(person);
 console.log(deepCopyObj);
 **********************************



// let arr = [2, 3, 4, 5];

7. // pollyfill of map

// Array.prototype.myMap=function(logic){
//   let newArr=[];
//   // console.log("7",this)
//   for(let i=0;i<this.length;i++){

//     let item=logic(this[i])
//     if(item){

//       newArr.push(item)
//     }

//   }
//   return newArr;
// }

// function logic(num){
//   if(num>2){
//     return num
//   }
//   // return num%2==0;

// }
// console.log(arr.myMap(logic))

Array.prototype.myMap=function(logic){
  let newArr=[];
  // console.log("7",this)
  for(let i=0;i<this.length;i++){

    let item=logic(this[i])
    if(item){

      newArr.push(item)
    }

  }
  return newArr;
}
// ***************************************************************************
8. 
// Array.prototype.myFilter=function(logic){
//   let newArr=[];
//   // console.log(this)
//   for(let i=0;i<this.length;i++){
//     let item=this[i];
//     if(logic(item)){
//       newArr.push(item)
//     }
//   }
//   return newArr;

// }

// let arr = [2, 3, 4, 5];

// function logic(num){
//   if(num>2){
//     return num;
//   }
// }
// console.log(arr.myFilter(logic))

// ***********************************************************************

9. // Reduce polyfill

Array.prototype.myReduce=function(logic,defaultVal){
  console.log("70",defaultVal)
 let acc=defaultVal!=undefined? defaultVal: this[0]// default not defined default=arr[0]
 let startIdx=defaultVal!=undefined?0:1  // start indx=1

 for(let i=startIdx;i<this.length;i++){

  acc=logic(acc,this[i])

 }
 return acc

}
function logic(acc,currEle){
  return acc+currEle;
 
}

let elems = [1, 2, 3, 4, 5];
console.log(elems.myReduce(logic))


// **********************************************************
10. // currying

function parent(){
  let firstName="Ashwani"
  return function child(){
    let lastName="Singh"
    console.log("firstname: ",firstName)

    return   function grandChild(){
      console.log("lastname: ",lastName)

      return function grand_grandChild(){
        return `hi my full name is ${firstName} ${lastName}`
      }
    }
  }
}
// const ans=parent();
// const firstFn=ans();
// const secondFn=firstFn();
// const thirdFn=secondFn();


// console.log(thirdFn)
// console.log(parent()()()())


// *********************************************************
11. // infinite currying


function counter(args){
  let count=0;
  console.log(arguments)
  if(args===0){
    return count;
  }else{
    return function inner(args){
      count++;
      if(args===0){
        return count;
      }else{
        return inner
  
      }
    }
  }


}
// console.log(counter()()(0))


// function createEvenStack(val){
//   let itemsArr=[]
//   return{
//     pushFn(val){
//       if(val%2==0){
//         itemsArr.push(val)
//         console.log("itemArr",itemsArr)
//       }else{
//         console.log("Please eneter even values")
//       }

//     },
//     popFn(){
//       return itemsArr.pop();

//     }
//   }
// }

// const stack=createEvenStack();
// stack.pushFn(2);
// stack.pushFn(4);
// stack.pushFn(8);
// stack.pushFn(11);
// const poppedval=stack.popFn();
// console.log(poppedval)
// stack.pushFn(12);





// console.log(even)



// *********************************************************


12. // own setInterval pollifill

function mySetInterval(cb, delay) {
  const obj={

     flag : true
  }
  function myFun() {
    cb();
    if (obj.flag == true) {
      setTimeout(myFun, delay);
    }
  }
  setTimeout(myFun, delay);

  return obj;
}
function cb() {
  console.log("called every time...");
}
function clearTimeOut(obj) {
  obj.flag=false;
}

let obj=mySetInterval(cb, 1000);


function cancellTimeout(){
  clearTimeOut(obj)
}

setTimeout(cancellTimeout,3000)


// *********************************************************




13. // custom My PromsieALl

Promise.myPromiseAll = function (arrOffPromise) {
  return new Promise(function (resolve, reject) {
    let unresolvedPromiseLength = arrOffPromise.length;
    let resolvedArr = [];
    if (unresolvedPromiseLength === 0) {
      resolve(resolvedArr);
      return;
    }

    arrOffPromise.forEach(async (promise) => {
      try {
        let value = await promise;
        resolvedArr.push(value);
        unresolvedPromiseLength--;
        if(unresolvedPromiseLength==0){

          resolve(resolvedArr);
        }
      } catch (error) {
        return error;
      }
    });
  });
};

const p1=100;
const p2=200;
const p3= new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject(1000)
  },100)
})

Promise.myPromiseAll([p1,p2,p3])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))





// *********************************************************

14. *************************custom promise


// function promSetTimout(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve("Hey then")
//         }, delay)
//     })
// }


// promSetTimout(1000).then((data)=>{console.log(data)})
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";
// function constructor 
function CustomPromise(executorFn) {
    //    1. add required properties and methods
    // promise does not expose these properties  
    let state = PENDING;
    let value = undefined;
    let scbArr = [];
    let fcbArr = [];
    // it will be attached to your object
    // 2 attach resolve and reject
    const resolve = (value) => {
        if (state != PENDING) return;
        state = RESOLVED;
        value = value;
        // scb
        scbArr.forEach((cbs) => {
            cbs(value)
        })
    }
    const reject = (err) => {
        if (state != PENDING) return;
        state = REJECTED;
        value = err;
        // fcb
        fcbArr.forEach((cbs) => {
            cbs(value)
        })
    }
    this.then = function (cb) {
        if (state === RESOLVED) {
            cb(value);
        } else {
            scbArr.push(cb);
        }
    }
    this.catch = function (cb) {
        if (state === REJECTED) {
            cb(value);
        } else {
            fcbArr.push(cb);
        }
    }
    //  3. call the executor fn
    executorFn(resolve, reject);
}

const executorFn = (resolve, reject) => {
    //   cb based fn 
        resolve();
        reject();

}

// usage of your custom *****************
const myPromise = new CustomPromise(executorFn);

myPromise.then((data) => {
    console.log("I am the first then");
})



15. *************************debounce in js


// debounce in js

const input= document.querySelector("input");
const textVal= document.querySelector(".text_val");
const debouncedVal= document.querySelector(".debounced_val");


const getSearchItems=async(searchVal)=>{
  const result=await fetch(`https://dummyjson.com/products/search?q=${searchVal}`);
  const data=await result.json();
  console.log(data)
}


const debounce = (fn, delay = 1000) => {
  let timerId = null;
  return (...args) => {
      clearTimeout(timerId);
      console.log("17",args)
      timerId = setTimeout(() => fn(args), delay);
  };
};

const inputVal=debounce(getSearchItems)
input.addEventListener("input",((e)=>{
  inputVal(e.target.value)
 
}))