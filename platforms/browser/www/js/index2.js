var resource = require('./resources.js'); //access the server urls, folders, and resources

function modupdate() {
	var user = sessionStorage.getItem("user");

	$.ajax({
			type: 'POST',
			data: 'user=' + user, 
			url: baseUrl + '/' + serverLocation + '/' + 'modupdate.php',
			
			success: function(data){
				//console.log(data);
			},
			error: function(){
				//console.log(data);
				alert("There was an error updating your message of the day");

			}
		});
}


function fillmod() {
	//document.getElementById("mod_video").innerHTML = "";
	
	$.ajax({
			url: baseUrl + '/' + serverLocation + '/' + 'fillmod.php',
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
			success: function(data, status){

				$.each(data, function(i, item) {

					var video_db = item.video;
					var audio_db = item.audio;
					var text_db = item.text;
					var textF_db = item.textF;
					var image_db = item.image;
					
					if (empty(video_db)) {
					} else {
						document.getElementById("mod_video").innerHTML = '<video width="290" height="200" controls> <source src="http://cokeapp.site90.com/Admin/' + video_db + '" type="video/mp4"></video>';
					}
						
					if (empty(audio_db)) {
					} else {
						document.getElementById("mod_video").innerHTML = '<audio controls> <source src="http://cokeapp.site90.com/Admin/' + audio_db + '" type="audio/mpeg"></video>';
					}
					
					if (empty(image_db)) {
					
					} else {
						document.getElementById("mod_img").innerHTML ="<img src='http://cokeapp.site90.com/Admin/" +item.image + "'>";
;
					}
					
					if (empty(text_db)) {
					
					} else {
					
						if (sessionStorage.getItem("lang")=='f' && !(empty(textF_db))) {
							document.getElementById("mod_text").innerHTML ="<br><br><center>" +textF_db +"</center><br><br>";
						}  else {
							document.getElementById("mod_text").innerHTML ="<br><br><center>" +text_db +"</center><br><br>";
						}

					}					
				});
			},
			error: function() {
				alert("Error Loading Message Of Day");
				window.location.replace("#menupage");
			}
		});
	}
	
function fillIncentive() {
	//document.getElementById("mod_video").innerHTML = "";

	
	$.ajax({
			url: baseUrl + '/' + serverLocation + '/' + 'fillIncentive.php',
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
			success: function(data, status){

				$.each(data, function(i, item) {

					var text_db = item.text;
					var textF_db = item.textF;
					var image_db = item.image;
					
					
					if (empty(image_db)) {
					
					
					} else {
						document.getElementById("inc_image").innerHTML ="<img class='centered' src='http://cokeapp.site90.com/Admin/" +item.image + "'>";
;
					}
					
					if (empty(text_db)) {
					
					} else {
						if (sessionStorage.getItem("lang")=='f') {
							document.getElementById("inc_text").innerHTML ="<br><br><center>" +textF_db +"</center><br><br>";
						} else {
							document.getElementById("inc_text").innerHTML ="<br><br><center>" +text_db +"</center><br><br>";
						}
					}
					
				});
			},
			error: function() {
				alert("Error Loading Incentives");
				window.location.replace("#menupage");
			}
		});
	}

	
//Individual Unit Leaderboard

