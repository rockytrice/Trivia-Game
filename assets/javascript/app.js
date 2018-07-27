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
        $("#trivia-box").hide();
        $("#end-screen").show();

    }


}

var correct = 0;
$("#correct-answer").text(correct);
var incorrect = 0;
$("#incorrect-answer").text(incorrect);
var unanswered = 0;
$("#unanswered-answer").text(unanswered);

$(document).ready(function () {





    $("#start-btn").on("click", function () {
        $("#trivia-box").show();
        $("#start-screen").hide();
        $("#display-timer").show();

        console.log("clicked");
        timer();
    })

    // this is the onlick fuction
    // for the form
    $("#submition").on("click", function (event) {
        event.preventDefault();
        $("#trivia-box").hide();
        $("#end-screen").show();
        $("#display-timer").hide();

        // test log
        console.log("this button has been click");
        var answer1 = $("input[name=Question1]:checked").val();
        var answer2 = $("input[name=Question2]:checked").val();
        var answer3 = $("input[name=Question3]:checked").val();
        var answer4 = $("input[name=Question4]:checked").val();
        var answer5 = $("input[name=Question5]:checked").val();
        var answer6 = $("input[name=Question6]:checked").val();


        // checking if answers are correct/or incorrect
        if ("correct" === answer1) {
            console.log("you are correct");
            correct++;
            $("#correct-answer").text(correct);
        } else if ("incorrect" === answer1){
            console.log("You are incorrect");
            incorrect++;
            $("#incorrect-answer").text(incorrect);
        }
        // if question is left unchecked the variable and placemaker and the end page will add one to  unanswered talley
       else if (undefined === answer1) {
            unanswered++;
            $("#unanswered-answer").text(unanswered);
            console.log("unanswered");
        }

        if ("correct" === answer2) {
            console.log("you are correct");
            correct++;
            $("#correct-answer").text(correct);
        } else {
            console.log("You are incorrect");
            incorrect++;
            $("#incorrect-answer").text(incorrect);

        }

        if ("correct" === answer3) {
            console.log("you are correct");
            correct++;
            $("#correct-answer").text(correct);
        } else {
            console.log("You are incorrect");
            incorrect++;
            $("#incorrect-answer").text(incorrect);

        }

        if ("correct" === answer4) {
            console.log("you are correct");
            correct++;
            $("#correct-answer").text(correct);
        } else {
            console.log("You are incorrect");
            incorrect++;
            $("#incorrect-answer").text(incorrect);

        }

        if ("correct" === answer5) {
            console.log("you are correct");
            correct++;
            $("#correct-answer").text(correct);
        } else {
            console.log("You are incorrect");
            incorrect++;
            $("#incorrect-answer").text(incorrect);

        }

        if ("correct" === answer6) {
            console.log("you are correct");
            correct++;
            $("#correct-answer").text(correct);
        } else {
            console.log("You are incorrect");
            incorrect++;
            $("#incorrect-answer").text(incorrect);

        }




    });
});
// on click of start button this should start the quiz