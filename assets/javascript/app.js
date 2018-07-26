// variable for correct and wrong answers
var right = 0;
var wrong = 0;




var count = 60;

var counter = setInterval(timer, 1000);

function timer() {
    $("#display-timer").text(count);
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);

    }


}


// function run() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
// }

















$(document).ready(function () {










})




// does not seem to be working 
// this is the onlick fuction for the form
//     $("#submition").on("click", function () {
//         event.preventDefault();
//         var answer1 = $("input[name=question1]:checked").val();
//         var answer2 = $("input[name=question2]:checked").val();
//         var answer3 = $("input[name=question3]:checked").val();
//         var answer4 = $("input[name=question4]:checked").val();
//         var answer5 = $("input[name=question5]:checked").val();
//         var answer6 = $("input[name=question6]:checked").val();

//         console.log("answer1");
//         console.log("answer2");

//         if("correct" === answer1){
//             console.log("you are correct");
//         }


//     });

