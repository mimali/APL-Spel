// GLOBAL VARS
// Keeps track of active step in quiz
var stepsInQuiz = $('.steps');
var currentStep = 0;
// Save users answer when clicking "next/answer-button"
var chosenAnswer;
// All user answers in array form
var allUserAnswers = [];
//All correct answers
var correctAnswers = ["option1.1", "option2.1", "option3.1", "option4.1"];
// And then in booleans
var boolCorrectAnswers = [];

function addStep(){
    // Add +1 step in process
    currentStep++
    // If quiz is over -> compare user answers with correct answers
    if (currentStep > 4) {
        compareAnswers()
    };

    // Hide all irrelevant steps, show active
    getValidStep()
      
};

function markClicked(){
    //Change class to mark chosen option here
    $(this).switchClass("unselectedOption", "selectedOption");
    chosenAnswer = $(this).attr("id"); 
    // Append useranswer to list of all answers
    allUserAnswers[currentStep - 1] = chosenAnswer;
    console.log(allUserAnswers); // FOR TESTING
    //Change all other options to unmarked class 
    var siblings = $(this).siblings();
    var otherOptions = siblings.slice(0,4);
    for (var i = 0; i < otherOptions.length; i++) {
        $(otherOptions[i]).switchClass("selectedOption", "unselectedOption");
    };
};

function getValidStep(){
    console.log("currentStep: " + currentStep);
    // Loop through all steps in quiz, show only current
    for (var i = 0; i < stepsInQuiz.length; i++) {
        if (i != currentStep) {
            $(stepsInQuiz[i]).hide("slide", {direction : "left"});
        } else {
            $(stepsInQuiz[i]).show("slide", {direction : "right"}); 
        };
    };
};

// Compare user answers with correct answers
// Creates boolean list of answer results
function compareAnswers(){
    for (var i = 0; i < allUserAnswers.length; i++) {
        if (allUserAnswers[i] == correctAnswers[i]) {
            boolCorrectAnswers.push(true);
        } else {
            boolCorrectAnswers.push(false);
        };
    };
    console.log(boolCorrectAnswers) //TESTPRINT
};