// // Promise 
// //      is an OBJECT representing 
// //              eventual completion / failure of an asynchronous operation


// // before Promises, things used to be like below



// /**
//  * 
//  * Example 1 for asynchronous operation
//  */

// // create a promise
// let promise = new Promise((resolve, reject) => {
//     // simulate a asynchronous operation (like a network request)
//     setTimeout(() => {
//         // if the operation is successful, call the resolve function
//         // with the result of the operation
//         resolve('Asynchronous operation successful');
//     }, 1000);
// });

// // use the promise
// // promise.then((result) => {
// //     // this function will be called once the promise is resolved
// //     // with the result of the operation
// //     console.log(result); // 'the operation was successful'
// // });


// /**
//  * Basic promise example 2
//  */

// function returnNew() {
//     // console.log("hello")
//     return new Promise((resolve, reject) => {
//         // setTimeout(()=>{
//         //     console.log("hello");
//         //     resolve(true);
//         // },20);
//         fetch("https://jsonplaceholder.typicode.com/todos").
//             then(data => data.json()).
//             then(resp => {
//                 resp.map(todo => {
//                     // console.log(todo.title)
//                     resolve("hello")
//                 })
//             }).catch(error => reject(error))
//     }).then(() => {
//         console.log("Data fetched");
//     }).catch(() => {
//         console.log("Some error!");
//     })
// }
// // returnNew()




// /**
//  * Promise.all()  - example
//  */

// let promise1 = new Promise((resolve) => setTimeout(resolve, 100, "eating fries"));
// let promise2 = new Promise((resolve) => setTimeout(resolve, 200, "drinking coke"));
// let promise3 = new Promise((resolve) => setTimeout(resolve, 2000, "ice cream"));
// let promise4 = new Promise((pass, fail) => setTimeout(fail, 600, "not well"));

// // Promise.all([promise1, promise2, promise3, promise4]).then((result) => {
// //     console.log(result);
// // }).catch((error)=>console.log(error))


// /**
//  * Promise.any()
//  */

// let promise6 = new Promise((resolve) => setTimeout(resolve, 10, "drinking coke"));
// let promise5 = new Promise((resolve) => setTimeout(resolve, 10, "eating fries"));
// // let promise7 = new Promise((resolve) => setTimeout(reject, 10, "ice cream"));
// // let promise8 = new Promise((resolve, reject) => setTimeout(reject, 10, "not well"));

// //  Promise.any([promise6, promise5, promise7,promise8]).then((result) => {
// //      console.log(result);
// //  }).catch((error)=>console.log(error))


// /**
//  * Promise chaining
//  */

// let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Lets start")
//     }, 1000)
// })

// let secondPromise = (result) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result + " learning javascript")
//         }, 1000)
//     })
// }

// let thirdPromise = (result) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result + " on weekends")
//         }, 1000)
//     })
// }

// firstPromise
//     .then(secondPromise)
//     .then(thirdPromise)
//     .then(result => console.log(result));


function questionThree() {
    let a = 1

    setTimeout(() => {
        console.log("A", a) //A
        a = 2
    }, 0)

    const p = new Promise(resolve => {
        console.log("B", a) // B
        a = 3
        resolve();
    })

    p.then(() => console.log("C", a)) // C

    console.log("D", a) // D
}

questionThree()
