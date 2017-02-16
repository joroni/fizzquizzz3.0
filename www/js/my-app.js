// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    template7Pages: true,
    precompileTemplates: true
});

// Export selectors engine
var $$ = Dom7;
var alertTitle = 'FizzQuizz';

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: false,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});








function initApp(){

    //  localStorage.removeItem('checkLQuiz');
    //  localStorage.removeItem('recent_quiz');
      localStorage.removeItem('fname');
      localStorage.removeItem('lname');
      localStorage.removeItem('user_division');
      localStorage.removeItem('password');

      var userDataCheck = localStorage.getItem('userData');
      //localStorage.setItem("bottomBar", 'none');

      $$(".toolbar.bottom").hide();

      if (userDataCheck != 0) {
        myProfile();
        pullFreshQuizItems();
        check_storage();
        validateMyTurn();
        //scanIfQuizAvailable();

        LoggedInButtons();

          mainView.router.loadPage("#welcome");

       }else{
         LoggedOutButtons();
        // mainView.router.loadPage("auth.html");

         myApp.onPageInit('login-screen', function (page) {
           var pageContainer = $$(page.container);
           pageContainer.find('.list-button').on('click', function () {
             var username = pageContainer.find('input[name="username"]').val();
             var password = pageContainer.find('input[name="password"]').val();
             // Handle username and password
             myApp.alert('Username: ' + username + ', Password: ' + password, function () {
               mainView.goBack();
             });
           });
         });

       }
}


initApp();


$$('.hide-toolbar').on('click', function () {
  //  mainView.hideToolbar();
    //  $$("#bottomBtns, .toolbar.bottom").hide();
      $$(".toolbar.bottom").hide();
        $$('.homeButtonLink').hide();

});

$$('.show-toolbar').on('click', function () {
  //  mainView.showToolbar();
    $$("#bottomBtns, .toolbar.bottom").show();

});

 ///

/* @TODO FizzQuizzAWS credentials */
// Setup your FizzQuizzAWS applicationId and API key
var applicationId = 'xxx';
var restApiKey = 'yyy';


localStorage.setItem("bottomBar", 'none');

var bottomBar = localStorage.getItem('bottomBar');

// Funcion to handle Cancel button on Login page
/*$$('#cancel-login').on('click', function() {
    // Clear field values
    $$('#user_name_input').val('');
    $$('#user_pass_input').val('');
});
*/
$$('.view').addClass('theme-red layout-light');
/*
$('.view').append('<div class="toolbar bottom" style="display:'+bottomBar+';">'+
                                '<div class="toolbar-inner">'+
                                  '<a href="#welcome" class="link">Welcome y</a>'+
                                  '<a href="#index" class="link">Index x</a>'+
                              '</div>');
*/
var base_url = "http://ec2-54-191-42-126.us-west-2.compute.amazonaws.com/fizzquizzserver";


