var day = 2;
var month = "Feb";
var year = 1999;
var step1 = year % 10;
var step2 = parseInt(step1 / 4);
var step3 = step2 + step1;
if (month == "Jan"){
    Step4 = 1;
    } else if(month == "Feb" || month == "Mar"){
        step4 = 3;
    } else if(month == "Apr"){
        step4 = 6;
    } else if(month == "May"){
        step4 = 1;
    } else if(month == "Jun"){
        step4 = 4;
    } else if(month == "Jul"){
        step4 = 6;
    } else if(month == "Aug"){
        step4 = 2;
    } else if(month == "Sep"){
        step4 = 5;
    } else if(month == "Oct"){
        step4 = 0;
    } else if(month == "Nov"){
        step4 = 3;
    } else {
        step4 =1;
    }

var step6 = step3 + step4;
var step7 = step6 + day;
var step8 = step7;
var isLeapYear = false;
var check = parseInt(year / 100);

if (isLeapYear == false && check == 20){
    var step9 = step8 - 1;
} else if (isLeapYear == true && check == 20) {
    if(month == "Jan" || month == "Feb"){
        var step9 = step8 -2;
    } else {
        var step9 = step8 - 1;
    }
} else if (isLeapYear == false && check == 19){
    var step9 = step8;
} else if(isLeapYear == true && check ==19){
    if(month == "Jan" || month == "Feb"){
        var step9 = step8 - 1;
    } else {
        var step9 = step8;
    }
}
if (step9 > 7){
    var step10 = step9 % 7;
} else{
    var step10 = step9;
}
if (step10 == 0){
    var dow = "Sunday";
} else if (step10 == 1) {
    var dow = "Monday";
} else if (step10 == 2) {
    var dow = "Tuesday";
} else if (step10 == 3) {
    var dow = "Wednesday";
} else if (step10 == 4) {
    var dow = "Thursday";
} else if (step10 == 5) {
    var dow = "Friday";
} else if(step6 == 6){
    var dow = "Saturday";
}



console.log(step1);
console.log(step2);
console.log(step3);
console.log(step4);
console.log(step6);
console.log(step7);
console.log(step8);
console.log(check);
console.log(step10);
console.log(dow);