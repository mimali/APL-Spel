 $(document).ready(function () {

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

        
        getValidStep();

        // When clicking button...
        $(".quizButton").click(function(){
            // Add +1 step in process
            currentStep++;
            // If quiz is over -> compare user answers with correct answers
            if (currentStep > 4) {
                compareAnswers();
            };

            // Hide all irrelevant steps, show active
            getValidStep();
              
        });

        $(".unselectedOption").click(function(){
            //Change class to mark chosen option here
            $(this).switchClass("unselectedOption", "selectedOption");
            chosenAnswer = $(this).attr("id"); 
            // Append useranswer to list of all answers
            allUserAnswers[currentStep - 1] = chosenAnswer;
            console.log(allUserAnswers); // FOR TESTING
            //Change all other options to unmarked class 
            var siblings = $(this).siblings();

            // *** ONLY WORKS WHEN OPTIONS ARE INDEX 0-4. CHANGE IF MORE CONTENT IS ADDED!!!!
            var otherOptions = siblings.slice(0,4);

            for (var i = 0; i < otherOptions.length; i++) {
                $(otherOptions[i]).switchClass("selectedOption", "unselectedOption");
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
                    $( ".unselectedOption, .quizButton" ).hide();

                    // Slide in new step, slide out old one
                    $(stepsInQuiz[i-1]).hide("slide", {direction : "left"}, 2000);
                    $(stepsInQuiz[i]).show("slide", {direction : "right"}, 2000);
                    
                    // Show options
                    setTimeout(function(){
                        $(".unselectedOption, .quizButton").show();
                    }, 2300);
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
        
    });