function indunitleaderboard() {
	//Build 100 Person Leaderboard
	if (sessionStorage.getItem("lang") =="f") {
		
		document.getElementById("lbmsg").innerHTML = "Les utilisateurs de: " + sessionStorage.getItem("unit") + " " + "Canada";
	} else {
		document.getElementById("lbmsg").innerHTML = "Users From: " + sessionStorage.getItem("unit") + " " + "Canada";
	}
	
	document.getElementById("lbmsg").innerHTML = "Users From: " + sessionStorage.getItem("unit") + " " + "Canada";
	if ($("#lblist").hasClass('ui-listview')) {
		$("#lblist").empty().append('<li data-role="list-divider"><table width="100%" cellpadding="0" cellspacing="0"><tr><td width="5%">#</td><td width="50%">Name</td><td width="30%">Sales Area</td><td width="15%">Bottles</td></tr></table></li>	').listview("refresh"); 
	}
	
	var unit = sessionStorage.getItem("unit");
	
	$.ajax({
			type: 'GET',
			url: baseUrl + '/' + serverLocation + '/' + 'indunitleaderboard.php',
			data: 'unit=' +unit,
			dataType: "jsonp",
			jsonp: "jsoncallback",
			success: function(data, status){

				$.each(data, function(i, item) {

					var rank_db = item.rank;
					var fname_db = item.fname;
					var lname_db = item.lname;
					
					var score_db = item.score;
					var area_db = item.area;
					
					var newrow = "<li><table width='100%' cellpadding='0' cellspacing='0'><tr><td width='5%'>" + rank_db + "</td><td width='50%'>" + fname_db + " " + lname_db + "</td><td width='30%'>"+ area_db.substring(0, 8) + "</td><td width='15%'>" + score_db + "</td></tr></table></li>";

					document.getElementById("lblist").innerHTML = document.getElementById("lblist").innerHTML + newrow;
					
					$('#lblist').listview('refresh');
					
				});
			},
			error: function() {
				alert("Error Loading Leaderboard Page");
			}
		});
	}

//Function also produces a users specific rank
function indunitlbRank() {

	if (sessionStorage.getItem("access") == '3') {
	
	document.getElementById("personalscore").innerHTML = '';
						//$('#personalscore').listview('refresh');

	} else {
		var unit = sessionStorage.getItem("unit");
		var user = sessionStorage.getItem("user");
		//Gives particular user rank and score


		$.ajax({
			type: 'GET',
			url: baseUrl + '/' + serverLocation + '/' + 'indunitrank.php',
			data: 'user=' + user + '&unit=' + unit, 
			dataType: "jsonp",
			jsonp: "jsoncallback",
			success: function(response, status){

					var rank_db = response[5];
					var fname_db = response[1];
					var lname_db = response[2];
					
					var score_db = response[4];
					var area_db = response[3];
					
					var newrow = "<li data-role='list-divider'><table width='100%'><tr><td width='5%'>" + rank_db + "</td><td width='50%'>" + fname_db + " " + lname_db + "</td><td width='30%'>"+ area_db.substring(0, 8) + "</td><td width='15%'>" + score_db + "</td></tr></table></li>";

					document.getElementById("personalscore").innerHTML = newrow;
						$('#personalscore').listview('refresh');
					return false;	
			},
			error: function() {
				alert('Error in finding Rank');
			}
		});
	}
}


//Function creates an 100 person leaderboard
function indunitleaderboardcurrent() {
	//Build 100 Person Leaderboard
	if ($("#lbcurrentlist").hasClass('ui-listview')) {
		$("#lbcurrentlist").empty().append('<li data-role="list-divider"><table width="100%"><tr><td width="5%">#</td><td width="50%">Name</td><td width="30%">Sales Area</td><td width="15%">Bottles</td></tr></table></li>	').listview("refresh"); 
	}
	var unit = sessionStorage.getItem("unit");
	//var user = sessionStorage.getItem("user");

	$.ajax({
			type: 'GET',
			url: baseUrl + '/' + serverLocation + '/' + 'indunitleaderboardcurrent.php',
			data: '&unit=' + unit, 
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
			success: function(data, status){

				$.each(data, function(i, item) {

					var rank_db = item.rank;
					var fname_db = item.fname;
					var lname_db = item.lname;
					
					var score_db = item.currentscore;
					var area_db = item.area;
					
					var newrow = "<li><table width='100%'><tr><td width='5%'>" + rank_db + "</td><td width='50%'>" + fname_db + " " + lname_db + "</td><td width='30%'>"+ area_db.substring(0, 8) + "</td><td width='15%'>" + score_db + "</td></tr></table></li>";

					document.getElementById("lbcurrentlist").innerHTML = document.getElementById("lbcurrentlist").innerHTML + newrow;
					
					$('#lbcurrentlist').listview('refresh');
					
				});
			},
			error: function() {
				alert("Error Loading current Leaderboard Page");
			}
		});
	}

