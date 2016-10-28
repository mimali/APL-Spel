// GLOBAL VARS
// Keeps track of active step in quiz
var stepsInQuiz = $('.steps');
var currentStep = 0;
// Save users answer when clicking "next/answer-button"
var chosenAnswer;
// Append all answers to list?
var allUserAnswers = [];

function addStep(){
    // Add +1 step in process
    currentStep++
    // Check if answer should be appended NOT WORKING YET
    if (allUserAnswers.length < currentStep) {
        allUserAnswers.push(chosenAnswer);
        console.log("if" + allUserAnswers);
    } else {
        console.log("else" + allUserAnswers);
    };
    // Hide all irrelevant steps, show active
    getValidStep();
      
};

function markClicked(select){
    //Change class to mark chosen option here
    $(this).switchClass("unselectedOption", "selectedOption");
    chosenAnswer = $(this).val(); // NOT WORKING
    console.log(chosenAnswer); // FOR TESTING
    //Change all other options to unmarked class 
    var siblings = $(this).siblings();
    var otherOptions = siblings.slice(1,4);
    for (var i = 0; i < otherOptions.length; i++) {
        $(otherOptions[i]).switchClass("selectedOption", "unselectedOption");
    };
};

function getValidStep(){
    console.log(currentStep);
    // Loop through all steps in quiz, show only current
    for (var i = 0; i < stepsInQuiz.length; i++) {
        if (i != currentStep) {
            $(stepsInQuiz[i]).hide();
        } else {
            $(stepsInQuiz[i]).show(); 
        };
    };
};