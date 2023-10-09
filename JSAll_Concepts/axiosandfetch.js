const url="https://jsonplaceholder.typicode.com/todos/1";

const callApi=async()=>{
  const data=  await fetch(url).then((res)=>res.json()).then((res)=>res)
  console.log(data)
}
callApi()