$(document).ready(function () {


    
    // Quiz Mode:
    // 1 = question must be correctly answered to proceed, immediate text feedback, 
        // (optional: weather gets better every step)
    // 2 = question must be answered to proceed but not neccessarily correctly, immediate text feedback, 
        // (optional: weather changes depending on answers)
    // 3 =  question must be answered to proceed but not neccessarily correctly, visual and text feedback in ending,
        // (example: Game ends by the sea, sea + sky is either beautiful or shitty)
    var quizMode = 1
    
    // GLOBAL VARS
    // Keeps track of active step in quiz
    var stepsInQuiz = $('.steps');
    var currentStep = 0;
    // Save users answer when clicking "next/answer-button"
    var chosenAnswer;
    // All user answers in array form
    var allUserAnswers = [];
    //All correct answers for comparison to user's answers
    var correctAnswers = ["option1.1", "option2.1", "option3.1", "option4.1"];
    // And then in booleans
    var boolCorrectAnswers = [];

    //console.log(getFeedback(0, "option1.2")); TESTING
    // Show Start step
    getValidStep();

    // When clicking button...
    $(".nextButton").click(function(){
        // Add +1 step in process
        currentStep++;
        // If quiz is over -> compare user answers with correct answers
        if (currentStep > 4) {
            compareAnswersEnd()
        };

        // Hide all previous step, show next
        getValidStep();
          
    });

    // When clicking button...
    $(".quizButton").click(function(){

        $(this).hide();
        checkAnswer();
        $(".nextButton").show("fade", 1500);
          
    });



    $(".unselectedOption").click(function(){
        //Change class to mark chosen option here
        $(this).switchClass("unselectedOption", "selectedOption");
        chosenAnswer = $(this).attr("id"); 
        // Append useranswer to list of all answers
        allUserAnswers[currentStep - 1] = chosenAnswer;
        console.log(allUserAnswers); // FOR TESTING
        //Change all other options to unmarked class 
        var otherOptions = $(this).siblings();

        // Loop through all items in quiz step to unmark unwanted options
        for (var i = 0; i < otherOptions.length; i++) {
            // Check which elements are options and apply unselect class only to them
            var className = $(otherOptions[i]).attr('class');
            if (className == "selectedOption") {
                $(otherOptions[i]).switchClass("selectedOption", "unselectedOption");
            };
        };  
    });

    $(".selectedOption").click(function(){
        $(this).switchClass("selectedOption", "unselectedOption");
    });
    
    function getValidStep(){
        console.log("currentStep: " + currentStep);
        // Loop through all steps in quiz...
        for (var i = 0; i < stepsInQuiz.length; i++) {
            // Show without animation on Start stage
            if (currentStep == 0) {
                $(stepsInQuiz[0]).show();
            }
            // Check what step the quiz is on, show that step and hide previous
            else if (i == currentStep && currentStep > 0) {
                // Hide options
                $( ".unselectedOption, .selectedOption, .quizButton, .question, .questionBox, .correctFeedback, .incorrectFeedback, .nextButton" ).hide();

                // changes the avatar to a moving gif
                $(".avatar").attr("src", "img/TestAvatar.gif");
                // Slide in new step, slide out old one
                $(stepsInQuiz[i-1]).hide("slide", {direction : "left"}, 2000);
                $(stepsInQuiz[i]).show("slide", {direction : "right"}, 2000);
                
                // Change back avatar to still
                setTimeout(function(){
                    $(".avatar").attr("src", "img/TestAvatarStill.gif")
                },2000);
                // Show options
                setTimeout(function(){
                    $(".unselectedOption, .quizButton, .question, .questionBox").show("fade", 300);
                }, 2300);
            };

        };
    };

    // Compare user answers with correct answers
    // Creates boolean list of answer results
    function compareAnswersEnd() {
        for (var i = 0; i < allUserAnswers.length; i++) {
            if (allUserAnswers[i] == correctAnswers[i]) {
                boolCorrectAnswers.push(true);
            } else {
                console.log(false)
            };
        };
    };

    function checkAnswer() {

        if (allUserAnswers.length > 0 && allUserAnswers.length < 5) {
            // Save feedback in var result
            var result = getFeedback(currentStep, allUserAnswers[currentStep - 1]);
            console.log(result);
            // Get id of relevant html feedback
            var feedbackBlock = $("#" + result[3] + (currentStep).toString());
            console.log(feedbackBlock);
            // Insert feedback from getFeedback() in game
            $(feedbackBlock).append("<h1>"+result[0]+"</h2>", "<p>"+result[1]+"</p>");
            
            $("." + result[3]).show();
            
            
        } else {
            console.log("No answers yet");
        };

    };


});