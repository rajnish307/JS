
/**
 * Different types of errors you can face
 * 1. ReferenceError
 * 2. SyntaxError
 * 3. TypeError
 */

function Example1() {
    // console.log("Who am I here at this point of execution? ", a)
    console.log(a)
    const a = "10"
    // a = 20;
    // let a="29";
    // let b = '10';

    a=10;

    // if(true) let m=19;  // not allowed
}

Example4()
/**
 * Try to understand the scope of let and const in this eg
 */

function Example2() {
    var x = 1; //global scope - id - 123

    if (x === 1) {
        let x = 2; // block scope  - id -456

        console.log(x);
    }

    console.log(x);
}


/**
 * Example for TDZ - temporal dead zone
 */
function Example3() {
     // TDZ starts at beginning of scope
        console.log(bar); // undefined
        console.log(foo); // ReferenceError
        var bar = 1;
        let foo = 2; // End of TDZ (for foo)
    
}



/**
 * const in objects and arrays
 */

function Example4() {
    
    const myBio = { hobby: "singing" };
    // myBio = {...myBio, country:"India"}; // not allowed 
    
    myBio.foodie= true;  // allowed

    console.log(myBio);
}
