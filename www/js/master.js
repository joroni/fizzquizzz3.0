// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz();
});

var base_url = "http://ec2-54-191-42-126.us-west-2.compute.amazonaws.com/fizzquizzserver";





var media_id = "102516";
							var attempts = localStorage.getItem("attempts");

							$(".startQuiz").on("click", function () {
							    //var set = "S1121016";

							    attempts++;
							    //attempts = localStorage.getItem("attempts");
							    localStorage.setItem("attempts", attempts);


							    var datefrom = localStorage.getItem("dateFrString");
							    var user = localStorage.getItem("userlogin");
							    var user_id = localStorage.getItem("user_id");

							    var area = localStorage.getItem("user_area");
							    var division = localStorage.getItem("user_division");
							    var divisions = division;
							    var aunit = localStorage.getItem("user_aunit");

							    $("#area").val(area);
							    $("#aunit").val(aunit);
							    $("#datefrom").val(datefrom);
							    $("#divisions").val(divisions);
							    $("#user_id").val(user_id);

							    $("#attempts").val(attempts);
									localStorage.setItem("bottomBar", 'block');
								  //alert(bottomBar);


							    console.log("scored");
							});









function showQuestions() {
		$(".raysDemo").removeClass('fadeInUpBig');
		$(".raysDemo").addClass('fadeOut animated');
		$(".raysDemo").css('top', '-9999px');

    function onDeviceReady() {

        $.ajax({
            url: base_url + "/getvideo/single",
            dataType: "json",
        }).success(function(data) {
            for (i = 0; i < data.length; i++) {
                var videoFile = data[i]["video"];
                var nameFile = (data[i]["name"]);


    $(".popup-overlay").append("<video><source src=  '+ videoFile + '><meta property='og:video:secure_url' content='+ videoFile + ' > <meta property='og:video:type' content='video/mp4'></video>");

                $("video").append("<source src=  '+ videoFile + '><meta property='og:video:secure_url' content='+ videoFile + ' > <meta property='og:video:type' content='video/mp4'>");
                console.log(nameFile);
                console.log(videoFile);
            }

        });
    }


		setTimeout(function(){
	     $(".raysDemo").hide();
}, 600);


}


	/*	$("li.question:last-child > .nextQuestion").on('click',function(){


    $('.send-score').show();

  });*/




		function post_score_new() {

			myApp.showIndicator();
		    var user_id =  $("#user_id").val();
		    var datefromDynamic = $("#datefrom").val();
		    var score_bottle = $("#score_bottle").val();
		    var attempts = $("#attempts").val();

		    var divisions = $("#divisions").val();
		    var area = $("#area").val();
		    var aunit = $("#aunit").val();


		    console.log("Attempts", attempts);


		    $.get(base_url + "/user_results_new/update/" + user_id + "/" + datefromDynamic + "/" + area + "/"  + divisions + "/" + aunit + "/" +  score_bottle, function ( data ) {






		        if (data == 0) {
					         myApp.hideIndicator();
		              myApp.alert("uh oh, try again.", alertTitle);

		        } else if (data == 1) {
		            attempts = 1;

		            localStorage.setItem("attempts", attempts);

							//localStorage.setItem("bottomBar", 'show');
		            console.log("score recorded");
								//$(".toolbar.bottom").show();
								//bottomBarShow();
                myApp.hideIndicator();
                myApp.alert("Score Recorded!", alertTitle);
                goToStart();

                function goToStart() {
                  mainView.router.load({
                      template: Template7.templates.welcomeTemplate,
                      context: {
                          //  name: username
                      }
                  });
                  initApp();
                		setTimeout(function(){

                }, 300);

                }




		        }

		        /*else {

						$.get(base_url +"/user_results_new/update/" + user_id + "/" + datefromDynamic + "/" + area + "/" + divisions + "/" + aunit + "/"  + score_bottle, function ( data ) {
		              		myApp.showIndicator();
		                if (data == 0) {
							myApp.hideIndicator();
							myApp.alert("uh oh, try again", alertTitle);

		                } else if (data == 1) {
							myApp.hideIndicator();
		                    myApp.alert("Score Updated", alertTitle);
		                    attempts++;
		                    localStorage.setItem("attempts", attempts);
		                    console.log("score updated");

                        function goToStart() {
                          mainView.router.load({
                              template: Template7.templates.index,
                              context: {
                                  //  name: username
                              }
                          });
                          initApp();
                            setTimeout(function(){

                        }, 300);

                        }

		                }
		            });
		        }
*/
		        localStorage.setItem("recent_quiz", datefromDynamic);


		    });
		}






function pullFreshQuizItems() {


    var myDivision2 = localStorage.getItem('user_division');
    var endDate = localStorage.getItem('dateToString');


    $.get(base_url + "/jsonQuiz/" + myDivision2 + "/" + endDate, function(data) {
        // $( ".result" ).html( data );
        console.log('pullFreshQuizItems |', data);
        // alert( "Load was performed." );
        localStorage.setItem('QuizData', data);



    });


}

/*
		pullFreshQuizItems();
		var Quizes = localStorage.getItem("QuizData");
		document.writeln("<script>");
		document.writeln(Quizes);
		document.writeln("<"+"/script>");*/
