$(document).ready(function () {
    $('#loader').show();
    setTimeout(myLoading, 3000);

    function myLoading() {

        $('#loader').hide();

    }

});

function loaderSpin() {

    $('#loader').show();
    setTimeout(myLoading, 3000);

    function myLoading() {

        $('#loader').hide();

    }

}







$(document).ready(function () {

    setTimeout(buttonAnimate, 3000);
        function buttonAnimate() {

            $('.main-buttons li').addClass('animated bounceInDown');

        }

        $('#userProf').on('click', function(){

            window.location = 'main.html';
            //$('.main-buttons li a').addClass('animated zoomIn');
        });

    $('#playGameBtn').on('click', function() {
        $('#videoPlayer').hide();
        $('#playBack').hide();
        window.location='';

    })


});


$('ul.answers li input').addClass('checkAnswer');


function loadQuestions(){

    $.ajax({
        type: 'GET',

        url: base_url + '/adminer/jsonquest.php',
        data: { get_param: 'value' },
        success: function (data) {
            // quizJSON = data;
            //var quizJSON = data;
            //alert(data);
            // localStorage.quizdata = data;

            // THIS IS ALREADY STRINGIFIED
           // var string = data;
            var string = data;

// DO NOT STRINGIFY AGAIN WHEN WRITING TO LOCAL STORAGE
            localStorage.setItem('quizdata', string);

            // READ STRING FROM LOCAL STORAGE
            // var retrievedObject = localStorage.getItem('quizJSON');
            var quizJSON = localStorage.getItem('quizdata');

// CONVERT STRING TO REGULAR JS OBJECT
            //var parsedObject = JSON.parse(retrievedObject);
           // var parsedObject = JSON.parse(quizJSON);
           // var parsedObject = JSON.stringify(quizJSON);
            console.log(quizJSON);
            //$('#cand').val(quizJSON);



           // document.write(quizJSON);
        }



    })
}



//loadQuestions();



function loadQuestions2(){

    $.ajax({
        type: 'GET',

        url: base_url + '/index.php/jsoncode2',
        data: { get_param: 'value' },
        success: function (data) {
            // quizJSON = data;
            var quizJSON = data;
            //alert(data);
           // localStorage.quizdata = data;
            localStorage.quizJSON = data;
            // THIS IS ALREADY STRINGIFIED
            var string = data;

// DO NOT STRINGIFY AGAIN WHEN WRITING TO LOCAL STORAGE
            localStorage.setItem('quizJSON', string);

            // READ STRING FROM LOCAL STORAGE
            // var retrievedObject = localStorage.getItem('quizJSON');
            var quizJSON = localStorage.getItem('quizJSON');

// CONVERT STRING TO REGULAR JS OBJECT
            //var parsedObject = JSON.parse(retrievedObject);
            // var parsedObject = JSON.parse(quizJSON);
            // var parsedObject = JSON.stringify(quizJSON);
            console.log(quizJSON);
            $('#cand').val(quizJSON);



           // document.write(quizJSON);
        }



    })
}
//loadQuestions2();

$(function() {


    $("#aunit").change(function() {

        var $dropdown = $(this);

        $.getJSON("json/data.json", function(data) {

            var key = $dropdown.val();
            var vals = [];

            switch(key) {
                case 'west':
                    vals = data.west.split(",");
                    break;
                case 'central':
                    vals = data.central.split(",");
                    break;
                case 'east':
                    vals = data.east.split(",");
                    break;
                case 'base':
                    vals = ['Please choose from above'];
            }

            var $jsontwo = $("#reg_area");
            $jsontwo.empty();
            $.each(vals, function(index, value) {
                $jsontwo.append("<option>" + value + "</option>");
            });

        });
    });

});




