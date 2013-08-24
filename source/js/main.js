var w = window.innerWidth || document.documentElement.clientWidth || document.documentElement.getElementsByTagName('body')[0].clientWidth;
var q;
if(w > 640) {
    q = "://renove3.com.br/js/desktop.min.js";
} else {
    q = "://renove3.com.br/js/mobile.min.js";
}
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + q;
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
