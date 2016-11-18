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
	    "option2.1" : ["Nej!", "Medicin i molnen bidrar till en försurad och förstörd miljö. Släng inte din medicin i soptunnan!", "#", "incorrectFeedback"],
	    "option2.2" : ["Nej!", "Nog för att sopgubbarna gillar att sortera sopor, men om de skulle missa att ta reda på någon medicin så får det förödande konsekvenser. Släng inte medicin i soptunnan!", "#", "incorrectFeedback"],
	    "option2.3" : ["Nej!", "Medicin hör inte hemma i soptunnan även om det vore så att den var väl förpackad. Förbränningen av sopor gör att det i så fall kommer ut farliga ämnen i naturen.", "#", "incorrectFeedback"],
	    "option2.4" : ["Helt rätt!", "Du verkar ha koll på detta! Man ska aldrig slänga medicin i soporna!", "#", "correctFeedback"],
	    },
	   	{
	    "option3.1" : ["Nej!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    "option3.2" : ["Helt rätt!", "Korrekt! Detta var rätt svar", "#", "correctFeedback"],
	    "option3.3" : ["Nej!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    "option3.4" : ["Nej!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    },
	   	{
	    "option4.1" : ["Helt rätt!", "Korrekt! Detta var rätt svar", "#", "correctFeedback"],
	    "option4.2" : ["Nej!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    "option4.3" : ["Nej!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    "option4.4" : ["Nej!", "Fasiken, nu blev det fel", "#", "incorrectFeedback"],
	    },

	]; 

	// Get correct question step
	var activeQuestion = feedbackArray[currentStep - 1];

	// Return array with [0] headline, [1] Text, [2] Imgsource 
	return activeQuestion[chosenAnswerString];

};