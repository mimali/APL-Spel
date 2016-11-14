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

        console.log(getFeedback(0, "option1.2")); // TESTING
        // Show Start step
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
                    $( ".unselectedOption, .quizButton, .question, .questionBox" ).hide();

                    // changes the avatar to a moving gif
                    $(".avatar").attr("src", "img/TestAvatar.gif")
                    // Slide in new step, slide out old one
                    $(stepsInQuiz[i-1]).hide("slide", {direction : "left"}, 2000);
                    $(stepsInQuiz[i]).show("slide", {direction : "right"}, 2000);
                    
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