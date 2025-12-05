// console.log("hello welcome to mernstack internship");
//  setTimeout(()=>console.log("i am settimeout"),3000);
//   setInterval(()=>console.log("i am setinterval"),3000);
//  console.log("i am the last printing");
// let promis=new Promise((resolve,reject)=>{
//           let value=false;
//           if(value){
//                     resolve("success");
//           }
//           else{
//                     reject("failed");
//           }
// })

// promis
// .then(msg =>console.log(msg))
// .catch(err =>console.log(err))
// .finally(()=>console.log("done"));
//'https://fakestoreapi.com/products'

// async function getdata() {
//   try {
//     let response = await fetch("https://fakestoreapi.com/products");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("err:", error);
//   }
// }

// getdata();

console.log("1. Start"); // Call stack

// MICROTASK (VIP)
Promise.resolve().then(() => {
  console.log("4. Promise.then (Microtask)");

  Promise.resolve().then(() => {
    console.log("5. Inner Promise (Microtask)");
  });
});

// ASYNC (WEB API → MACROTASK QUEUE)
setTimeout(() => {
  console.log("7. setTimeout callback (Macrotask)");
}, 0);

// ASYNC FETCH (WEB API)
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(() => console.log("8. fetch.then (Microtask in modern browsers)"));



// ASYNC/AWAIT → Microtask
(async function () {
  console.log("3. async function start (Call Stack)");

  await null;
  console.log("6. async/await resolved (Microtask)");
})();

console.log("10. End");