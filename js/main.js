ScrollReveal().reveal('.large-title', { duration:3000, distance: '20px', origin: 'bottom'});
ScrollReveal().reveal('.large-subhead', { duration:3000, distance: '10px', origin: 'bottom'});
ScrollReveal().reveal('nav', {delay:1000, duration: 1000});
ScrollReveal().reveal('.content-item', { duration:2000, distance: '10px', origin: 'bottom'});
ScrollReveal().reveal('.green-arrow-button', { delay:800, duration:1000, distance: '10px', origin: 'left'});


        
$('#background div:first').siblings().hide();
loop();
function loop(){
    $('#background div:first').delay(10000).fadeOut(3000,function(){
        $(this).next().fadeIn(3000);
        $(this).appendTo('#background');
        loop();
    });
}

/*Back to top button*/
$(document).ready(function(){
    $('#backtop').click(function(){
        window.scroll({top: 0, duration: 4000, behavior: 'smooth'});
    });
});

/*Load Screen*/
window.addEventListener("load", () =>{
    document.querySelector(".loader").classList.add("loader--hidden");

    document.querySelector(".loader").addEventListener("transitionend" , () =>{
        document.body.removeChild(document.querySelector(".loader"))});
});