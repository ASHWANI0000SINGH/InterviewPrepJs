//1. callback
//2.promise
//3.async await

// 1.callback is used for async task so that js can run its code synchronously
//2. and the rest is taken care by web browseer API which will send the result
// 3.In the form of callback
//4. It will execute after the main function

// eg
// While using fetch api we use callback . we use .then for response.json

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => res);

//   The code in the above example uses the FetchAPI
// to send a request for a list of dummy users to a fake JSON API.
//  Once the server returns a response, we run our first callback
//   function, which attempts to parse that response into JSON.

// 2. Async Await
// Same task can be hanled by using async await
// which eleminates .then chaininga and call backs 
async function getData() {
  let data = await fetch(url);
  data = await data.json();
  console.log(data);
}
