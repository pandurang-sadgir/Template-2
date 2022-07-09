$(document).ready(function(){
    $(window).scroll(function () {

        if(this.scrollY>20){
            $('header').addClass('addClass');
        }else{
            $('header').removeClass('addClass');

        }
        
    });

    $('header .navbar .menu-btn').click(function(){

        $('header .navbar .menu').toggleClass('active');
    });
})