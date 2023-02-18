const John = "14";

const Jan = "15";
const Jim = "11";
const Juan = "18";
const Jenny = "23";
const combined = John + Jan + Jim + Juan + Jenny;
console.log(combined);

function myFunction() {
  let age = document.getElementById("age").value;
  let voteable = age < 18 ? "Too young" : "Old enough";
  document.getElementById("demo").innerHTML = voteable + " to drive.";
}

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

let Text = "";
for (let x = 2; x < 8; x++) {
  Text += x + " days has passed" + "<br>";
}
document.getElementById("demo2").innerHTML = Text;

//for loop

const people = ["Rose", "Savannah", "Gabe", "Ferb"];

let i = 0;
let text = "";
while (people[i]) {
  text += people[i] + "<br>";
  i++;
}

document.getElementById("demo4").innerHTML = text;

// while loop

var r = document.querySelector(":root");

function myFunction_get() {
  var rs = getComputedStyle(r);

  alert("The value of --blue is: " + rs.getPropertyValue("--blue"));
}

function myFunction_set() {
  r.style.setProperty("--blue", "lightblue");
}
