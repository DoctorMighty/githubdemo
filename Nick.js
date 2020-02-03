var goOutside;
var weather = "bad";

if(weather === "nice"){
    goOutside = true;
} else if (weather === "okay") {
    goOutside = true;
} else {
    goOutside = false;
}

if (goOutside) {
    console.log("we are going outside");
} else {
    console.log("stay inside");
}



// getting to the bar

var age;
var haveId;
var haveDriver;
var isSad = false;

age = 2020 - 1995; 
haveId = true; 
if(!isSad){
    haveDriver = true;
} else {
    haveDriver = false; 
}

if(age >= 21){
    // keep going
    if(haveId){
        if(haveDriver){
            console.log("yay go to bar");
        } else {
            console.log("mae friends");
        }
    } else {
        console.log("go get an id")
    }
} else {
    console.log("too young, so sad");
}

if( age > 21 && haveId && haveDriver){
    console.log("go");
} else {
    console.log("no");
}

// video games
var likeGames = true;
var haveFriends = false;
var irl = true;

if(!likeGames){
    if(haveFriends){
        if(irl){
            console.log("wii");
        } else {
            console.log("xbox");
        }
    } else {
        console.log("playstation");
    }
} else {
    console.log("buy a pc");
}

// Whats for lunch
var haveMoney ="Yep";
var fastFood = "Miss me with that";
var noMoney = "That Sucks";
var Type = "Burger";
var Restaurant = "BestNTown" ;
 
// Have some shots
var goOutside;
var weather = "alright";

if(weather === "bad"){
    goOutside = false;
} else if (weather === "okay") {
    goOutside = true;
} else {
    goOutside = false;
    if(weather === "good"){
        goOutside = true;
    }
}

if (goOutside) {
    console.log("we are going outside");
} else {
    console.log("stay inside");
}

//conditional//
a = 2
x = 15
y =20
console.log(a)
 a += 5;
 console.log(a)
 a *= 2;
 console.log(a)
 a %= 3;
 console.log(a)
/* maybe 4 */ 
 a %= 2;
 console.log(a)
/* yes and no. Computer math throws me off */
if (a %2 == 0) {
console.log("0")
}
else{
console.log("Ya dun goofed")
} 
 if (x > 10 && a == 2){
    console.log("Hey");
 }
 else{console.log("Nope.")
 }
 if (a < x){
     console.log("It's too low.")
 }
  if(a != 2){
      console.log("Seems legit.")
  }
  if(a > y){
      console.log("This is fine.");
  }
  else{console.log("That don't add up.")}

//loop 
var a=1;
var i=1;
var e=1;

for(a = 0; a<10; a++){
    console.log(a);
    a++;
}

while(i<=50){
    console.log(i);
    i+=2
}

while(e<=100){
    if(e % 15 == 0)
        console.log("FizzBuzz");
    else if(e % 3 === 0)
        console.log("Fizz")
    else if (e % 5 == 0)
        console.log("Buzz");
        else
        console.log(e)
    e++;
}
 
//function

function Test(){
    var Hello ="Hello my name is William.";
    console.log(Hello);}
Test();

function add(one, two){
    return one + two;
}
function mult(three,four){
    return c * d;
}

function myFun(start,finsh){
    for (var n = start; n <= end; i ++) {
        console.log(i);
    }
}

//math
    var Random = Math.floor((Math.random() * 10) +1);
    function RandomCheck(){
        var x =document.getElementById('userInput').value;
        if(x == Random){
            console.log("You did it"+ x);
        } else{
            console.log("Try again bud" + Random)
        }
    }