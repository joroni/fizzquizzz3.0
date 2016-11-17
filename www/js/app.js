/*

 // Store
 localStorage.setItem("lastname", "Smith");
 // Retrieve
 document.getElementById("result").innerHTML = localStorage.getItem("lastname");

 */




htmlspecialchars = function(s) {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, "-");;
};

function check_storage(){

	if (localStorage['userlogin']) {
		window.location.replace("main.html");
		console.log('goto main.html');
	}else{
		console.log('err');
		//window.location.replace("index.html");
	}

}
check_storage();


// register
function register(){

	var username = htmlspecialchars($('#reg_username').val());
	var password = htmlspecialchars($('#reg_password').val());
	var fname = htmlspecialchars($('#reg_fname').val());
	var lname = htmlspecialchars($('#reg_lastname').val());
	var email = htmlspecialchars($('#reg_email').val());
	var division = htmlspecialchars($('#division').val());
	var aunit = htmlspecialchars($('#aunit').val());
	var area = htmlspecialchars($('#reg_area').val());
	var lang = htmlspecialchars($('#reg_lang').val());
	/*var username = $('#reg_username').val();
	 var password = $('#reg_password').val();
	 var fname = $('#reg_fname').val();
	 var lname = $('#reg_lastname').val();
	 var email = $('#reg_email').val();
	 var division = $('#division').val();
	 var aunit = $('#aunit').val();
	 var area = $('#reg_area').val();
	 var lang = $('#reg_lang').val();*/

	if(username == '' || password == '' || fname == '' || lname == ''){

		if(username == ''){ $('#reg_username_err').show(); }
		if(password == ''){ $('#reg_password_err').show(); }
		if(fname == ''){ $('#reg_fname_err').show(); }
		if(lname == ''){ $('#reg_lastname_err').show(); }
		if(email == ''){ $('#reg_email_err').show(); }
		if(division == ''){ $('#reg_division_err').show(); }
		if(aunit == ''){ $('#reg_aunit_err').show(); }
		if(area == ''){ $('#reg_area_err').show(); }
		if(lang == ''){ $('#reg_lang_err').show(); }
		console.log('err empty field');
	}else{


		$.post( base_url + '/index.php/register/user', { username: username, password: password, fname: fname, lname: lname, email:email, division:division, aunit:aunit,
				area:area, lang:lang })
			.done(function( data ) {
				if(data == 0){
					if(username == ''){ $('#reg_username_err').show(); }
					if(password == ''){ $('#reg_password_err').show(); }
					if(fname == ''){ $('#reg_fname_err').show(); }
					if(lname == ''){ $('#reg_lastname_err').show(); }
					if(email == ''){ $('#reg_email_err').show(); }
					if(division == ''){ $('#division_err').show(); }
					if(aunit == ''){ $('#aunit_err').show(); }
					if(area == ''){ $('#reg_area_err').show(); }
					if(lang == ''){ $('#reg_lang_err').show(); }
					console.log('err empty field');
				}else if(data == 1){
					localStorage.setItem("username", username);
					localStorage.setItem("password", password);
					localStorage.setItem("email", email);
					localStorage.setItem("fname", fname);
					localStorage.setItem("lname", lname);
					localStorage.setItem("userlogin", username);
					localStorage.setItem("division", division);
					localStorage.setItem("aunit", aunit);
					localStorage.setItem("area", area);
					localStorage.setItem("lang", lang);

					window.location.href = "main.html";

				}else {
					alert(data);
					$('#reg_username').val('');
					$('#user_taken').show();
					console.log('err');
				}
			});



	}

}


function login(){
	var user_name_input = $('#user_name_input').val();
	var user_pass_input = $('#user_pass_input').val();
	/*
	 if (localStorage['userlogin']) {
	 window.location.repla ce("user.html");
	 console.log('goto user.html');
	 }else{

	 var user_name_input = $('#user_pass_input').val();
	 var user_pass_input = $('#user_pass_input').val();

	 var username = localStorage.getItem("username");
	 var password = localStorage.getItem("password");


	 if(user_name_input == '' || user_pass_input == ''){
	 if(user_name_input == ''){ $('#login_username').show(); }
	 if(user_name_input == ''){ $('#login_password').show(); }
	 }else{
	 if(user_name_input == username && user_name_input == password){
	 localStorage.setItem("userlogin", username);
	 window.location.href = "user.html";
	 }else{
	 $('#login_username_error').show();
	 $('#login_password_error').show();
	 console.log('user error');
	 }
	 }
	 }
	 */

	$.post( base_url + '/index.php/loginuser', { username: user_name_input, password: user_pass_input })
		.done(function( data ) {
			if(data == 0){
				$('#login_username_error').show();
				$('#login_password_error').show();
			}else if(data == 1){
				localStorage.setItem("userlogin", user_name_input);
				get_Quiz_History();
				console.log("get_Quiz_History")
				window.location.href = "main.html";

			}
		});

	/*$.post( "http://ec2-54-191-6-205.us-west-2.compute.amazonaws.com/fizzquizzserver/index.php/media", { is_live: 1 })
	 .done(function( data ) {
	 if(data == 0){
	 //$('#login_username_error').show();
	 $('#fixed-tab-home').html('error');
	 }else if(data == 1){
	 //localStorage.setItem("userlogin", user_name_input);
	 //window.location.href = "main.html";
	 $('#fixed-tab-home').html();
	 }
	 });*/

}


