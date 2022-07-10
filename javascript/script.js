$(document).ready(function(){
    $(window).scroll(function () {

        if(this.scrollY>20){
            $('header').addClass('addClass');


        }else{
            $('header').removeClass('addClass');

        }

        if(this.scrollY>500){
            $('.scrollUpBtn').addClass('scrollActive');

        }else{
            $('.scrollUpBtn').removeClass('scrollActive');

        }
        
    });

    $('.scrollUpBtn').click(function(){
        // $(window).scrollTop(0);
        $('html').animate({scrollTop:0});

    });

    $('header .navbar .menu-btn,header .navbar .menu a').click(function(){

        $('header .navbar .menu').toggleClass('active');
        $('header .navbar .menu-btn i').toggleClass('active');
    });
})