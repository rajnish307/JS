

// hoisting means raising at the top


console.log(anotherFunction)
console.log(myFunction())
console.log(arrowFunction)
// const a ;
var a=10;
console.log(a)
// console.log(b)
let b= 20;

console.log(window.myFunction)
function myFunction(){
    console.log("hello")
    // return true
}

var arrowFunction = () => {
    console.log("Get ready")
}

var anotherFunction = function(){
    console.log("Show stopped")
}