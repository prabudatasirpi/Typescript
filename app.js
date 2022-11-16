//Every variable should have types 
var username;
username = "Datasirpi";
console.log(username);
document.getElementById('demo').innerHTML = username;
var age;
age = 23;
console.log(age);
document.getElementById('demo1').innerHTML = "".concat(age);
var winning;
winning = true;
console.log(winning);
document.getElementById('demo2').innerHTML = winning;
var myVar = 123;
console.log(myVar);
document.getElementById('demo3').innerHTML = "".concat(myVar);
var booleanNumTuple = [false, 123];
console.log(booleanNumTuple);
document.getElementById('demo4').innerHTML = "".concat(booleanNumTuple);
var myVoid;
console.log(myVoid);
document.getElementById('demo5').innerHTML = myVoid;
//use user-defined types
//Array
var series = [1, 2, 3];
var doubleIt = series.map(function (e) { return e * 2; });
console.log(doubleIt);
document.getElementById('demo6').innerHTML = doubleIt;
;
;
var output = {
    artistName: "Freddie",
    songName: "The Chain"
};
console.log(output);
//   document.getElementById('demo7').innerHTML = `${output}`;
document.getElementById('demo7').innerHTML += output;
//class
var Point = /** @class */ (function () {
    function Point() {
        this.x = 20;
        this.y = 30;
    }
    return Point;
}());
var pt = new Point();
console.log("".concat(pt.x, ", ").concat(pt.y));
document.getElementById('demo8').innerHTML = "".concat(pt.x, ", ").concat(pt.y);
//union
function myFunction(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(myFunction(20, 40));
console.log(myFunction("Prabu", "Siddhik"));
document.getElementById('demo9').innerHTML = myFunction(20, 40);
document.getElementById('dem9').innerHTML = myFunction("Prabu", "Siddhik");
//enum
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Mon"] = 0] = "Mon";
    DayOfWeek[DayOfWeek["Tue"] = 1] = "Tue";
    DayOfWeek[DayOfWeek["wed"] = 2] = "wed";
    DayOfWeek[DayOfWeek["Thurs"] = 3] = "Thurs";
    DayOfWeek[DayOfWeek["Fri"] = 4] = "Fri";
    DayOfWeek[DayOfWeek["Sat"] = 5] = "Sat";
    DayOfWeek[DayOfWeek["Sun"] = 6] = "Sun";
})(DayOfWeek || (DayOfWeek = {}));
var dayOfWeek = DayOfWeek.Sat;
console.log(dayOfWeek);
document.getElementById('demo10').innerHTML = dayOfWeek;
//tuple
var a = [10, "hello"];
var b = a[0], c = a[1];
console.log(b);
document.getElementById('demo11').innerHTML = b;
console.log(c);
document.getElementById('demo12').innerHTML = c;
