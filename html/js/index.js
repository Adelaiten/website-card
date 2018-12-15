'use strict';

    

$(document).ready(function(){
    if($(window).width() < 960){
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


        var click = 0;
        $('.hamburger').click(
            function() {
                if(click == 0){
                    $(".header").stop().animate(
                        {
                            top: '0'
                        },
                        500,
                        'easeInSine'
                        );
                        click = 1;
                }else{
                    $(".header").stop().animate(
                        {
                            top: '-60vh'
                        },
                        500,
                        'easeOutSine'
                        ); 
                        click = 0;
                }
    
            }
        ); 
}
if($(window).width() > 1024){
    // $(".main-nav .navigation-menu li").hide();
    // $(window).scroll(function(){
    //     if($(this).scrollTop() > 200){
    //         $(".main-nav .navigation-menu li").fadeIn(500);
    //     }
    // });
}
});
