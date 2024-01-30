"use strict";
const myAge = 10;
const myName = "Snader";
const adult = true;
const myHobbies = ["Coding", "Football", "Gaming"];
const myGender = 42;
var daysOfTheWeek;
(function (daysOfTheWeek) {
    daysOfTheWeek["MONDAY"] = "Monday";
    daysOfTheWeek["TUESDAY"] = "Tuesday";
    daysOfTheWeek["WEDNESDAY"] = "Wednesday";
    daysOfTheWeek["THURSDAY"] = "Thursday";
    daysOfTheWeek["FRIDAY"] = "Friday";
    daysOfTheWeek["SATURDAY"] = "Saturday";
    daysOfTheWeek["SUNDAY"] = "Sunday";
})(daysOfTheWeek || (daysOfTheWeek = {}));
