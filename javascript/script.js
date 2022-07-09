$(document).ready(function(){
    $(window).scroll(function () {

        if(this.scrollY>20){
            $('header').addClass('addClass');
        }else{
            $('header').removeClass('addClass');

        }
        
    });

    $('header .navbar .menu-btn,header .navbar .menu a').click(function(){

        $('header .navbar .menu').toggleClass('active');
        $('header .navbar .menu-btn i').toggleClass('active');
    });
})