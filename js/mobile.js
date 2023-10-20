
$(document).ready(function(){
    var w = document.documentElement.clientWidth || window.innerWidth;
    if (w <= 500) {
        $("#main-nav-header").css(({"display":"none"}));
        $("#hamburger").click(function(){
            $("#main-nav-header").toggle();
        });
    } else {
        ScrollReveal().reveal('nav', {delay:1000, duration: 1000});
    }
});