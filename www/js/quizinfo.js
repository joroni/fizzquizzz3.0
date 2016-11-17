
function get_Quiz_History() {
    //$('#output').empty();
    var user_id = localStorage.getItem('user_id');
    $('#output').html('<th colspan="4" style="padding: 0 5px; background: silver;"><h5>Stats</h5></th>');
    $.getJSON(base_url + '/index.php/get_user_quiz_history/' + user_id, function ( results ) {


        //$.each(result, function ( i, field ) {
        $.each(results, function ( i, fields ) {

            $("#output").append("<tr><td><label>Set</label></td><td> " + fields.datefrom + " </td><td><label>Score</label></td><td>" + fields.score_bottle + "</td></tr>");
            //$('#user_id').text(field.id);
            //    console.log(field.attempts);
            //  console.log(field.datefrom);
            //  console.log(field.score_bottle);
            $("#output2").append("<li> " + fields.datefrom + " </li>");
            //$('#user_id').text(field.id);
            //    console.log(field.attempts);
            //  console.log(field.datefrom);
            //  console.log(field.score_bottle);
            var checkLQuiz = $("#output2 li:last-child").text();

            localStorage.setItem('checkLQuiz', checkLQuiz);
            console.log("checkLQuiz", checkLQuiz);



        });
    })
}
//get_Quiz_History();



/*  function get_Quiz_Data() {

 $.get(base_url + "/index.php/jsonSmallFormat/2016-11-10/", {callback : "?" }, "jsonp",  function(data) {
 $('#summary').text(data.result);
 alert(data.result);
 });

 }
 */
$('html').on('click', function () {
    getQuizData();
});


function myFunction() {
    $('#capturePhoto').hide();
    // window.location.replace('main.html');
}

function getInitQuizData() {


    var myDivision2 = localStorage.getItem('user_division');


    $.getJSON(base_url + '/index.php/jsonQuiz/' + myDivision2, function ( result ) {


        //  $.each(result, function ( i, field ) {
        // $("#output3").append("<tr><td>date_published:  "+ field.date_published + " </td></tr><tr><td>date_expire: "+ field.date_expire + "</td></tr>");
        //  $('#userid').val(field.id);
        // $('#username').val(field.username);
        // $('#date_published').val(field.date_published);
        console.log('date_published', result.date_published);
        console.log('date_expire', result.date_expire);
        localStorage.setItem('dateFrString', result.date_published);
        localStorage.setItem('dateToString', result.date_expire);
    });


    // });
}



//getInitQuizData();

function getQuizData() {


    var myDivision2 = localStorage.getItem('user_division');
    var endDate = localStorage.getItem('dateToString');



    $.get( "http://ec2-54-191-6-205.us-west-2.compute.amazonaws.com/fizzquizzserver/index.php/jsonQuiz/"+ myDivision2 +"/"+ endDate, function( data ) {
        // $( ".result" ).html( data );
        console.log(data);
        // alert( "Load was performed." );
        localStorage.setItem('QuizData', data);
    });


}


//getQuizData();




function checkQuizTake() {
    var checkAttempt = localStorage.getItem('checkLQuiz');
    var checkDateFrString = localStorage.getItem('dateFrString');
   // $('#modal1').show();

    Date.parse(checkAttempt);
    Date.parse(checkDateFrString);
    //console.log("checkAttempt:", checkAttempt);
    //console.log("checkDateFrString", checkDateFrString);
    if (checkAttempt == checkDateFrString) {
        console.log("2nd Time");
        // $('#popupDialog').show();
        // $('#playQuiz').hide();
        alert("Thank you for taking the quiz! See you for the next rounds.");
        window.location.replace("main.html");

    } else {
        console.log("First Time");
        $('#playQuiz').removeAttr('disabled');
      //  videoScreen();
       // window.open(base_url + "/app/views/media/video.php", "_blank", "location=no", "closebuttoncaption=Return");
        window.open(base_url + "/app/views/media/teaser.html", "_blank", "location=no", "closebuttoncaption=Return");

    }
}


$('#playQuiz').on('click', function () {
    $('#raysDemoHolder').hide();
})




