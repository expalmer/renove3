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

/* Zepto plugin : slide transition v1.0
   https://github.com/Ilycite/zepto-slide-transition/
*/
(function(a){a.fn.slideDown=function(g){var c=this.css("position");this.show();this.css({position:"absolute",visibility:"hidden"});var e=this.css("margin-top");var h=this.css("margin-bottom");var d=this.css("padding-top");var f=this.css("padding-bottom");var b=this.css("height");this.css({position:c,visibility:"visible",overflow:"hidden",height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0});this.animate({height:b,marginTop:e,marginBottom:h,paddingTop:d,paddingBottom:f},g)};a.fn.slideUp=function(h){if(this.height()>0){var g=this;var c=g.css("position");var b=g.css("height");var e=g.css("margin-top");var i=g.css("margin-bottom");var d=g.css("padding-top");var f=g.css("padding-bottom");this.css({visibility:"visible",overflow:"hidden",height:b,marginTop:e,marginBottom:i,paddingTop:d,paddingBottom:f});g.animate({height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0},{duration:h,queue:false,complete:function(){g.hide();g.css({visibility:"visible",overflow:"hidden",height:b,marginTop:e,marginBottom:i,paddingTop:d,paddingBottom:f})}})}};a.fn.slideToggle=function(b){if(this.height()==0){this.slideDown()}else{this.slideUp()}}})(Zepto);
function scroll(scrollTo, time) {
    var scrollFrom = parseInt(document.body.scrollTop),
        i = 0,
        runEvery = 5; // run every 5ms

    scrollTo = parseInt(scrollTo);
    time /= runEvery;

    var interval = setInterval(function () {
        i++;

        document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom;

        if (i >= time) {
            clearInterval(interval);
        }
    }, runEvery);
}

$(function($){

    var menu = $(".navigation");
    $('.nav').eq(0).addClass("active");
    $('.nav').on("click",function(e){
        e.preventDefault();
        $(".nav").removeClass("active");
        $(this).addClass("active");
        var a = $(this).attr('href');
        scroll($(a).offset().top - 200, 1200);
        theMenu(e);
    });

    var mobile = $('#menu-mobile-go');
    mobile.on('click', function(e){
        e.preventDefault();
        theMenu(e);
    });

     function theMenu (event) {
        event.preventDefault();
        if( menu.css('display') != 'none' ){
            menu.slideUp();
        } else {
            menu.slideDown();
        };
      }
});