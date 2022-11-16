//Every variable should have types 
var username : string
username = "Datasirpi"

console.log(username);
document.getElementById('demo').innerHTML=username;

var age: number
age = 23
console.log(age);
document.getElementById('demo1').innerHTML= `${age}`;


var winning : boolean
winning = true
console.log(winning);
document.getElementById('demo2').innerHTML= winning;

let myVar: any =123
console.log(myVar);
document.getElementById('demo3').innerHTML= `${myVar}`;


let booleanNumTuple: [boolean, number] = [false, 123]
console.log(booleanNumTuple);
document.getElementById('demo4').innerHTML= `${booleanNumTuple}`;


let myVoid: void
console.log(myVoid);
document.getElementById('demo5').innerHTML= myVoid;



//use user-defined types

//Array
let series = [1, 2, 3];
let doubleIt = series.map(e => e* 2);
console.log(doubleIt);
document.getElementById('demo6').innerHTML= doubleIt;


//Interface
interface Song {
    artistName: string;
  };
  
  interface Song {
    songName: string;
  };
  
  const output: Song = {
    artistName: "Freddie",
    songName: "The Chain"
  };
  console.log(output);
//   document.getElementById('demo7').innerHTML = `${output}`;
document.getElementById('demo7').innerHTML += output;

  //class
  class Point {
    x = 20;
    y = 30;
  }
  const pt = new Point();
  console.log(`${pt.x}, ${pt.y}`);
  document.getElementById('demo8').innerHTML = `${pt.x}, ${pt.y}`;


  //union
function myFunction(a: number | string,b : number | string  ){

    if( typeof a === "number"   &&  typeof  b === "number"){
        return a + b
    }
    else
    {
        return a.toString() + b.toString();
    }
}
console.log(myFunction (20,40));
console.log(myFunction ("Prabu","Siddhik"));
document.getElementById('demo9').innerHTML = myFunction (20,40);
document.getElementById('dem9').innerHTML = myFunction ("Prabu","Siddhik");




  //enum

  enum DayOfWeek {Mon, Tue, wed, Thurs, Fri, Sat, Sun}

  let dayOfWeek: number = DayOfWeek.Sat;

  console.log(dayOfWeek);
  document.getElementById('demo10').innerHTML = dayOfWeek;

  
  //tuple
  var a = [10, "hello"];
  var b = a[0], c = a[1];
  console.log(b);
  document.getElementById('demo11').innerHTML = b;

  console.log(c);
  document.getElementById('demo12').innerHTML = c;
