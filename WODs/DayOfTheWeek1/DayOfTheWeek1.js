var day = 31;
var month = "Mar";
var year = 2001;

step1 = year % 10;
step2 = parseInt(step1 / 4);
step3 = step1 + step2;

if (month == "Jan") {
    step4 = 1
}
else if (month == "Feb") {
    step4 = 3
}
else if (month == "Mar") {
    step4 = 3
}
else if (month == "Apr") {
    step4 = 6
}
else if (month == "May") {
    step4 = 1
}
else if (month == "Jun") {
    step4 = 4
}
else if (month == "Jul") {
    step4 = 6
}
else if (month == "Aug") {
    step4 = 2
}
else if (month == "Sep") {
    step4 = 5
}
else if (month == "Oct") {
    step4 = 0
}
else if (month == "Nov") {
    step4 = 3
}
else {
    (month == "Dec")
    step4 = 5
}

step6 = step3 + step4;
step7 = step6 + day;
step8 = (typeof step5 !== 'undefined') ? step5 : step7;

var isLeapYear = ( (year % 4 == 0) && (year % 100 != 0) && (year % 400 == 0) );

if (parseInt(year / 100)==19) {
    if (isLeapYear) {
        if (month == "Jan" || month == "Feb") {
            step9 = step8 - 1;
        }
    }
}
else {
    if (isLeapYear) {
        if (month == "Jan" || month == "Feb") {
            step9 = step8 - 2;
        }
        else {
            step9 = step8 - 1;
        }
    }
    else {
        step9 = step8 - 1;
    }
}

if (step9 > 7) {
    step10 = step9 % 7;
}

if (step10 == 0) {
    var dow = "Sunday";
}
else if (step10 == 1) {
    var dow = "Monday";
}
else if (step10 == 2) {
    var dow = "Tuesday";
}
else if (step10 == 3) {
    var dow = "Wednesday";
}
else if (step10 == 4) {
    var dow = "Thursday";
}
else if (step10 == 5) {
    var dow = "Friday";
}
else { (step10 == 6) 
    var dow = "Saturday";
}

console.log(month);
console.log(day);
console.log(year);
console.log(dow);