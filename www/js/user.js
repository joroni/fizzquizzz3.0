function log_out() {
    localStorage.removeItem('userlogin');
    window.location.replace("index.html");
    window.localStorage.clear();

}

var base_url = "http://ec2-54-191-6-205.us-west-2.compute.amazonaws.com/fizzquizzserver";

$(function () {
    var user = localStorage.getItem('userlogin');

    /*if (userlogin != 'blank') {
        window.location.replace("main.html");
    }

*/


    $.getJSON(base_url + '/index.php/get_user_details/' + user, function ( result ) {
        $.each(result, function ( i, field ) {
            // $("#output").append("<tr><td>Username:  "+ field.username + " </td></tr><tr><td>Password: "+ field.password + "</td></tr>");
            //  $('#userid').val(field.id);
            $('#username').val(field.username);
            $('#password').val(field.password);
            $('#firstname').val(field.fname);
            $('#lastname').val(field.lname);
            $('#email').val(field.email);
            $('#division').val(field.division);
            $('#unit').val(field.aunit);
            $('#area').val(field.area);
            $('#avatar').val(field.avatar);

            var profile_photo =  base_url + '/upload/files/' + field.avatar;
           // $('#avatar').html('<div class="avatar" style="background-image: url("+ profile_photo +")');
            $('#avatar').css('background-image', 'url(' + profile_photo + ')');
            //for profile
            $('#userfirstname').text(field.fname);
            $('#userusername').text(field.username);
            $('#userlastname').text(field.lname);
            $('#useremail').text(field.email);
            $('#userdivision').text(field.division);
            $('#userunit').text(field.aunit);
            $('#userarea').text(field.area);



            //$('#user_id').text(field.id);
            $('#user_name').text(field.username);
            $('#user_username').text(field.username);
            $('#user_password').text(field.password);
            $('#user_division').text(field.division);
            $('#user_firstname').text(field.fname);
            $('#user_lastname').text(field.lname);
            $('#user_email').text(field.email);
            $('#user_privilege').text(field.privilege);


            console.log('ID:', field.id);
            console.log('User Name:', field.username);

            console.log('Password:', field.password);
            console.log(field.fname);
            console.log(field.lname);
            console.log(field.email);
            console.log(field.division);
            console.log(field.aunit);
            console.log(field.area);
            console.log(field.avatar);
            localStorage.setItem('user_id', field.id);
            localStorage.setItem('user_division', field.division);
            localStorage.setItem('user_area', field.area);
           // console.log(field.lang);

        });
    });
});

function update_cancel() {
    $('#profileContent').show();
    $('#editmyProfile').hide();
}

function update_user() {
    // var id = $('#user_id').val();
    var username = $('#username').val();
    var password = $('#password').val();
    var fname = $('#firstname').val();
    var lname = $('#lastname').val();
    var user_email = $('#email').val();
    var division = $('#division').val();
    var aunit = $('#unit').val();
    var area = $('#area').val();
    // var privilege = $('#user_privilege').val();

    $.post(base_url + '/index.php/update/user', {
        username: username,
        password: password,
        fname: fname,
        lname: lname,
        user_email: user_email
    })
    // $.post(base_url + '/update/user', {username: username, password: password})
        .done(function ( data ) {
            if (data == 0) {
                $('#update_0').show();

            } else if (data == 1) {
                $('#update_1').show();
                $('.profile-content').show();
                $('#editmyProfile').hide();
                //$('#user_id').text(id);

                /*$('#user_name').text(username);*/
                $('#user_password').text(password);
                $('#user_firstname').text(fname);
                $('#user_lastname').text(lname);
                $('#user_division').text(division);
                $('#user_email').text(user_email);
                /* $('#user_privilege').text(privilege);
                 $('#userid').val(field.id);
                 $('#username').val(field.username);
                 $('#password').val(field.password);
                 $('#firstname').val(field.fname);
                 $('#lastname').val(field.lname);
                 $('#email').val(field.email);
                 */

                /* $('#user_id').text(field.id);
                 $('#user_name').text(field.username);
                 $('#user_username').text(field.username);
                 $('#user_password').text(field.password);
                 $('#user_firstname').text(field.fname);
                 $('#user_lastname').text(field.lname);
                 $('#user_email').text(field.email);
                 $('#user_privilege').text(field.privilege);
                 */
                //window.location.href = "user.html";
            }
        });

}


function edittheProfile() {

    //alert('profile');
    $('#profileContent').hide();
    $('#editmyProfile').show();

}





function imageProfile() {

    $(document).ready(function () {
        $('#user_iddddddd').val(localStorage.getItem('user_id'));

        var options = {
            //target: '#upload_loading',
            beforeSubmit: showRequest,
            success: showResponse
        };
        $('#myForms').ajaxForm(options);
    });

    function showRequest( formData, jqForm, options ) {
        var queryString = $.param(formData);
        console.log(formData);
    }

    function showResponse( responseText, statusText, xhr, $form ) {
        console.log(statusText);
        console.log(responseText);
        if (statusText == 'success') {
            //$('#page_loader_cb').fadeOut(100);
            $('#upload_input').val('');
            console.log('upload complete');
            if (responseText == '0') {
                console.log('Error or file not supported! required format :png,gif,jpeg sie: less than 3mb');
            } else {
                console.log('Upload success!');

            }
        }
    }

}

// bind 'myForm' and provide a simple callback function



/*
 function update_user() {
 var username = $('#username').val();
 var password = $('#password').val();
 var fname = $('#first_name').val();
 var lname = $('#last_name').val();
 var user_email = $('#email').val();

 //  $.post( base_url+'/update/user', { username: username, fname: fname, lname: lname, fname: fname })
 $.post('http://ec2-54-191-6-205.us-west-2.compute.amazonaws.com/fizzquizzserver/index.php/update/user', {username: username, password: password, fname: fname})
 .done(function ( data ) {
 if (data == 0) {
 $('#update_0').show();
 } else if (data == 1) {
 $('#update_1').show();
 $('#user_name').val(field.username);
 $('#first_name').val(field.fname);
 $('#last_name').val(field.lname);
 $('#email').val(field.email);

 $('#user_firstname').text(fname);
 //window.location.href = "user.html";
 }
 });

 }
 */
