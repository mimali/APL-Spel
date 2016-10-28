$(document).ready(function () {
	getValidStep();

	$(".quizButton").click(function(){
		addStep();
	});

	$(".unselectedOption").click(function(){
		$(this).switchClass("unselectedOption", "selectedOption");
		markClicked();
	});

	$(".selectedOption").click(function(){
        $(this).switchClass("selectedOption", "unselectedOption");
    });
	
});