//Function also produces a users specific rank
function indunitlbRankcurrent() {
	
		if (sessionStorage.getItem("access") == '3') {
	
	document.getElementById("personalcurrentscore").innerHTML = '';
						//personalcurrentscore').listview('refresh');

	} else {

		var user = sessionStorage.getItem("user");
		var unit = sessionStorage.getItem("unit");
		//Gives particular user rank and score

		$.ajax({
			type: 'GET',
			url: baseUrl + '/' + serverLocation + '/' + 'indunitrankcurrent.php',
			data: 'user=' + user + '&unit=' + unit,
			dataType: "jsonp",
			jsonp: "jsoncallback",
			success: function(response, status){

					var rank_db = response[5];
					var fname_db = response[1];
					var lname_db = response[2];
					
					var score_db = response[4];
					var area_db = response[3];
					
					var newrow = "<li data-role='list-divider'><table width='100%'><tr><td width='5%'>" + rank_db + "</td><td width='55%'>" + fname_db + " " + lname_db + "</td><td width='25%'>"+ area_db.substring(0, 8) + "</td><td width='15%'>" + score_db + "</td></tr></table></li>";

					document.getElementById("personalcurrentscore").innerHTML = newrow;
						$('#personalcurrentscore').listview('refresh');
					return false;	
			},
			error: function() {
				alert('Error in finding current Rank');
			}
		});
	}
}

//Individual area Leaderboard

function indarealeaderboard() {
	//Build 100 Person Leaderboard
	
	if (sessionStorage.getItem("lang") =="f") {

		document.getElementById("lbmsg").innerHTML = "Les utilisateurs de: " + sessionStorage.getItem("area");
	} else {
		document.getElementById("lbmsg").innerHTML = "Users From: " + sessionStorage.getItem("area");
	}
	
	if ($("#lblist").hasClass('ui-listview')) {
		$("#lblist").empty().append('<li data-role="list-divider"><table width="100%" cellpadding="0" cellspacing="0"><tr><td width="5%">#</td><td width="50%">Name</td><td width="30%">Sales Area</td><td width="15%">Bottles</td></tr></table></li>	').listview("refresh"); 
	}
	
	var area = sessionStorage.getItem("area");
	
	$.ajax({
			type: 'GET',
			url: baseUrl + '/' + serverLocation + '/' + 'indarealeaderboard.php',
			data: 'area=' +area,
			dataType: "jsonp",
			jsonp: "jsoncallback",
			success: function(data, status){

				$.each(data, function(i, item) {

					var rank_db = item.rank;
					var fname_db = item.fname;
					var lname_db = item.lname;
					
					var score_db = item.score;
					var area_db = item.area;
					
					var newrow = "<li><table width='100%' cellpadding='0' cellspacing='0'><tr><td width='5%'>" + rank_db + "</td><td width='50%'>" + fname_db + " " + lname_db + "</td><td width='30%'>"+ area_db.substring(0, 8) + "</td><td width='15%'>" + score_db + "</td></tr></table></li>";

					document.getElementById("lblist").innerHTML = document.getElementById("lblist").innerHTML + newrow;
					
					$('#lblist').listview('refresh');
					
				});
			},
			error: function() {
				alert("Error Loading Leaderboard Page");
			}
		});
	}

