$(document).ready(function() {
    var navpos = $('#header').offset();
//    console.log(navpos.top);
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > navpos.top) {
            $('#header').addClass('header-fixed');
        }
        else {
            $('#header').removeClass('header-fixed');
        }
    });
    window.addEventListener("hashchange", function() { scrollBy(0, -100) })
    
    $('#menu-btn-id').click(function(){
        $('#menu-btn-id').toggleClass('menu-btn-open');
//        var text = $('#site-name a').text();
//        console.log(text);
//        if(text == "N A"){
//            $('#site-name a').text("Navaneeth Ashok");  
//        } else {
//            $('#site-name a').text("N A");
//        }
        $('.menu').toggle();
        $('.menu').addClass('menu-block li');
        
    });
    
    $('.nav-cls').click(function(){
        if ($('.menu-btn').css('display') == 'inline-block'){
//            console.log("Clicked inside burger menu");
            $('.menu').toggle();
            $('#menu-btn-id').toggleClass('menu-btn-open');
        }

        
    })
    
    $('#blog-unfold').click(function(){
        
        if ($('#blog2').is(":visible") == false){
            $('#blog2').show();
        } else{
            $('#blog2').hide();
        }
        $('#blog3').toggle();
        $('#blog-unfold').toggleClass('fold');
    });
    
    $('#portfolio-unfold').click(function(){
        
        
        $('.portfolio-column:nth-child(n+6)').toggle();
        $('#portfolio-unfold').toggleClass('fold');
    });
});