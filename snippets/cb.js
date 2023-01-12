const phoneNumber = '5555-555-555'
var oldTyre = "Old"
var newTyre = "New"
var tyreStatus = `Car has ${oldTyre} tyre`
const stepneyChange = (oldTyre, newTyre, phone, cb, cb2, cb3, cb4) => {

  // do some work for replacing old tyre with the new one
  console.log("Gathering guys for the work assigned")
  tyreStatus = tyreStatus.replaceAll(oldTyre, newTyre)
  console.log(tyreStatus);

  // after we are done, lets call stephane to notify that he can come to pick his car
  cb(phone);
}

function cb(num){
  console.log(`calling stephane ${num}`)

}

stepneyChange(oldTyre, newTyre, phoneNumber,cb)

