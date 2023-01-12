/**
 * Set timeout example
 * setTimeout(function, milliseconds, param1, param2, .....)
 */


function egSetTimeout() {
    setTimeout(scheduleTask, 3000);
    
    function scheduleTask() {
        console.log(" ✔ Task scheduled after specific duration ✔")
    }

}
// egSetTimeout()

/**
 * Set interval example
 * setInterval(function, milliseconds, param1, param2, .....)
 */
function egSetTimeinterval(time) {

    var doorVisitCount = 0
    setInterval(checkPizza, time);

    function checkPizza() {
        doorVisitCount++;
        console.log(`Door visit ${doorVisitCount}, yet pizza not delivered 😥 `)
    }

}
// egSetTimeinterval(2000)  