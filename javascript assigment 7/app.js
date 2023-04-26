//        Q NO  1


// var num = +prompt("Enter a positive integer:");

// document.write("Number: " + num + "<br>");

// var rounded_num = Math.round(num);
// document.write("Round off value: " + rounded_num + "<br>");

// var floor_num = Math.floor(num);
// document.write("Floor value: " + floor_num + "<br>");

// var ceil_num = Math.ceil(num);
// document.write("Ceil value: " + ceil_num + "<br>");


//        Q NO 2



// var num = +prompt("Enter a negative floating point number:");


// document.write("Number: " + num + "<br>");

// var rounded_num = Math.round(num);
// document.write("Round off value: " + rounded_num + "<br>");

// var floor_num = Math.floor(num);
// document.write("Floor value: " + floor_num + "<br>");

// var ceil_num = Math.ceil(num);
// document.write("Ceil value: " + ceil_num + "<br>");



//       Q NO 3


// var num = +prompt("enter a number");

// //   implementation a  absolute method
// var absoluteNum = Math.abs(num);
// document.write("The absolute value of " +  num  + " is " + absoluteNum);


//       Q NO 4


// var random_num = Math.floor(Math.random() * 6) + 1;

// document.write("The value of the dice roll is " + random_num);

//      Q NO 5


// generate random number between 0 and 1
// var random_num = +prompt("enter a number 0  or 1")
// var random_num = Math.random();

// // determine coin toss result
// var coin_toss = (random_num < 0.5) ? "Heads" : "Tails";

// // display result in browser
// document.write("Coin Toss Result: " + coin_toss);


// var num = prompt("head or tails");
// var random = Math.random();
// if(random > 0.5){
//     alert("heads")
// }
// else{
//     alert("tails")
// }


//     Q NO 6

// var random = Math.floor(Math.random() * 100 ) + 1 ;

// document.write("random number between 1 & 100 : " + random)


////     QNO 8

// var userInput = +prompt("enter a number in 1 to 10");
// var secretNum = Math.floor(Math.random() * 2) + 1;
// console.log(secretNum)
// var equalInput = (userInput == secretNum) ? "congratulations" : "ohh no Try Again";

// document.write("correct answer is " + secretNum)




function abc() {
    console.log(arguments[0])
    console.log(xyz)
    console.log(b)
}