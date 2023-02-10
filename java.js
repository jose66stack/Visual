const John = "14";

const Jan = "15";
const Jim = "11";
const Juan = "18";
const Jenny = "23";
const combined = John + Jan + Jim + Juan + Jenny;
console.log(combined);

// concatenated string variable

function myFunction() {
  let age = document.getElementById("age").value;
  let voteable = age < 18 ? "Too young" : "Old enough";
  document.getElementById("demo").innerHTML = voteable + " to drive.";
}
// if conditional statement

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
document.getElementById("demo3").innerHTML = "Today is " + day;

//switch statement

let str = "Sunday, Monday, Thursday";
document.getElementById("demo2").innerHTML = str.substr(7);

//string method

document.getElementById("demo4").innerHTML =
  Number.isSafeInteger(21) +
  " and " +
  Number.isSafeInteger(12345678901234567890);

//number method
