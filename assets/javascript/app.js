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
        // when the timer reaches zero the trivia box will dissapear along with the timer but the end screen will appear
        $("#trivia-box").hide();
        $("#end-screen").show();
        $("#display-timer").hide();

    }




}
// variables for correct and wrong answers

var correct = 0;
$("#correct-answer").text(correct);
var incorrect = 0;
$("#incorrect-answer").text(incorrect);
var unanswered = 0;
$("#unanswered-answer").text(unanswered);

$(document).ready(function () {
    // star wars theme music for the quiz...
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/star-wars-theme-song.mp3");

    var audioElement2 = document.createElement("audio2");
    audioElement2.setAttribute("src", "assets/taught.mp3");

    // start button function which starts the quiz
    $("#start-btn").on("click", function () {
        // shows the triva questions and timer but hides the start button
        $("#trivia-box").show();
        $("#start-screen").hide();
        $("#display-timer").show();
        // when the start button is clicked the music begins to play
        audioElement.play();
        // test log 
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

        // pause the theme music when the submit button is pressed
        audioElement.pause();

        // test log/ working now... takes the check value and checks it against the if statements
        console.log("this button has been click");
        var answer1 = $("input[name=Question1]:checked").val();
        var answer2 = $("input[name=Question2]:checked").val();
        var answer3 = $("input[name=Question3]:checked").val();
        var answer4 = $("input[name=Question4]:checked").val();
        var answer5 = $("input[name=Question5]:checked").val();
        var answer6 = $("input[name=Question6]:checked").val();


        // checking if answers are correct/incorrect/ or unchecked
        if ("correct" === answer1) {

            console.log("you are correct");
            correct++;
            $("#correct-answer").text(correct);

            // checks if incorrect and logs to the console as well as writes to the html
        } else if ("incorrect" === answer1) {
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
            // checks if incorrect and logs to the console as well as writes to the html

        } else if ("incorrect" === answer2) {

            console.log("You are incorrect");
            incorrect++;
            $("#incorrect-answer").text(incorrect);

            // if question is left unchecked the variable and placemaker and the end page will add one to  unanswered talley
        } else if (undefined === answer2) {
            unanswered++;
            $("#unanswered-answer").text(unanswered);
            console.log("unanswered");
        }

        if ("correct" === answer3) {

            console.log("you are correct");
            correct++;
            $("#correct-answer").text(correct);

            // checks if incorrect and logs to the console as well as writes to the html
        } else if ("incorrect" === answer3) {

            console.log("You are incorrect");
            incorrect++;
            $("#incorrect-answer").text(incorrect);

            // if question is left unchecked the variable and placemaker and the end page will add one to  unanswered talley
        } else if (undefined === answer3) {
            unanswered++;
            $("#unanswered-answer").text(unanswered);
            console.log("unanswered");
        }

        if ("correct" === answer4) {
            console.log("you are correct");
            correct++;
            $("#correct-answer").text(correct);

            // checks if incorrect and logs to the console as well as writes to the html
        } else if ("incorrect" === answer4) {
            console.log("You are incorrect");
            incorrect++;
            $("#incorrect-answer").text(incorrect);

            // if question is left unchecked the variable and placemaker and the end page will add one to  unanswered talley
        } else if (undefined === answer4) {
            unanswered++;
            $("#unanswered-answer").text(unanswered);
            console.log("unanswered");
        }


        if ("correct" === answer5) {

            console.log("you are correct");
            correct++;
            $("#correct-answer").text(correct);

        } else if ("incorrect" === answer5) {
            console.log("You are incorrect");
            incorrect++;
            $("#incorrect-answer").text(incorrect);

            // if question is left unchecked the variable and placemaker and the end page will add one to  unanswered talley
        } else if (undefined === answer5) {
            unanswered++;
            $("#unanswered-answer").text(unanswered);
            console.log("unanswered");
        }

        if ("correct" === answer6) {
            console.log("you are correct");
            correct++;
            $("#correct-answer").text(correct);

        } else if ("incorrect" === answer6) {
            console.log("You are incorrect");
            incorrect++;
            $("#incorrect-answer").text(incorrect);

            // if question is left unchecked the variable and placemaker and the end page will add one to  unanswered talley
        } else if (undefined === answer6) {
            unanswered++;
            $("#unanswered-answer").text(unanswered);
            console.log("unanswered");
        }




    });
});