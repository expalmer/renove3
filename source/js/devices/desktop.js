$(function(){

    $('html, body').stop().animate({scrollTop: 0}, 1);

    $('.nav').on("click",function(e){
        e.preventDefault();
        $(".nav").removeClass("active");
        $(this).addClass("active");
        var a = $(this).attr('href');
        $('html, body').stop().animate({scrollTop: $(a).offset().top}, 1200);
    });

    $('#home').expScrollParallax({
        position: 'top'
        ,inertia:  0.2
    });

    $('#nos-somos').expScrollParallax({
        position: 'right'
        ,inertia:  0.8
        ,yAdjuster:-200
    });

    $('#nos-fazemos').expScrollParallax({
        position: 'top'
        ,inertia:  0.2
        ,yAdjuster:-400
    });

    $('#contato').expScrollParallax({
        position: 'top'
        ,inertia:  1
    });

    $('#parallax-devices').expScrollParallax({
        position: 'top',
        inertia:  0.3
    });

    $('#parallax-butterfly').expScrollParallax({
        position: 'bottom'
        ,inertia:  0.4
        ,yAdjuster: 400
        ,xPosition:50
    });

    $('#parallax-butterfly-1').expScrollParallax({
        position: 'top'
        ,inertia:  0.4
        ,xPosition:72
    });

    $('#parallax-butterfly-2').expScrollParallax({
        position: 'top',
        inertia:  0.7
        ,xPosition:100
     });

     // menu mobile
     $('#menu-mobile-go').on("click",function(e){
        e.preventDefault();
        var menu = $(".navigation");
        if( menu.is(":visible") ){
            menu.slideUp({complete:function(){$(this).css('display','')}});
        } else {
            menu.slideDown();
        };
     });

    // Google Fonts
    WebFontConfig = {
        google: { families: [ 'Josefin+Sans:100,400,700:latin' ] }
    };

    (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();

});
