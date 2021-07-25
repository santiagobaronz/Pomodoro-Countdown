'use strict';

window.addEventListener('load', function(){

    // Variables

    var minutes = document.querySelector("#minutes");
    var seconds = document.querySelector("#seconds");
    var button = document.querySelector("#button");
    var option_button = document.querySelector("#option_button");
    var sound = document.querySelector("#sound");
    var button_pause = document.querySelector("#button_pause");
    var button_reload = document.querySelector("#button_reload");

    var minutes_standar = 25;
    var seconds_standar = 0;

    // Function that changes the input values

    button.addEventListener("click", function(){

        var isPaused = false;
        button.style.display = "none";
        option_button.style.display = "block";

        // Set the Interval to modify the countdown

        var timer = setInterval(function(){

            if(!isPaused){
                if(seconds_standar == 0 && minutes_standar > 0){

                    seconds_standar = 59;
                    minutes_standar = minutes_standar - 1;

                }else if(seconds_standar != 0){

                    seconds_standar = seconds_standar - 1;

                }else{

                    clearInterval(timer);
                    sound.play();
                    button.style.display = "block";
                    option_button.style.display = "none";

                    minutes_standar = 25;
                    seconds_standar = 0;

                }
        
                // Check if the number needs a 0
        
                if(minutes_standar < 10 ){

                    minutes.innerHTML = "0" + minutes_standar;

                }else{
                    minutes.innerHTML = minutes_standar;
                }
                
                if(seconds_standar < 10 ){

                    seconds.innerHTML = "0" + seconds_standar;

                }else{
                    seconds.innerHTML = seconds_standar;
                }
            }

        },1000);

        // Reload button event

        button_reload.addEventListener("click",function(){

            clearInterval(timer);

            minutes_standar = 25;
            seconds_standar = 0;

            minutes.innerHTML = "25";
            seconds.innerHTML = "00";
            isPaused = false;

            button.style.display = "block";
            option_button.style.display = "none";
            
        });

        // Pause Button Event

        button_pause.addEventListener("click", function(){

            if(isPaused){
                isPaused = false;
            }else{
                isPaused = true;
            }

        });

    });

});