function noNet(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success) {
                    success(JSON.parse(xhr.responseText));
                }
            } else {
              //  window.location.replace("nonet.html");
                myApp.alert('Oooops, you are offline!', alertTitle);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

noNet(base_url + '/json.php',
    function(data) {
        for (i = 0; i < data.length; i++) {
            //document.getElementById("result1").innerHTML += '<li> ' + data[i]['name'] + '</li>';
            console.log(data[i]['name']);
        }
    }
);
// END connection to server



// START checking if user is logged
function check_storage() {

    if (localStorage['userlogin']) {
        //  $ionicModal.fromTemplateUrl('templates/login.html');
        //	window.location.replace("main.html");
        mainView.router.load({
            template: Template7.templates.welcomeTemplate,
            context: {
                //  name: username
            }
        });

        $$('.center').css('width', 'auto');
        $$('.center').css('text-align', 'center');
        $$('.center > img').css('margin', '0 auto');
        LoggedInButtons();
        console.log('logged');
    //    runScanProfile();
        scanIfQuizAvailable();
        validateMyTurn();
    } else {
        console.log('err');



        LoggedOutButtons();


    }

}
check_storage();
// END checking if user is logged



// START login
function signin() {
    myApp.showIndicator();
    var user_name_input = $('#user_name_input')
        .val();
    var user_pass_input = $('#user_pass_input')
        .val();


    var user_name = user_name_input;
    var password = user_pass_input;
    $.post(base_url + '/loginuser', {

        username: user_name_input,
         password: user_pass_input
      //  username, password
    }).done(function(data) {
        if (data == 0) {
            LoggedOutButtons();
            myApp.hideIndicator();
            //  if (!username || !password){
            myApp.alert('Username and Password incorrect', alertTitle);
            //return;
            //}


            /*  $('#login_username_error')
                  .show();
              $('#login_password_error')
                  .show();*/
        } else if (data == 1) {

            LoggedInButtons();

            myProfile();
            var myfirstname = localStorage.getItem("fname");
            var mylastname = localStorage.getItem("lname");
            var myusername = localStorage.getItem("userlogin");
            var myemail = localStorage.getItem("email");
            var mydivision = localStorage.getItem("division");
            $('#userfirstname, .profile-firstname').text(myfirstname);
            $('#userusername, .profile-id').text(myusername);
            $('#userlastname, .profile-lastname').text(mylastname);
            $('#useremail, .profile-email').text(myemail);
            $('#userdivision, .profile-division').text(mydivision);
        //    getQuizEndDate();


            validateMyTurn();
            pullFreshQuizItems();
          //  get_Quiz_History();

            //myProfile();


            //get_Quiz_History();

            localStorage.setItem("userlogin", user_name_input);


            localStorage.setItem("userData", data);

          //  console.log("get_Quiz_History")
            console.log('Response body: ' + data);

            // Will pass context with retrieved user name
            // to welcome page. Redirect to welcome page
            mainView.router.load({
                template: Template7.templates.welcomeTemplate,
                context: {
                    name: username
                }
            });
            initApp();
            myApp.hideIndicator();

            myApp.showIndicator();
            scanIfQuizAvailable();
            myApp.hideIndicator();

            myApp.showIndicator();
            initApp();
            myApp.hideIndicator();


              myApp.showIndicator();
              validateMyTurn();
                myApp.hideIndicator();

            //	window.location.href = "main.html";

        }
    });
}
// END login


/*function update_cancel() {
    $('#profileContent').show();
    $('#editmyProfile').hide();
}
*/

function update_user() {
    myApp.showIndicator();
   var id = $('#user_id').val();
    var username = $('#username').val();
    var password = $('#update_password').val();
    var fname = $('#update_firstname').val();
    var lname = $('#update_lastname').val();
    var user_email = $('#email').val();
   // var division = $('#division').val();
    var user_division = $('#division').val();
    var aunit = $('#unit').val();
    var area = $('#area').val();
    // var privilege = $('#user_privilege').val();

    $.post(base_url + '/update/user', {
        username: username,
        password: password,
        fname: fname,
        lname: lname,
        email: user_email
        })

        // $.post(base_url + '/update/user', {username: username, password: password})
        .done(function(data) {
            if (data == 0) {
                myApp.hideIndicator();
                myApp.alert('Please try again.', alertTitle);
                return false;
               // $('#update_0').show();

            } else if (data == 1) {

                //$('#update_1').show();

              //  $('.profile-content').show();
                //$('#editmyProfile').hide();
                //$('#user_id').text(id);

                /*$('#user_name').text(username);*/
                $('#user_password').text(password);
                $('#user_firstname').text(fname);
                $('#user_lastname').text(lname);
                $('#user_division').text(user_division);
                $('#user_email').text(user_email);
                myApp.hideIndicator();
                myApp.alert('Successfully Updated.', alertTitle);
                return;

                mainView.router.loadPage('#index');
                initApp();
              //  window.location.reload();
            }
        });

}
function edittheProfile() {

    //alert('profile');
    /*  $('#profileContent')
        .hide();
    $('#editmyProfile')
        .show();
*/
}

function showImageLoader() {
    $('#capturePhoto')
        .show();
    imageProfile();
}

function imageProfile() {

    $(document)
        .ready(function() {

            $('#user_iddddddd')
                .val(localStorage.getItem('user_id'));

            var options = {
                // target: '#upload_loading',
                beforeSubmit: showRequest,
                // correctOrientation: true,
                success: showResponse
            };
            $('#myForms')
                .ajaxForm(options);
        });

    function showRequest(formData, jqForm, options) {
        var queryString = $.param(formData);
        console.log(formData);
    }

    function showResponse(responseText, statusText, xhr, $form) {

        // $('#loader-mini').show();
        console.log(statusText);
        console.log(responseText);
        if (statusText == 'success') {
            // $('#page_loader_cb').fadeOut(100);

            $('#upload_input')
                .val('');

            //  $('#upload_input').val('');
            console.log('upload complete');

            //   $('#loader-mini').hide();
            /*$('#smallImage').val('');
             $('#largeImage').val('');*/
            if (responseText == '0') {
                console.log('Error or file not supported! required format :png,gif,jpeg sie: less than 3mb');
            } else {
                console.log('Upload success!');
                //   navigator.notification.alert('Process complete');
                myApp.alert('Process complete', alertTitle);
                //$('#capturePhoto').hide();
                window.location.reload();

            }
        }
    }

}




function messageTimer(){
var startQuiz = new Date();
startQuiz=new Date(startQuiz.getTime());
var timeOut = +10;
$("#defaultCountdown.timer").countdown({
  until: timeOut,
  onExpiry: liftOff});

function liftOff() {
$$("#defaultCountdown.timer").hide();
  $$('.view').append('<div id="bottomBtns" class="toolbar bottom" style="display: block;">'+
                                  '<div class="toolbar-inner">'+
                                    '<a href="#index" onclick="hideToolbar();" class="link hide-toolbar" style="color:gray;"">CANCEL</a>'+
                                    '<a href="#quizgame"  onclick="hidemyToolbar();"  class="link hide-toolbar" style="color:green;">PROCEED</a>'+
                                  //  '<a href="game.html"  class="link hide-toolbar" style="color:green;">PROCEED</a>'+
                                '</div>');
  // myApp.alert('We have lift off!');
  }

}

$$('.right, a.close-popup').css("z-index", "10500 !important");
$$('a.close-popup').css("cursor", "pointer");
$$('a.close-popup').on('click', function () {
  myApp.closeModal('.picker-info')
});




function hideToolbar() {
    $$("#bottomBtns, .toolbar.bottom").hide();
    $$("#videosplash").addClass('cached');

}


function hidemyToolbar() {

  var loc =  "game.html";

       // document.getElementById("myFrame").setAttribute("src", loc);
    $$("#myFrame").attr("src", loc);
      $$(".toolbar.bottom").hide();
  //  $$("#bottomBtns, .toolbar.bottom").hide();
    $$("#videosplash").addClass('cached');
    $$(".homeButtonLink").hide();

}

function log_out() {
    localStorage.removeItem('userlogin');
    //  window.location.replace("index.html");
    window.localStorage.clear();


    mainView.router.load({
        template: Template7.templates.index

    });
    LoggedOutButtons();

}







$(function() {


    $$("select.reg_aunit_input").change(function() {

        var $dropdown = $(this);

        $.getJSON("json/data.json", function(data) {

            var key = $dropdown.val();
            var vals = [];

            switch (key) {
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







function LoggedInButtons() {
    $$('.login-button, .register-button').hide();
    $$('.logout-button').show();
    $$('.right > a').show();
    $$('#welcomenav').removeClass('cached');

}


function LoggedOutButtons() {
    $$('.login-button, .register-button').show();
    $$('.logout-button').hide();
    $$('.right > a').hide();
  //  $$('#welcomenav').addClass('cached');
}

function loadPages() {

    pullFreshQuizItems();
  //   var loc = base_url+"/app/views/media/teaser.html?callback=onDeviceReady();";

  // START countdown



  $$('.view').append('<div id="defaultCountdown" class="timer"></div>');
  messageTimer();


  // END countdown



//     var loc =  base_url+"/app/views/media/teaser.html";
     // document.getElementById("myFrame").setAttribute("src", loc);
  //   $$("#myFrame").attr("src", loc);

      $$("#bottomBtns, .toolbar.bottom").show();
      $$(".raysDemo").removeClass('hidden');
      $$(".play-quiz").css('display', 'block !important');


     mainView.router.load({
          template: Template7.templates.videosplashTemplate,
          context: {
              //  name: username
          }
      });


    /*  $('#toolbarHold').appendChild('<div class="toolbar bottom" style="display:block !important;">'+
                                      '<div class="toolbar-inner">'+
                                        '<a href="#welcome" class="link">Welcome y</a>'+
                                        '<a href="#about" class="link">Skip</a>'+
                                    '</div>');*/
}




function getStart() {

//  $('#theGame').load('game.html');


  //  $$("#raysDemoHolder").show();
  //  $$("#getStarted2").hide();
//    $$("#raysDemoHolder").toggleClass('hidden');
  //  $$("#welcome").addClass("cached");
}

// START Register
function register() {

    myApp.showIndicator();


    var username = $('#reg_username').val();
    var password = $('#reg_password').val();
    var fname = $('#reg_fname').val();
    var lname = $('#reg_lastname').val();
    var email = $('#reg_email').val();
    var division = $('#reg_division').val();
    var aunit = $('#reg_aunit').val();
    var area = $('#reg_area').val();
    var lang = $('#reg_lang').val();


    if (username == '' || password == '' || fname == '' || lname == '') {

        if (username == '') {
            $('#reg_username_err').show();
        }
        if (password == '') {
            $('#reg_password_err').show();
        }
        if (fname == '') {
            $('#reg_fname_err').show();
        }
        if (lname == '') {
            $('#reg_lastname_err').show();
        }
        if (email == '') {
            $('#reg_email_err').show();
        }
        if (division == '') {
            $('#reg_division_err').show();
        }
        if (aunit == '') {
            $('#reg_aunit_err').show();
        }
        if (area == '') {
            $('#reg_area_err').show();
        }
        if (lang == '') {
            $('#reg_lang_err').show();
        }
        console.log('err empty field');
        myApp.hideIndicator();
        myApp.alert('Fields should not be empty.', alertTitle);
    } else {


        $.post(base_url + '/register/user', {
                username: username,
                password: password,
                fname: fname,
                lname: lname,
                email: email,
                division: division,
                aunit: aunit,
                area: area,
                lang: lang
            })
            .done(function(data) {
                if (data == 0) {
                    if (username == '') {
                        $('#reg_username_err').show();
                    }
                    if (password == '') {
                        $('#reg_password_err').show();
                    }
                    if (fname == '') {
                        $('#reg_fname_err').show();
                    }
                    if (lname == '') {
                        $('#reg_lastname_err').show();
                    }
                    if (email == '') {
                        $('#reg_email_err').show();
                    }
                    if (division == '') {
                        $('#reg_division_err').show();
                    }
                    if (aunit == '') {
                        $('#reg_aunit_err').show();
                    }
                    if (area == '') {
                        $('#reg_area_err').show();
                    }
                    if (lang == '') {
                        $('#reg_lang_err').show();
                    }

                    myApp.alert('Fields should not be empty.', alertTitle);
                    console.log('err empty field');
                } else if (data == 1) {
                    //  localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                    localStorage.setItem("email", email);
                    localStorage.setItem("fname", fname);
                    localStorage.setItem("lname", lname);
                    localStorage.setItem("user_id", username);
                    localStorage.setItem("userlogin", username);
                    localStorage.setItem("user_division", division);
                    localStorage.setItem("division", division);
                    localStorage.setItem("aunit", aunit);
                    localStorage.setItem("user_aunit", aunit);
                    localStorage.setItem("area", area);
                    localStorage.setItem("user_area", area);
                    localStorage.setItem("lang", lang);
                    localStorage.setItem("checkLQuiz", '2017-01-01');
                    myApp.hideIndicator();
                    myApp.alert(data + 'Registration Successful.', alertTitle);
                    initApp();

                } else {
                    myApp.hideIndicator();
                    myApp.alert(data + 'User Name is already taken.', alertTitle);
                    $('#reg_username').val('');
                    console.log('err');
                    return;
                    //  alert(data);
                }
            });



    }



}
// END Register

/*var bottomShow = localStorage.getItem('bottomBar');
if (bottomShow === 'show') {
  $('.toolbar.bottom').show();
}else {
  $('.toolbar.bottom').hide();
}*/
function get_Quiz_History() {

    var user_id = localStorage.getItem('user_id');
    $('#output')
        .html('<th colspan="4" style="padding: 10px; background: silver; color:#fff; text-align: center;">Stat</th>');
    $.getJSON(base_url + '/get_user_quiz_history/' + user_id, function(results) {
  $('#output').empty();
        //$.each(result, function ( i, field ) {
        $.each(results, function(i, fields) {

            $("#output")
                .append('<tr><td><label>Set</label></td><td> ' + fields.datefrom + ' </td>'+
                '<td><label>Score</label></td><td>' + fields.score_bottle + '</td></tr>');

            /*********** RUN ONLY ONCE JUST TO GET THE DATE FROM LAST ROW ON THE TABLE ****************/
            $('#output2').append('<li> ' + fields.datefrom + ' </li>');

            var checkLQuiz = $("#output2 li:nth-child(1)").text();
            console.log("checkLQuiz", checkLQuiz);
            localStorage.setItem('checkLQuiz', checkLQuiz);



        });
    })
}
/******************************************/




/******************************************/


function myProfile() {
    var user = localStorage.getItem('userlogin');
    //loaderSpinMini();

    myApp.showIndicator();
    $.getJSON(base_url + '/get_user_details/' + user, function(result) {

        $.each(result, function(i, field) {
            // $("#output").append("<tr><td>Username:  "+ field.username + " </td></tr><tr><td>Password: "+ field.password + "</td></tr>");
            //  $('#userid').val(field.id);
            $('#username').val(field.username);
            $('#password, #update_password').val(field.password);
            $('#firstname, #update_firstname').val(field.fname);
            $('#lastname, #update_lastname').val(field.lname);
            $('#email').val(field.email);
            $('#division').val(field.division);
            $('#unit').val(field.aunit);
            $('#area').val(field.area);
            $('#avatar').val(field.avatar);

            if ($('#avatar').val() == "" || $('#avatar').val() == null) {
                var profile_photo = base_url + '/upload/files/' + 'daenerys.png';
            } else {
                var profile_photo = base_url + '/upload/files/' + field.avatar;
            }

            //var profile_photo =  base_url + '/upload/files/' + field.avatar;
            // $('#avatar').html('<div class="avatar" style="background-image: url("+ profile_photo +")');
            $('#avatar, .profile-image').css('background-image', 'url(' + profile_photo + ')');
            $("#avatar, .profile-image").empty();
            //for profile
            $('#userfirstname').text(field.fname);
            $('#userusername').text(field.username);
            $('#userlastname').text(field.lname);
            $('#useremail').text(field.email);
            $('#userdivision').text(field.division);
            $('#userunit').text(field.aunit);
            $('#userarea').text(field.area);
            //  $('#avatar').text(field.avatar);
            $('#avatar').text("");

            //$('#user_id').text(field.id);
            $('#user_name')
                .text(field.username);
            $('#user_username')
                .text(field.username);
            $('#user_password')
                .text(field.password);
            $('#user_division')
                .text(field.division);
            $('#user_aunit')
                .text(field.aunit);
            $('#user_firstname')
                .text(field.fname);
            $('#user_lastname')
                .text(field.lname);
            $('#user_email')
                .text(field.email);
            $('#user_privilege')
                .text(field.privilege);



            console.log('ID:', field.id);
            console.log('User Name:', field.username);

            console.log('Password:', field.password);
            console.log(field.fname);
            console.log(field.lname);
            console.log(field.email);
            console.log(field.division);
            console.log(field.aunit);
            console.log(field.area);
            //console.log(field.avatar);


            localStorage.setItem("user_id", field.id);
            localStorage.setItem("username", field.username);
            localStorage.setItem("password", field.password);
            localStorage.setItem("email", field.email);
            localStorage.setItem("fname", field.fname);
            localStorage.setItem("lname", field.lname);
            localStorage.setItem("userlogin", field.username);
            localStorage.setItem("division", field.division);
            localStorage.setItem("user_division", field.division);
            localStorage.setItem("aunit", field.aunit);
            localStorage.setItem("user_aunit", field.aunit);
            localStorage.setItem("area", field.area);
            localStorage.setItem("user_area", field.area);
            localStorage.setItem("lang", field.fname);


            var myfirstname = localStorage.getItem("fname");
            var mylastname = localStorage.getItem("lname");
            var myusername = localStorage.getItem("userlogin");
            var myemail = localStorage.getItem("email");
            var mydivision = localStorage.getItem("division");
            $('#userfirstname, .profile-firstname').text(myfirstname);
            $('#userusername, .profile-id').text(myusername);
            $('#userlastname, .profile-lastname').text(mylastname);
            $('#useremail, .profile-email').text(myemail);
            $('#userdivision, .profile-division').text(mydivision);

            get_Quiz_History();
            myApp.hideIndicator();
        });
    });
}



function myFunction() {
    $("#capturePhoto").hide();
    // window.location.replace("main.html");
}
/*

function loadAnim(){
  $(".views").append("<div id='dots'>Hi</div>")
        var dotCounter = 0;
        (function addDot() {
          setTimeout(function() {
            if (dotCounter++ < 10) {
              $('#dots').append('.');
              addDot();
            }
          }, 1000);
        })();
        }
*/
/*********** RUN ONLY ONCE JUST TO GET THE DATE FROM LAST ROW ON THE TABLE ****************/
function validateMyTurn() {
    //getInitQuizData
    //  localStorage.removeItem("checkLQuiz");
    //localStorage.removeItem("dateFrString");
    //localStorage.removeItem("dateToString");



    var myDivision2 = localStorage.getItem("user_division");
    $$.getJSON(base_url + "/jsonQuiz/" + myDivision2, function(result) {
        console.log("validateMyTurn | date_published", result.date_published);
        console.log("validateMyTurn | date_expire", result.date_expire);
//loadAnim();
        localStorage.setItem("dateToString", result.date_expire);
        localStorage.setItem("dateFrString", result.date_published);

        var dateFrStringVerify = localStorage.getItem("dateFrString").replace(/-/g,'');

        var checkLastQuiz = localStorage.getItem("checkLQuiz").replace(/-/g,'');
        var resultCheck = checkLastQuiz - dateFrStringVerify;
        console.log("validateMyTurn "+ dateFrStringVerify+" - "+checkLastQuiz+" = "+ resultCheck);

        if (resultCheck == 0) {

          console.log("NO UPDATES YET.");
	         $$('.simple-list li.status').html('	<div id="getStarted3" style="display:block; color:#d10000 !important; font-weight:700; width: 100%; text-align:center;">SEE YOU ON THE NEXT ROUNDS...</div>');
         }

         else {

            console.log("HAS NEW UPDATES!");
              $$('.simple-list li.status').html('<a href="#" id="getStarted2" onclick="loadPages();"  class="button show-toolbar" style="color:#d10000; display:block; font-weight:700;"></a>');


        }



    });
}




/*********** GETTING THE QUESTIONS AND ANSWER SCRIPT  ****************/
/*
function ConfirmOk() {

    $("#pop-alert").hide();
    window.location.replace("fizzquizzData.html");
}


function letterInfo() {
    localStorage.removeItem("QuizData");
    $("#pop-alert").hide();
    window.location.replace("index.html");
}



function goto_home() {
    window.location.replace("main.html");
}


*/

// Dummy Content
//var songs = ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'];
//var authors = ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'];

// Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');

// Add 'refresh' listener on it
ptrContent.on('ptr:refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {



        mainView.router.refreshPage();


            // Random image
            // var picURL = 'http://hhhhold.com/88/d/jpg?' + Math.round(Math.random() * 100);
            // Random song
            //var song = songs[Math.floor(Math.random() * songs.length)];
            // Random author
            // var author = authors[Math.floor(Math.random() * authors.length)];
            // List item html

/*
            var itemHTML = '<li>' +
                '<div id="raysDemoHolder" class="animated fadeInUpBig" style="width: 250px; height: 250px; margin: 0 auto;">' +
                '<img id="raysLogoCanada" class="icon" src="img/canada-icon.svg">' +
                '<div id="rays" class=""></div>' +
                '</div>' +
                '</li>' +
                '<li><div id="getStarted3" style="display:block; color:#d10000 !important; font-weight:700; width: 100%; text-align:center;">SEE YOU ON THE NEXT ROUNDS...</div></li>';
            // Prepend new list element
            ptrContent.find('ul.icon-canada.simple-list').prepend(itemHTML);*/
            // When loading done, we need to reset it
         //   myApp.pullToRefreshDone();

        }, 200);
    myApp.destroyPullToRefresh(ptrContent);
    });


    /*
     function loadQuestionItems() {
     $$("#raysDemoHolder").toggleClass('hidden');


     }
     */

    /*
     $$("#getStarted2").on("click", function () {
     //$(".checkAnswer").hide();
     //  $("#raysDemoHolder").hide();
     $$("#raysDemoHolder").toggleClass('hidden');
     //  bottomBarShow();
     //  $("#loadQuiz").load("fizzquizzData.html");
     });*/

    function pullFreshQuizItems() { //getQuizData


        var myDivision2 = localStorage.getItem('user_division');
        var endDate = localStorage.getItem('dateToString');


        $.get(base_url + "/jsonQuiz/" + myDivision2 + "/" + endDate, function ( data ) {
            // $( ".result" ).html( data );
            console.log('pullFreshQuizItems |', data);
            // alert( "Load was performed." );
            localStorage.setItem('QuizData', data);

            //  bottomBarShow();


        });


    }

//pullFreshQuizItems();


    /*function runScanProfile(){

     myProfile();

     get_Quiz_History();

     pullFreshQuizItems();

     validateMyTurn();

     }*/


    function scanIfQuizAvailable() {

        setTimeout(myFunctionLoading5, 3000);

        function myFunctionLoading5() {

            //runScanProfile();
            myProfile();

            //get_Quiz_History();

            //   pullFreshQuizItems();

            validateMyTurn();
            myApp.showIndicator();

            setTimeout(myFunctionLoadingOut5, 3000);

            function myFunctionLoadingOut5() {
                myApp.hideIndicator();

            }
        }

    }

//scanIfQuizAvailable();

    /*
     $$('#sendScore').on('click', function() {
     myApp.confirm('Save Score?', alertTitle, function() {

     var user_id = $("#user_id").val();
     var datefromDynamic = $("#datefrom").val();
     var score_bottle = $("#score_bottle").val();
     var attempts = $("#attempts").val();

     var divisions = $("#divisions").val();
     var area = $("#area").val();
     var aunit = $("#aunit").val();

     myApp.showIndicator();
     console.log("Attempts", attempts);

     $.get(base_url + "/user_results_new/update/" + user_id + "/" + datefromDynamic + "/" + area + "/" + divisions + "/" + aunit + "/" + score_bottle, function(data) {


     if (data == 0) {
     //	myApp.hideIndicator();
     myApp.alert("uh oh, try again.", alertTitle);
     // $$("#update_0").show();
     } else if (data == 1) {



     attempts = 1;
     //	myApp.hideIndicator();
     localStorage.setItem("attempts", attempts);


     localStorage.removeItem("QuizData");

     localStorage.setItem("recent_quiz", datefromDynamic);
     //        goto_home();
     myApp.hideIndicator();
     myApp.alert('Score Saved!', alertTitle);

     var	bottomBar = localStorage.getItem("bottomBar");



     /*  mainView.router.load({
     template: Template7.templates.welcomeTemplate,
     context: {
     //  name: username
     }
     });*/
    /*      console.log("score recorded");
     $$('#homeButton').show();
     $$('#sendScore').hide();

     }

     });

     });
     });
     */


    $$('.homeButtonLink').on('click', function () {

      localStorage.removeItem('QuizData');

        $(".raysDemo").show();
        $("#getStarted2").show();
        mainView.router.load({
            template: Template7.templates.welcomeTemplate,
            context: {
                //name: username
            }
        });
        initApp();
          pullFreshQuizItems();
          validateMyTurn();
          scanIfQuizAvailable();


    });


    /**************************** QUIZ SCRIPTS ********************************************/


    // Put all your page JS here
    /*
     $(function () {
     $('#slickQuiz').slickQuiz();
     });
     */
    /*
     var saveBtn = $('#score_bottle').value();
     if (saveBtn != ''){
     $('.send-score').show();
     }
     else {
     $('.send-score').show();
     }*/

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


        function leaderBoard() {


             $(document).ready(function(){

              var loc = "http://ec2-54-191-42-126.us-west-2.compute.amazonaws.com/fizzquizzserver/adminer/mobile_controllers/user_result.php";
              // document.getElementById("myFrame").setAttribute("src", loc);
            $$("#myFrameLeaderBoard").attr("src", loc);

            setTimeout(function () {
                 myApp.showIndicator();
            }, 100);


            setTimeout(function () {
                 myApp.hideIndicator();
            }, 4000);


               $$("#bottomBtns, .toolbar.bottom").show();
               $$(".raysDemo").removeClass('hidden');
               $$(".play-quiz").css('display', 'block !important');


                  })


        }


    /*function playMessage() {
        function onDeviceReady() {

            $.ajax({
                url: base_url + "/getvideo/single",
                dataType: "json",
            }).success(function ( data ) {
                for (i = 0; i < data.length; i++) {
                    var videoFile = data[i]["video"];
                    var nameFile = (data[i]["name"]);


                    $("video").html("<source src=  '+ videoFile + '><meta property='og:video:secure_url' content='+ videoFile + ' > <meta property='og:video:type' content='video/mp4'>");
                    console.log(nameFile);
                    console.log(videoFile);
                }

            });
        }
    }*/
    //var loc = video
      //document.getElementById("myVideoList").setAttribute("src", loc);
    //  $$("#myVideoList").attr("src", loc);
    function messagesList() {



 mainView.router.load("#messages");

      var loc =  base_url + "/getvideos";
       document.getElementById("myFrameList").setAttribute("src", loc);
       //$("#myFrameList").attr("src", loc);

       setTimeout(function () {
            myApp.showIndicator();
       }, 100);


       setTimeout(function () {
            myApp.hideIndicator();
       }, 4000);

        // myApp.hideIndicator();
      /*  mainView.router.load({
            template: Template7.templates.videosplashTemplate,
            context: {
                //  name: username
            }
        });
*/
//  myApp.hideIndicator();
}



    function showQuestions() {

        $(".raysDemo").removeClass('fadeInUpBig');
        $(".raysDemo").addClass('fadeOut animated');
        $(".raysDemo").css('top', '-9999px');

        function onDeviceReady() {

            $.ajax({
                url: base_url + "/getvideo/single",
                dataType: "json",
            }).success(function ( data ) {
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


        setTimeout(function () {
            $(".raysDemo").hide();
        }, 600);


    }




    /*	$("li.question:last-child > .nextQuestion").on('click',function(){


     $('.send-score').show();

     });*/


    function post_score_new() {

        myApp.showIndicator();
        var user_id = $("#user_id").val();
        var datefromDynamic = $("#datefrom").val();
      //  var datefromNewQuiz = $(".quiz_datefrom").val();
        var score_bottle = $("#score_bottle").val();
        var attempts = $("#attempts").val();

        var divisions = $("#divisions").val();
        var area = $("#area").val();
        var aunit = $("#aunit").val();


        console.log("Attempts", attempts);


        $.get(base_url + "/user_results_new/update/" + user_id + "/" + datefromDynamic + "/" + area + "/" + divisions + "/" + aunit + "/" + score_bottle, function ( data ) {


            if (data == 0) {
                myApp.hideIndicator();
                myApp.alert("uh oh, try again.", alertTitle);

            } else if (data == 1) {
                attempts = 1;
              //  localStorage.setItem("checkLQuiz", datefromNewQuiz);
                localStorage.setItem("recent_quiz", datefromDynamic);
                localStorage.setItem("attempts", attempts);

                //localStorage.setItem("bottomBar", 'show');
                console.log("score recorded");
                //$(".toolbar.bottom").show();
                //bottomBarShow();
                myApp.hideIndicator();
                myApp.alert("Score Recorded!", alertTitle);
                initApp();
                /*  goToStart();


                 function goToStart() {

                 setTimeout(function(){
                 myApp.showIndicator();
                 $$('#welcome').addClass('cached');
                 initApp();

                 }, 3000);*
                 myApp.hideIndicator();*/
              //  mainView.router.loadPage('index.html');
            /*    setTimeout(function(){

                  window.location.reload();
              }, 3000);*/

                //$$('#welcome').removeClass('cached');


                /*  mainView.router.load({
                 template: Template7.templates.welcomeTemplate,
                 context: {
                 //  name: username
                 }
                 });*/
                //initApp();

            }


        });




    }


    $$('#checkforquiz').on('click', function () {

        mainView.router.load({
            template: Template7.templates.refresherTemplate,
            context: {
                //name: username
            }
        });

        $('.page-on-left').addClass('cached');

        // myApp.showIndicator();
        // mainView.router.refreshPage();
        // mainView.router.reloadPreviousPage('#welcome');
        // myApp.hideIndicator();


        setTimeout(function () {
            mainView.router.load({
                template: Template7.templates.welcomeTemplate,
                context: {
                    //name: username
                }

            });
            initApp();
        }, 3000);


    });


    function getQuizEndDate() {


        var myDivision2 = localStorage.getItem('user_division');
        //  var endDate = localStorage.getItem('dateToString');


        $.get(base_url + "/jsonQuiz/" + myDivision2, function ( data ) {
            // $( ".result" ).html( data );
            console.log('getQuizEndDate |', data);
            // alert( "Load was performed." );
            localStorage.setItem('QuizQuickData', data);
            localStorage.getItem('dateToString', data.date_expire);


        });


    }


    function pullFreshQuizItems() {


        var myDivision2 = localStorage.getItem('user_division');
        var endDate = localStorage.getItem('dateToString');


        $.get(base_url + "/jsonQuiz/" + myDivision2 + "/" + endDate, function ( data ) {
            // $( ".result" ).html( data );
            console.log('pullFreshQuizItems |', data);
            // alert( "Load was performed." );
            localStorage.setItem('QuizData', data);


        });


    }



  $$(".toolbar.bottom").hide();

    myApp.hideIndicator();
