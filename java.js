const John = "14";

const Jan = "15";
const Jim = "11";
const Juan = "18";
const Jenny = "23";
const combined = John + Jan + Jim + Juan + Jenny;
console.log(combined);

const cities = ["New York", "Dallas", "Washington", "Seattle"];
let flen = cities.length;

let text = "<ul>";
for (let i = 0; i < flen; i++) {
  text += "<li>" + cities[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;
//Array

const array1 = ["You", "Get"];
const array2 = ["What", "You", "Settle"];
const array3 = ["For"];

const myChildren = array1.concat(array2, array3);

document.getElementById("demo3").innerHTML = myChildren;
//Array Method

const car = { type: "Toyota", model: "4Runner", color: "black", year: "2023" };

document.getElementById("demo2").innerHTML =
  "The car type is " + car.type + " " + car.model + ", released in " + car.year;
//Object

const person = {
  firstName: "Jose",
  lastName: "Pineda",
  id: 5567,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

document.getElementById("demo4").innerHTML = person.fullName();
//Object Method

function myFunction_get() {
  var rs = getComputedStyle(r);

  alert("The value of --blue is: " + rs.getPropertyValue("--blue"));
}

function myFunction_set() {
  r.style.setProperty("--blue", "lightblue");
}
