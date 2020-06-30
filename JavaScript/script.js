//alert("Hello World !");

//document.write("Hello World")

//console.log("Hello world");
//console.info("hello world");

//var bankAccountForMe = 3;
//var y = 5;
//
//var z = bankAccountForMe + y;
//document.getElementById("test").innerHTML = "Hello" + z;

// var fruits = 100, price = 400;
// var companyName = fruits + price;

//var score = 80;
//score += 5;
//score++;
////fruits = 50;
//
//document.getElementById("test").innerHTML = "Hello" + score;
//document.getElementById("test").innerHTML = "Hello" + typeof(score);

//var temp = null;
//
//var myNumber = 50; //Number
//
//var myString = "Igneous"; //String
//
//var harley = ["street750", "fatboy", "streetbob"]; //Array
//
//var bikeObject = {nameOfBike: "street750", ccOfBike: 750}; //Object
//
//// Boolean data type
//var inActive = true;
//var inComplete = false;
//
//var someString = "";

//
//var greeting = "";
//
//var highScore = 453;
//var myScore = "453";

//if(highScore > myScore)
//    greeting = "OOPs ! You just miss the high Score. !"
//else if(highScore === myScore)
//    greeting = "Hurry ! you just match the high score."
//else
//    greeting = "Hurry ! you just got the high score."

//switch(new Date().getDay()){
//    case 0:
//        greeting = " I don't move on Sunday";
//        break;
//    case 1:
//        greeting = "Monday : Go to work";
//        break;
//    case 2:
//        greeting = "Tuesday : chill out with family";
//        break;
//    case 3:
//        greeting = "Wednesday : Focus on learning.";
//        break;
//    case 4:
//        greeting = "Thursday : Analyze on Outcome";
//        break;
//    case 5:
//        greeting = "Friday : Last day of work";
//        break;
//    case 6:
//        greeting = "Saturday : Party Night";
//        break;
//    default:
//        greeting = "Hey Hey ! what are you sending me"
//        break;
//}

//loop on harley
//var harley = ["street750", "StreetBoB", "FatBoy", "StreetGlide", "Iron883"];
//
//var i;
//
//// Method 1
////for (i = 0; i < harley.length; i++) {
////    greeting += harley[i] + "<br>";
////}
//
//// Method 2
//for (i in harley) {
//    greeting += harley[i] + "<br>";
//}
//    

//function foo(num1, num2, num3) {
//    return num1*num2*num3 
//}

// Object and Usage

//var harley = {firstName: "Street",
//              secondName: "750",
//              CC: "850cc",
//              weight: "320",
//              color: "Black",
//              fullname: function(){
//                  return this.firstName + "-" + this.secondName;
//              }
//             }

//Event

//function showDate() {
//    document.getElementById("test").innerHTML = Date()
//}



//document.getElementById("test").innerHTML = harley.fullname();
//"use strict";
//var myvar = 10;
//
//document.getElementById("test").innerHTML = myvar;

//var myvar = 8;
//
//var some = 9;
//
//
//document.getElementById("test").innerHTML = "myvar is " + myvar + "and some is " + some;


//var str = "apple Apple APPle APPLE AppLE AppLe aPPLE"
//var txt = str.replace(/([A-Z])\w+/gi,'google')
//
//
//function increaseHighScore(currentScore) {
//    var newHighScore = 2 + currentScore;
//    return newHighScore;
//}
//
//console.log(increaseHighScore(4));
//
//var newHighScore = function (currentScore) {
//    return(
//    console.log(this),
//    console.log(arguments)
//    )
//}(2);
//document.getElementById("test").innerHTML = newHighScore(10);

//var harley = {
//    
//    name : "Street750",
//    color : "Black",
//    
//    getBudgetForCustomStuff : function(a) {
//        return("You need to lower budget", console.log(this.name))
//    },
//    
//    shoutOuts : [
//        {kevin : "A cool black monster with 750cc"},
//        {Sam : "Heavy Bike with full power"}
//    ]
//};
//
//harley.getBudgetForCustomStuff(8);
//
//document.getElementById("test").innerHTML = harley.shoutOuts;
//

// Prototyping
//var walk = function(){
//    return("He is able to walk")
//}
//
//
////Object creating using function
//
//var SuperHero = function(){
//    var power, villian;
//}
//
//SuperHero.prototype.walk = walk;
//peterParker = new SuperHero;
//peterParker.power = 'AirSwing';
//peterParker.villian = 'Green Goblin';
//peterParker.walk();
//
//console.log(peterParker.walk());
//
//clark = new SuperHero;
//clark.power = 'fly';
//clark.villian = 'lex Luthor';
//
//console.log(clark.villian);
//
//var doSomething = function(work){
//    console.log(work);
//    console.log(this.benchPress);
//}
//
//doSomething("PushUps");
//var exercise = {benchPress : "4 Sets", squats : "2 sets"};
//doSomething.call(exercise, exercise.squats);
//doSomething.apply(exercise, ['crunches']);

// closure
//
//var counter = ( function() {
//    var addOne = 0;
//    return function(){ return addOne += 1}
//})();
//
//console.log(counter());




//var multiplier = function() {
//    var result = 1;
//    for(var i = arguments.length - 1; i >= 0; i--) {
//        result *= arguments[i];
//    }
//    return result;
//}
//
//console.log(multiplier(2, 5, 6, 7));

//var newList = document.createElement("li");
//newList.innerHTML = "I was addes by JS";
//
//
//document.getElementById("change").appendChild(newList);
//
//document.getElementById("test").innerHTML = "change by script"

function myFunction() {
    var x = document.forms["myForm"];
    var text = "";
    var i;
    
    for(i = 0; i < x.length; i++)
        text += x.elements[i].value + "<br>";
    document.getElementById("getValue").innerHTML = text;
    
    
    
}

