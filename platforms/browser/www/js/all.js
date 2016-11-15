//$(function() {
//Enable swiping...
var base_url = "http://ec2-54-191-6-205.us-west-2.compute.amazonaws.com/fizzquizzserver";
/* $("#swipe_menu").swipe( {
	//Generic swipe handler for all directions
	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		 if(direction == 'right'){
			 console.log('open menu');
			 $('.mdl-layout__drawer-button').trigger('click');
		 }
	},
	//Default is 75px, set to 0 for demo so any distance triggers swipe
   threshold:0
});
});

function playMovie() { */
    /*$("video").on('click', function(){


    });*/

//}




function fillmod() {
    //document.getElementById("mod_video").innerHTML = "";

    $.ajax({
        url:base_url + '/app/views/media/index.php/media/1',
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

               // alert('Hi');

              /*  if (empty(video_db)) {
                } else {
                    document.getElementById("mod_video").innerHTML = '<video width="290" height="200" controls> <source src="http://104.238.96.209/~project/db/app/views/audio/' + video_db + '" type="video/mp4"></video>';
                }

                if (empty(audio_db)) {
                } else {
                    document.getElementById("mod_audio").innerHTML = '<audio controls> <source src="http://104.238.96.209/~project/db/app/views/audio/' + audio_db + '" type="audio/mpeg"></video>';
                }

                if (empty(image_db)) {

                } else {
                    document.getElementById("mod_img").innerHTML ="<img src='http://104.238.96.209/~project/db/app/views/audio/" +item.image + "'>";

                }

                if (empty(text_db)) {

                } else {xx

                    if (sessionStorage.getItem("lang")=='f' && !(empty(textF_db))) {
                        document.getElementById("mod_text").innerHTML ="<br><br><center>" +textF_db +"</center><br><br>";
                    }  else {
                        document.getElementById("mod_text").innerHTML ="<br><br><center>" +text_db +"</center><br><br>";
                    }

                }*/
            });
        },
        error: function() {
            alert("Error Loading Message Of Day");
            window.location.replace("#menupage");
        }
    });
}







function noNet(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success){
                    success(JSON.parse(xhr.responseText));
					}
            }else {
				window.location.replace("nonet.html");
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}



noNet(base_url +'/json.php',
         function(data) {
				for(i = 0; i < data.length; i++) {
					//document.getElementById("result1").innerHTML += '<li> ' + data[i]['name'] + '</li>';
					console.log(data[i]['name']);
				}
		 }
);





