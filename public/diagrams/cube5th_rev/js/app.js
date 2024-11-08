$(document).ready(function(){

    var topPos = 0;

    if (!themeDark){
        // $('header').css('background-color','rgba(255,255,255,1');
        $('.main_menu a').css('color','rgba(0,0,0,1');
        $('.logo_main2').css('opacity','0');
        $('.logo_main').css('opacity','1');
    } else {
        $(window).scroll(function() {
    
    
            topPos = $(this).scrollTop();
    
            if (topPos > 50) {
                $('header').css('background-color','rgba(255,255,255,1');
                $('.main_menu a').css('color','rgba(0,0,0,1');
                $('.logo_main2').css('opacity','0');
                $('.logo_main').css('opacity','1');
            } else {
                $('header').css('background-color','rgba(255,255,255,0');
                $('.main_menu a').css('color','rgba(255,255,255,1');
                $('.logo_main2').css('opacity','1');
                $('.logo_main').css('opacity','0');
            }
            if (topPos > 250) {
                down = true
            } else {
                down = false
            }
    
        });

    }
/*
    var movementStrength = 10;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("body").mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 30;
        var newvalueY = height * pageY * -1 - 30;
        $('body').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
*/
});