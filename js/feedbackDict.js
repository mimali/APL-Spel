// feedbackArray = array[
// 		{dict of question options 
//			key : list of feedback info [ rubrik[0], text[1], imgsource[2] ]
//		}
//	]

function getFeedback(currentStep, chosenAnswerString) {

	var feedbackArray = [
		// Info about question here
		// e.g what is correct answer, what to show
		{
	    "option1.1" : ["Nej!", "Medicinen blir fiskmat men inte bra sådan. [Mer info/bild om miljöfaror och hot]", "#", "incorrectFeedback"], //Specific info about option here
	    "option1.2" : ["Nej!", "Medicinen ska inte ner i toan eller vasken. [Mer info/bild om miljöfaror och hot]", "#", "incorrectFeedback"],
	    "option1.3" : ["Nej!", "Medicinen ska inte ner i toan eller vasken. [Mer info/bild om miljöfaror och hot]", "#", "incorrectFeedback"],
	    "option1.4" : ["Helt rätt!", "[Positiv feedback]", "#", "correctFeedback"],
	    },
	   	{
	    "option2.1" : ["Helt rätt!", "Korrekt! Detta var rätt svar", "#", "correctFeedback"],
	    "option2.2" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    "option2.3" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    "option2.4" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    },
	   	{
	    "option3.1" : ["Helt rätt!", "Korrekt! Detta var rätt svar", "#", "correctFeedback"],
	    "option3.2" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    "option3.3" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    "option3.4" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    },
	   	{
	    "option4.1" : ["Helt rätt!", "Korrekt! Detta var rätt svar", "#", "correctFeedback"],
	    "option4.2" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    "option4.3" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    "option4.4" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    },

	]; 

	// Get correct question step
	var activeQuestion = feedbackArray[currentStep - 1];

	// Return array with [0] headline, [1] Text, [2] Imgsource 
	return activeQuestion[chosenAnswerString];

};