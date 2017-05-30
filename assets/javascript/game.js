var computerGuess, randomNumber1, randomNumber2, randomNumber3, randomNumber4;
var userGuess = 0; //where we will add up the user choices and compare to the computer guessed number
var gemValue = 0; 
var wins = 0;
var losses = 0;
var overTheNumber = false;
var gameOver = false;

// Functions

function assignRandomNumbers() {   //assign random numbers to the crystals
    randomNumber1 = Math.floor((Math.random() * 12) + 1);
    console.log(randomNumber1);
    $("#gem1").val(randomNumber1);
    randomNumber2 = Math.floor((Math.random() * 12) + 1);
    console.log(randomNumber2);
    $("#gem2").val(randomNumber2);
    randomNumber3 = Math.floor((Math.random() * 12) + 1);
    console.log(randomNumber3);
    $("#gem3").val(randomNumber3);
    randomNumber4 = Math.floor((Math.random() * 12) + 1);
    console.log(randomNumber4);
    $("#gem4").val(randomNumber4);

}

function getRandomNumber(min, max) { //function that will generate a random number between the two passed numbers
  return computerGuess = Math.floor(Math.random() * (max - min)) + min;
  console.log(computerGuess);

}


function checkNumber(userGuess){
        console.log ("inside checkNumber function");

        if (userGuess === computerGuess){
            wins++;
            overTheNumber = true;
            $("#userScore").html(userGuess);
            $("#totalWins").html("Wins: " + wins);
            console.log("you won!");
            alert("You won!!!");
        }
        else if (userGuess > computerGuess){
                losses++;
                overTheNumber = true;
                $("#userScore").html(userGuess);
                $("#totalLosses").html("Losses: " + losses);
                $("#messages").html("Number to get = " + computerGuess + " Your number = " + userGuess);
                console.log("you lost!");
                alert("You Lost!!!");
             }   
             else {
                console.log("keep playing!");
             }

        
}

function reset(){
    userGuess = 0;
    userScore = 0;
    $("#userScore").html("0");
    overTheNumber = false;
    $("#messages").html("");
    
}

// Start the game

$(document).ready(function(){ //make sure the html is loaded before the user clicks to start the game

    $("#startGame").click(function(){
	getRandomNumber(19, 120); // call the function the get the random number the user will try to match
	console.log(computerGuess);
    console.log(overTheNumber);
	$("#yourNumber").html(computerGuess);//write the number to be guessed on the page
    $("#userScore").html(userGuess);
    assignRandomNumbers(); //call the function to assign values to the crystals
    reset(); 
    });

    $("#gem1").click(function(){
    if (!overTheNumber) {
        console.log(overTheNumber);
        console.log("you are still in the game ...");
        console.log("gem1 Clicked - Value = " + randomNumber1 ); 
        userGuess += randomNumber1;
        $("#userScore").html(userGuess);
        console.log(userGuess);
        checkNumber(userGuess);
        }
    });

    $("#gem2").click(function(){
        if (!overTheNumber) {
        console.log(overTheNumber);
        console.log("you are still in the game ...");
        console.log("gem2 Clicked - Value = " + randomNumber2);
        userGuess += randomNumber2;
        $("#userScore").html(userGuess);
        console.log(userGuess);
        checkNumber(userGuess);
        }
    });
 
     $("#gem3").click(function(){
        if (!overTheNumber) {
        console.log(overTheNumber);
        console.log("you are still in the game ...");
        console.log("gem3 Clicked - Value = " + randomNumber3);
        userGuess += randomNumber3;
        $("#userScore").html(userGuess);
        console.log(userGuess);
        checkNumber(userGuess);
        }
    });

         $("#gem4").click(function(){
        if (!overTheNumber) {
        console.log(overTheNumber);
        console.log("you are still in the game ...");
        console.log("gem4 Clicked - Value = " + randomNumber4);
        userGuess += randomNumber4;
        $("#userScore").html(userGuess);
        console.log(userGuess);
        checkNumber(userGuess);
         }
    });

});







