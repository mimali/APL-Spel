$(document).ready(function () {
	getValidStep();

	$(".quizButton").click(function(){
		addStep();
	});

	$(".unselectedOption").click(function(){
		var selectOrUnseclect = $(this).switchClass("unselectedOption", "selectedOption");
		markClicked(selectOrUnseclect);
	});
	
});