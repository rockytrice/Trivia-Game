// global variables
// variables for correct and wrong answers


// testing purposes
console.log("hello");

// variable that holds the initial starting point for the timer
var count = 60;
// clock counts 
var counter = setInterval(timer, 1000);

var clockRunning = false;


// timer function
function timer() {
    $("#display-timer").text(count);
    count--;
    if (count === 0) {
        clearInterval(counter);

    }


}

var correct = 0;
$("#correct-answer").text(correct);
var incorrect = 0;
$("#incorrect-answer").text(incorrect);
var unanswered = $("#unanswered").text(unanswered);

$(document).ready(function () {



    

    $("#start-btn").on("click", function(){
        $("#trivia-quiz").show();
        $("#start-game").hide();
        console.log("clicked");
    })

    // this is the onlick fuction
    // for the form
    $("#submition").on("click", function (event) {
        event.preventDefault();
        console.log("this button has been click");
        var answer1 = $("input[name=Question1]:checked").val();
        var answer2 = $("input[name=Question2]:checked").val();
        var answer3 = $("input[name=Question3]:checked").val();
        var answer4 = $("input[name=Question4]:checked").val();
        var answer5 = $("input[name=Question5]:checked").val();
        var answer6 = $("input[name=Question6]:checked").val();

console.log("answer1 " + answer1);
        // checking if answers are correct/or incorrect
        if ("correct" === answer1) {
            console.log("you are correct");
            correct++;
        }else {
            
        }
        if ("correct" === answer2) {
            console.log("you are correct");
            correct++;
        }
        if ("correct" === answer2) {
            console.log("you are correct");
            correct++;
        }
        if ("correct" === answer3) {
            console.log("you are correct");
            correct++;
        }
        if ("correct" === answer4) {
            console.log("you are correct");
            correct++;
        }
        if ("correct" === answer5) {
            console.log("you are correct");
            correct++;
        }


        

    });
});
// on click of start button this should start the quiz
