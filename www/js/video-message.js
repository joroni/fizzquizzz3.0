function onDeviceReady() {

  $.ajax({

    url: "http://ec2-54-191-42-126.us-west-2.compute.amazonaws.com/fizzquizzserver/getvideo/single",

    dataType: "json",
	}).success(function (data) {
		for (i = 0; i < data.length; i++) {
    		var videoFile = data[i]["video"];
    		var nameFile = (data[i]["name"]);
        var base_url = "http://ec2-54-191-42-126.us-west-2.compute.amazonaws.com/fizzquizzserver";
        var folder = "/app/views/media/";
        console.log(nameFile);
        console.log(videoFile);



  $('video').append('<source src="http://ec2-54-191-42-126.us-west-2.compute.amazonaws.com/fizzquizzserver/'+ folder + videoFile+'">'+
                    '<meta property="og:video:secure_url" content="http://ec2-54-191-42-126.us-west-2.compute.amazonaws.com/fizzquizzserver/'+  folder + videoFile+'">'+
                    '<meta property="og:video:type" content="video/mp4">');

      }});
}
