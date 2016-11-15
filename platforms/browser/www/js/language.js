function loadlanguage() {

	var language = sessionStorage.getItem("lang");
	
	if (language == 'f') {
	//In French
		document.getElementById("CokeHeaderT").innerHTML = "Coca-Cola";
		document.getElementById("PlayButtonT").innerHTML = "Commencer à jouer!";
		document.getElementById("ProfileButtonT").innerHTML = "Profil";
		document.getElementById("LBButtonT").innerHTML = "Classements";
		document.getElementById("OIButtonT").innerHTML = "Vue d’ensemble & primes actuelles";
		
		document.getElementById("PlayHeaderT").innerHTML = "Commencer à jouer!";
		document.getElementById("PlayButton2T").innerHTML = "Commencer la série";
		document.getElementById("PlayTextT").innerHTML = "Séries complétées:  ";
		document.getElementById("PlayText2T").innerHTML = "Séries disponible:  ";
		
		document.getElementById("profileHeaderT").innerHTML = "Profil";
		document.getElementById("EditProfileButtonT").innerHTML = "Modifier mon compte";
		
		document.getElementById("EditPassButtonT").innerHTML = "Edit Password";
		
		document.getElementById("LBHeader1").innerHTML = "Classements";
		document.getElementById("LBHeader2").innerHTML = "Classements";
		document.getElementById("LBHeader3").innerHTML = "Classements";
		document.getElementById("LBHeader4").innerHTML = "Classements";
		document.getElementById("LBHeader5").innerHTML = "Classements";

		document.getElementById("BackButton3").innerHTML = "Retour";
		document.getElementById("BackButton4").innerHTML = "Retour";
		document.getElementById("BackButton5").innerHTML = "Retour";
		document.getElementById("BackButton6").innerHTML = "Retour";
		document.getElementById("BackButton7").innerHTML = "Retour";
		document.getElementById("BackButton8").innerHTML = "Retour";
		document.getElementById("BackButton9").innerHTML = "Retour";
		document.getElementById("BackButton10").innerHTML = "Retour";
		document.getElementById("BackButton11").innerHTML = "Retour";
		document.getElementById("LogButton1").innerHTML = "Déconnexion";
		
		document.getElementById("iLBTextT").innerHTML = "Classement individuel";
		
		document.getElementById("ILBMButtonT").innerHTML = "Classement individuel";
		document.getElementById("SALBButtonT").innerHTML = "Classement du secteur de ventes";
		document.getElementById("SULBButtonT").innerHTML = "Classement de l’unité de ventes";
		
		document.getElementById("ISALBButtonT").innerHTML = "Secteur de Ventes";
		document.getElementById("ISULBButtonT").innerHTML = "L’unité de Ventes";
		document.getElementById("ICALBButtonT").innerHTML = "Canada";
		
		document.getElementById("iLBoTextT").innerHTML = "Total";
		document.getElementById("iLBcsTextT").innerHTML = "Session Actuelle";
		
		document.getElementById("aLBoTextT").innerHTML = "Total";
		document.getElementById("aLBcsTextT").innerHTML = "Session Actuelle";
		
		document.getElementById("uLBoTextT").innerHTML = "Total";
		document.getElementById("uLBcsTextT").innerHTML = "Session Actuelle";
		
		document.getElementById("insTextT").innerHTML = "Primes Actuelles";
		
		document.getElementById("epHeaderT").innerHTML = "Modifier¨Profil";
		document.getElementById("EIDepTextT").innerHTML = "EID (Ex. l23855):";
		document.getElementById("fnameepTextT").innerHTML = "Prénom:";
		document.getElementById("lnameepTextT").innerHTML = "Nom de famille:";
		document.getElementById("emepTextT").innerHTML = "Courriel:";
		document.getElementById("chepTextT").innerHTML = "Créneau:";
		document.getElementById("suepTextT").innerHTML = "Unité de ventes:";
		document.getElementById("saepTextT").innerHTML = "Secteur de vente:";
		document.getElementById("laepTextT").innerHTML = "Langue:";
		
		document.getElementById("PassepTextT").innerHTML = "Current Password";
		document.getElementById("PassepTextT2").innerHTML = "New Password";
		
		document.getElementById("overHeaderT").innerHTML = "Vue d’ensemble";
		document.getElementById("overTextT").innerHTML = "<center>Bienvenu dans l’application d’apprentissage de Coca-Cola, xxxxxxxx!<br><br></center>Xxxx a été développée pour offrir un environnement motivant qui favorise le micro-apprentissage personnalisé continu. L’aspect compétitif de nos personnalités sera mis en éveil par le côté ludique de l’application et ses fonctionnalités telles que l’accumulation de points, les tableaux de classement et le système de récompenses. <br><br>Les sessions de formation auront lieu sur des périodes données et des notifications envoyées sur les appareils mobiles enregistrés annonceront les nouvelles séries de questions :	<ul><li>Chaque bonne réponse donnée dans un délai de 24 h suivant la réception de la notification sera récompensée de 3 bouteilles virtuelles de Coke.</li><li>Chaque bonne réponse donnée dans un délai de 48 h suivant la réception de la notification sera récompensée de 2 bouteilles virtuelles de Coke.</li><li>Chaque bonne réponse donnée dans un délai supérieur à 48 h suivant la réception de la notification sera récompensée d’une bouteille virtuelle de Coke.</li></ul><br>Les meneurs au classement dans chaque unité de ventes à la fin d’une session d’apprentissage seront récompensés. De plus, les meneurs au classement dans chaque unité de ventes à la fin d’un nombre donné de sessions d’apprentissage seront aussi récompensés.<br><br>"
	
	} else {
	//In English 
	
		document.getElementById("CokeHeaderT").innerHTML = "Coca-Cola";
		document.getElementById("PlayButtonT").innerHTML = "Play!";
		document.getElementById("ProfileButtonT").innerHTML = "Profile";
		document.getElementById("LBButtonT").innerHTML = "Leaderboards";
		document.getElementById("OIButtonT").innerHTML = "Overview & Incentives";
		
		document.getElementById("PlayHeaderT").innerHTML = "Play";
		document.getElementById("PlayButton2T").innerHTML = "Begin Next Set!";
		document.getElementById("PlayTextT").innerHTML = "Sets Completed:  ";
		document.getElementById("PlayText2T").innerHTML = "Sets Available:  ";
		
		document.getElementById("profileHeaderT").innerHTML = "Profile";
		document.getElementById("EditProfileButtonT").innerHTML = "Edit Account Info";
		
		document.getElementById("EditPassButtonT").innerHTML = "Edit Password";
		
		document.getElementById("LBHeader1").innerHTML = "Leaderboards";
		document.getElementById("LBHeader2").innerHTML = "Leaderboards";
		document.getElementById("LBHeader3").innerHTML = "Leaderboards";
		document.getElementById("LBHeader4").innerHTML = "Leaderboards";
		document.getElementById("LBHeader5").innerHTML = "Leaderboards";

		document.getElementById("BackButton3").innerHTML = "Back";
		document.getElementById("BackButton4").innerHTML = "Back";
		document.getElementById("BackButton5").innerHTML = "Back";
		document.getElementById("BackButton6").innerHTML = "Back";
		document.getElementById("BackButton7").innerHTML = "Back";
		document.getElementById("BackButton8").innerHTML = "Back";
		document.getElementById("BackButton9").innerHTML = "Back";
		document.getElementById("BackButton10").innerHTML = "Back";
		document.getElementById("BackButton11").innerHTML = "Back";
		document.getElementById("LogButton1").innerHTML = "Logout";
		
		document.getElementById("iLBTextT").innerHTML = "Individual Leaderboards";
		
		document.getElementById("ILBMButtonT").innerHTML = "Individual Leaderboards";
		document.getElementById("SALBButtonT").innerHTML = "Sales Area Leaderboard";
		document.getElementById("SULBButtonT").innerHTML = "Sales Unit Leaderboard";
		
		document.getElementById("ISALBButtonT").innerHTML = "Sales Area";
		document.getElementById("ISULBButtonT").innerHTML = "Sales Unit";
		document.getElementById("ICALBButtonT").innerHTML = "Canada";
		
		document.getElementById("iLBoTextT").innerHTML = "Overall";
		document.getElementById("iLBcsTextT").innerHTML = "Current Session";
		
		document.getElementById("aLBoTextT").innerHTML = "Overall";
		document.getElementById("aLBcsTextT").innerHTML = "Current Session";
		
		document.getElementById("uLBoTextT").innerHTML = "Overall";
		document.getElementById("uLBcsTextT").innerHTML = "Current Session";
		
		document.getElementById("insTextT").innerHTML = "Current Incentives";
		
		document.getElementById("epHeaderT").innerHTML = "Edit Profile";
		document.getElementById("EIDepTextT").innerHTML = "EID (Ex. l23855):";
		document.getElementById("fnameepTextT").innerHTML = "First Name:";
		document.getElementById("lnameepTextT").innerHTML = "Last Name:";
		document.getElementById("emepTextT").innerHTML = "E-Mail:";
		document.getElementById("chepTextT").innerHTML = "Channel:";
		document.getElementById("suepTextT").innerHTML = "Sales Unit:";
		document.getElementById("saepTextT").innerHTML = "Sales Area:";
		document.getElementById("laepTextT").innerHTML = "Language:";
		
		document.getElementById("PassepTextT").innerHTML = "Current Password";
		document.getElementById("PassepTextT2").innerHTML = "New Password";
		

		document.getElementById("overHeaderT").innerHTML = "Overview";
		document.getElementById("overTextT").innerHTML = "<center>Welcome to Coca-Cola's Learning App, xxxxxxxx!<br><br></center>xxxxxxx is designed to deliver an alternative learning environment that promotes continuous bite-sized learning in a personalized and engaging way. By incorporating the mechanics of gamification, including tiered points, leaderboards and a rewards system, the app will play to the competitive nature within. <br><br>Learning Sessions will run for defined periods of time and questions sets will be announced via push notifications to a registered mobile device:	<ul><li>Correct Responses within 24 hours of push notifications will each be awarded 3 virtual coke bottles</li><li>Correct Responses within 48 hours of push notifications will each be awarded 2 virtual coke bottles</li><li>Correct Responses 48+ hours after push notifications will each be awarded 1 virtual coke bottle</li></ul><br>Leaders in each SU at the end of a Learning Session will be rewarded. In addition the Leaders in each SU at the end of a defined number of Learning Session will also be rewarded. <br><br>"
	}
}