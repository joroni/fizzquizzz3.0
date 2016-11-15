// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $('#startQuiz').addClass('dl-layout__tab mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"');

  //  if($('input[name=answer]:checked').length){
        //a radio button was checked
    //    $(dialog).show();
    //}else{
        //there was no radio button checked
     //   $(dialog).hide();
    //}


    if($('input[name=answer]:checked').length){
        //a radio button was checked
            $('.show-dialog').show();
        }else{
        //there was no radio button checked
        $('.show-dialog').hide();
        }

});

