// async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await response.json();
//     return data;
//   }

//   // To use the function, you can call it and then use the "then" method
//   // on the returned promise to handle the response data.
//   getData().then(data => {
//     console.log(data);
//   });

//   var data = fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.json())
//   // type(data) == promiseOBject

 
function setTimeoutClosure(){
// IIFE -- immediately invoked function expression
  for(var i = 0 ; i<3;i++){

    function name(x){
      setTimeout(()=>console.log(x), 3000)
    }(name(i))
    
  }
}

setTimeoutClosure()

function job(state) {
  return new Promise(function(resolve, reject) {
      if (state) {
          resolve('success');
      } else {
          reject('error');
      }
  });
}

let promise = job(true);

promise

.then(function(data) {
  console.log(data);

  return job(false);
})

.catch(function(error) {
  console.log(error);

  return 'Error caught';
})

.then(function(data) {
  console.log(data);

  return job(true);
})

.catch(function(error) {
  console.log(error);
});


var checkPromise = new Promise((resolve, reject) => {
  return Promise.reject(Error('Fail statement'))
})
checkPromise.catch(error => console.log(error.message))
checkPromise.catch(error => console.log(error.message))


//UnhandledPromiseRejectionWarning

var p = new Promise((resolve, reject) => {
  reject(Error('The Fails!'))
})
.catch(error => console.log(error))
.then(error => console.log(error))   


// ERROR AND UNDEFINED



Promise.resolve('Success!')
  .then(data => {
    data.toUpperCase()
  })
  .then(data => {
    console.log(data)
  })