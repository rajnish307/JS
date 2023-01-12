
/**
 * Example 1 - basic
 */

function getDay() {
    const day = 'Sunday';
    function displayDay() {
        console.log(day);
    }
    return displayDay;
}

const myDay = getDay();
// myDay();

/**
 * Function with its lexical scope (surroundings)
 */

function country() {
    var countryName = "India"
    function state() {
        var stateName = "Maharashtra"
        console.log(`${stateName} is in ${countryName}`)
        function city() {
            var cityName = "Mumbai"
            console.log(`${cityName} is in ${stateName}, which is in ${countryName}`)
        }
        //stateName = "delhi"
        city();
    }
    state();
}


/**
 * setTimeout as a closure
 */

function logger() {
    const logMessage = 'Key Press limit reached!';
    for (var i = 1; i < 5; i++) {
       
            setTimeout(function callback() {
                console.log(i);
                
            }, 2000);
        }
        console.log(logMessage)   
        //callback() is a closure because it captures the variable "logMessage".
    }
    
    

    

// logger()

