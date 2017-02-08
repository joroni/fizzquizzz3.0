
              function animatedBackground() {


                var newHTML = '<div id="stars" class="star-anim" style="z-index: 0;"></div>'+
                              '<div id="stars" class="star-anim" style="z-index: 0;"></div>'+
                              '<div id="stars" class="star-anim" style="z-index: 0;"></div>';

                $$('.page').insertAfter(newHTML);
              }

              var doSomething = function (event) {

              animatedBackground();
             };

              window.addEventListener('DOMContentLoaded', doSomething);
