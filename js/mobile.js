$(document).ready(function(){
    $("#main-nav-header").css(({"display":"none"}));
    $("#hamburger").click(function(){
        $("#main-nav-header").toggle();
    });
});