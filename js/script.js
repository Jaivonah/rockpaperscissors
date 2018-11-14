// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("button").click(function() { 
    var userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
    var randomChoice = Math.random();
    
    if(randomChoice<.333){
        var computerChoice=" rock"
        $("#text").html(computerChoice);
    }
    else if(randomChoice<.666){
        var computerChoice=" paper"
        $("#text").html(computerChoice);
    }
   else if(randomChoice<.){
        var computerChoice=" rock"
        $("#text").html(computerChoice);
    }
});
 


var computerChoice = " "
var winner = " "
