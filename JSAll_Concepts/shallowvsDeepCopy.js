// objects copy

// 1. shallow copy
// const originalObj={name:"ashwani",age:26};
// const newObj={...originalObj};
// newObj.name="ashwani singh"
// console.log(originalObj,newObj)

//2. Deep copy
// deep copy we need when we have nested objects
const originalObj1={name:"ashwani",moreDetails:{designation:"software engineer",yearsOfExp:2}};
// const newObj1={...originalObj1};  not correct
const newObj1=JSON.parse(JSON.stringify(originalObj1))
newObj1.moreDetails.designation="senior software engineer"
newObj1.name="ashwani singh"
console.log(originalObj1,newObj1)
