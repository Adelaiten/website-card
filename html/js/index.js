'use strict';
$(document).ready(function(){
    var authorAbout = ["Java Developer", "Law Student", "Rollers Lover"];
    var counter = 1;
    $(".author-description").click(function(){
        if(counter>2){
            counter = 0;
        }
        $(".author-proffesion").fadeOut(1000).remove();
        $(this).append('<p class="author-proffesion">' + authorAbout[counter] + '</p>').hide().delay(500).fadeIn(1000);
        counter++;
    });
});