//Function also produces a users specific rank
function indarealbRank() {
	
	if (sessionStorage.getItem("access") == '3') {
	
	document.getElementById("personalscore").innerHTML = '';
						//$('#personalscore').listview('refresh');

	} else {
		
		var user = sessionStorage.getItem("user");
		var area = sessionStorage.getItem("area");
		//alert(area);


		$.ajax({
			type: 'GET',
			url: baseUrl + '/' + serverLocation + '/' + 'indarearank.php',
			data: 'area=' + area + '&user=' + user, 
			dataType: "jsonp",
			jsonp: "jsoncallback",
			success: function(response, status){

					var rank_db = response[5];
					var fname_db = response[1];
					var lname_db = response[2];
					
					var score_db = response[4];
					var area_db = response[3];

					var newrow = "<li data-role='list-divider'><table width='100%'><tr><td width='5%'>" + rank_db + "</td><td width='50%'>" + fname_db + " " + lname_db + "</td><td width='30%'>"+ area_db.substring(0, 8) + "</td><td width='15%'>" + score_db + "</td></tr></table></li>";

					document.getElementById("personalscore").innerHTML = newrow;
						$('#personalscore').listview('refresh');
					return false;	
			},
			error: function() {
				alert('Error in finding Rank');
			}
		});
	}
}


//Function creates an 100 person leaderboard
function indarealeaderboardcurrent() {
	//Build 100 Person Leaderboard
	if ($("#lbcurrentlist").hasClass('ui-listview')) {
		$("#lbcurrentlist").empty().append('<li data-role="list-divider"><table width="100%"><tr><td width="5%">#</td><td width="50%">Name</td><td width="30%">Sales Area</td><td width="15%">Bottles</td></tr></table></li>	').listview("refresh"); 
	}
	
		var area = sessionStorage.getItem("area");

	$.ajax({
			type: 'GET',
			url: baseUrl + '/' + serverLocation + '/' + 'indarealeaderboardcurrent.php',
			data: 'area=' + area, 
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
			success: function(data, status){

				$.each(data, function(i, item) {

					var rank_db = item.rank;
					var fname_db = item.fname;
					var lname_db = item.lname;
					
					var score_db = item.currentscore;
					var area_db = item.area;
					
					var newrow = "<li><table width='100%'><tr><td width='5%'>" + rank_db + "</td><td width='50%'>" + fname_db + " " + lname_db + "</td><td width='30%'>"+ area_db.substring(0, 8) + "</td><td width='15%'>" + score_db + "</td></tr></table></li>";

					document.getElementById("lbcurrentlist").innerHTML = document.getElementById("lbcurrentlist").innerHTML + newrow;
					
					$('#lbcurrentlist').listview('refresh');

				});
			},
			error: function() {
				alert("Error Loading current Leaderboard Page");
			}
		});
	}

//Function also produces a users specific rank
function indarealbRankcurrent() {

	if (sessionStorage.getItem("access") == '3') {
	
	document.getElementById("personalcurrentscore").innerHTML = '';
						//$('#personalcurrentscore').listview('refresh');

	} else {



		var user = sessionStorage.getItem("user");
		var area = sessionStorage.getItem("area");
		//Gives particular user rank and score

		$.ajax({
			type: 'GET',
			url: baseUrl + '/' + serverLocation + '/' + 'indarearankcurrent.php',
			data: 'area=' + area + '&user=' + user,
			dataType: "jsonp",
			jsonp: "jsoncallback",
			success: function(response, status){

					var rank_db = response[5];
					var fname_db = response[1];
					var lname_db = response[2];
					
					var score_db = response[4];
					var area_db = response[3];
					
					var newrow = "<li data-role='list-divider'><table width='100%'><tr><td width='5%'>" + rank_db + "</td><td width='55%'>" + fname_db + " " + lname_db + "</td><td width='25%'>"+ area_db.substring(0, 8) + "</td><td width='15%'>" + score_db + "</td></tr></table></li>";

					document.getElementById("personalcurrentscore").innerHTML = newrow;
						$('#personalcurrentscore').listview('refresh');
					return false;	
			},
			error: function() {
				alert('Error in finding current Rank');
			}
		});
	}
}