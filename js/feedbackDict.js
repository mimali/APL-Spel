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
	    "option1.4" : ["Helt rätt!", "Duktig du är! ", "#", "correctFeedback"],
	    },
	   	{
	    "option2.1" : ["Nej!", "Medicin i molnen bidrar till en försurad och förstörd miljö. Släng inte din medicin i soptunnan!", "#", "incorrectFeedback"],
	    "option2.2" : ["Nej!", "Nog för att sopgubbarna gillar att sortera sopor, men om de skulle missa att ta reda på någon medicin så får det förödande konsekvenser. Släng inte medicin i soptunnan!", "#", "incorrectFeedback"],
	    "option2.3" : ["Nej!", "Medicin hör inte hemma i soptunnan även om det vore så att den var väl förpackad. Förbränningen av sopor gör att det i så fall kommer ut farliga ämnen i naturen.", "#", "incorrectFeedback"],
	    "option2.4" : ["Helt rätt!", "Du verkar ha koll på detta! Man ska aldrig slänga medicin i soporna!", "#", "correctFeedback"],
	    },
	   	{
	    "option3.1" : ["Nej!", "Det är helt rätt att medicin kan vara farligt för miljön. Men de flesta läkemedel hör tyvärr inte hemma i farligt avfall.", "#", "incorrectFeedback"],
	    "option3.2" : ["Helt rätt!", "Fortsätt försök, snart är du nog rätt på det!", "#", "correctFeedback"],
	    "option3.3" : ["Nej!", "När medcinen bränns kommer alla substanser ut i luften. Detta är inte bra!", "#", "incorrectFeedback"],
	    "option3.4" : ["Nej!", "Hur tänkte du nu egentligen?", "#", "incorrectFeedback"],
	    },
	   	{
	    "option4.1" : ["Helt rätt!", "Du är en riktig miljövän! Man ska alltid lämna medicin till ett apotek så att de kan förvara den och se till att den återvinns på rätt sätt.", "#", "correctFeedback"],
	    "option4.2" : ["Nej!", "Det är aldrig bra att gömma medicin, den kan komma i orätta händer och ska därför alltid överlämnas i en genomskinlig påse till personalen på apoteket.", "#", "incorrectFeedback"],
	    "option4.3" : ["Nej!", "Kurragömma är alltid roligt, men eftersom apotekspersonalen inte vet att du gömmer dig så kommer de inte att leta efter dig heller. Lämna din medicin i en genomskinlig påse till personalen.", "#", "incorrectFeedback"],
	    "option4.4" : ["Nej!", "Eftersom apoteken inte är postkontor så har de inga kuvert. Det finns genomskinliga påsar som du skall lägga din överblivna medicin i och lämna till personalen.", "#", "incorrectFeedback"],
	    },

	]; 

	// Get correct question step
	var activeQuestion = feedbackArray[currentStep - 1];

	// Return array with [0] headline, [1] Text, [2] Imgsource 
	return activeQuestion[chosenAnswerString];

};