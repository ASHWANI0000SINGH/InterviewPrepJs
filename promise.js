// Promise is like asking something for future 
// 1. if everyting goes well promise is fulfilled
// 2. Otherwise promise is rejcted 
// 3. using then and catch we can handle both resolve and rejected request

const promise = new Promise((resolve, reject) => {
  if (false) {
    resolve("Promise is fullfilled");
  }
  reject("Promise rejected");
});

const callPromise = async() => {    
  const data =  await promise
  .then((res)=>res)
  .catch((error)=>error)
  console.log(data);
};
callPromise();
