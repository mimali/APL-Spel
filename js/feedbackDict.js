
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
	    "option1.1" : ["Helt rätt!", "Korrekt! Detta var rätt svar", "#"], //Specific info about option here
	    "option1.2" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#"],
	    "option1.3" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#"],
	    "option1.4" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#"],
	    },
	   	{
	    "option2.1" : ["Helt rätt!", "Korrekt! Detta var rätt svar", "#"],
	    "option2.2" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#"],
	    "option2.3" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#"],
	    "option2.4" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#"],
	    },
	   	{
	    "option3.1" : ["Helt rätt!", "Korrekt! Detta var rätt svar", "#"],
	    "option3.2" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#"],
	    "option3.3" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#"],
	    "option3.4" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#"],
	    },
	   	{
	    "option4.1" : ["Helt rätt!", "Korrekt! Detta var rätt svar", "#"],
	    "option4.2" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#"],
	    "option4.3" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#"],
	    "option4.4" : ["Fel fel fel!", "Fasiken, nu blev det fel", "#"],
	    },

	]; 

	// Get correct question step
	var activeQuestion = feedbackArray[currentStep];

	// Return array with [0] headline, [1] Text, [2] Imgsource 
	return activeQuestion[chosenAnswerString];

};