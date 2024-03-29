/*Animated Fade ins*/
ScrollReveal().reveal('.large-title', { duration:3000, distance: '20px', origin: 'bottom'});
ScrollReveal().reveal('.large-subhead', { duration:3000, distance: '10px', origin: 'bottom'});

ScrollReveal().reveal('#mailiconhomepage', {delay:1000, duration: 1000});
ScrollReveal().reveal('.alternate-nav', {delay:1000, duration: 1000});
ScrollReveal().reveal('.content-item', { duration:2000, distance: '10px', origin: 'bottom'});
ScrollReveal().reveal('.green-arrow-button', { delay:800, duration:1000, distance: '10px', origin: 'left'});
ScrollReveal().reveal('.image-item', {duration:2000});
ScrollReveal().reveal('#expert-care', {duration:2000, delay:800, distance: '10px', origin: 'bottom'});
ScrollReveal().reveal('#underline', {duration:2000, delay:1000, distance: '20px', origin: 'bottom'});
ScrollReveal().reveal('#row2', {duration:2000, delay:1500, distance: '30px', origin: 'bottom'});

/*Services Page*/

$('#text1 h2').css("opacity","0");
$('#text2 a').css("opacity","0");
ScrollReveal().reveal('#mobiletext1', {duration: 2000, delay:800});
ScrollReveal().reveal('#mobiletext2', {duration: 2000});
$('#services-slidein1').delay(3200).animate({left: '100px', opacity: '1'}, 1400);

$('#services-slidein2').delay(4000).animate({left: '100px', opacity: '1',}, 1000);

$('#services-slidein3').delay(5000).animate({left: '100px', opacity: '1',}, 1400);

$('#services-slidein4').delay(6000).animate({left: '100px', opacity: '1',}, 1800 );

$('#pleasecallslidein').delay(8000).animate({opacity: '.8',}, 1800 );

$('#text2 a').delay(9000).animate({opacity: '1',}, 1800 );


/*Cycling Animated Pictures*/        
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
    });
});


/*Carousel*/
$(document).ready(function(){
    
    count = 0;

    /*Left Arrow*/
    $('#leftarrow').on( "click", function() {
        count-=1
        if (count>0){
            $('#leftarrow').css({"visibility":"visible"});
            $('.img').css({
                '-webkit-transform': 'translatex(' + (-70 * (count)) + 'vw) '
            });

            if(count=1){
                /* Slide 2*/
                $('#gardenname').text('Andrea Watson: Queen Anne Woodland');
                $('#gardendescription').text('I have had the pleasure of working with Andrea and her family since 2018. While  her garden was already established by the time I came on, we have worked together to make small and big changes throughout the years to bring more native plants, color, and diversity to the garden. We have been reclaiming parts of the garden that were heavily invaded by English Ivy and have transformed them into woodland garden beds featuring native plants mixed in with colorful, non-invasive exotic plants.');
            }
            else if(count=2){
                /* Slide 3*/
                $('#gardenname').text('Sam Volum: Madison Park Beach Vibes');
                $('#gardendescription').text('Sam and her husband Ryan moved into their home in 2021 and loved some of the older trees in the garden but wanted to update the formal plantings of sheared shrubs. We worked together to preserve the older Rhododendrons, snake bark Maples, and mountain Hemlocks and enhanced the garden spaces, each with their own style that still wove together beautifully. Their goal was to have their garden in a presentable state for their wedding at their house which we were able to accomplish. I feel grateful to have had a part in making their wedding backdrop beautiful.');
            }
            else{
                $('#gardenname').text('');
            }
        }
        else{
            $('#leftarrow').css({"visibility":"hidden"});
            $('.img').css({
                '-webkit-transform': 'translatex(' + (-70 * (count)) + 'vw) '
            });
            /* Slide 1*/
            $('#gardenname').text('Laura Lohman: Queen Anne Urban Oasis');
            $('#gardendescription').text('Laura and I have worked together in her garden since 2019. Laura’ small Seattle garden is an oasis for beautiful specimens, outdoor entertaining, and a peaceful space to be able to work from home. The creation of her garden has been a team effort with Avalon NW, who’s amazing team built the unique fences and walls, containers, and patio, and custom designed the green wall built into the outdoor kitchen. The challenge in this garden has been giving space for her and her husband’s energetic Pointers but with Laura’s impeccable taste for aesthetics and my freedom to be creative with plant choices, we have created a space to be enjoyed by the whole family.');
        };
        
        if(count>=2){
            $('#rightarrow').css({"visibility":"hidden"});
            $('.img').css({
                '-webkit-transform': 'translatex(' + (-70 * (count)) + 'vw) '
            });
        }
        else{
            $('#rightarrow').css({"visibility":"visible"});
            $('.img').css({
                '-webkit-transform': 'translatex(' + (-70 * (count)) + 'vw) '
            });
        }
    });

    /*Right Arrow*/
    $('#rightarrow').on( "click", function() {
        count+=1
        if (count>0){
            $('#leftarrow').css({"visibility":"visible"});
            $('.img').css({
                '-webkit-transform': 'translatex(' + (-70 * (count)) + 'vw) '
            });
        }
        
        else{
            $('#leftarrow').css({"visibility":"hidden"});
            $('.img').css({
                '-webkit-transform': 'translatex(' + (-70 * (count)) + 'vw) '
            });
        };
        
        if(count>=2){
            $('#rightarrow').css({"visibility":"hidden"});
            $('.img').css({
                '-webkit-transform': 'translatex(' + (-70 * (count)) + 'vw) '
            });

            if(count=2){
                /* Slide 3*/
                $('#gardenname').text('Sam Volum: Madison Park Beach Vibes');
                $('#gardendescription').text('Sam and her husband Ryan moved into their home in 2021 and loved some of the older trees in the garden but wanted to update the formal plantings of sheared shrubs. We worked together to preserve the older Rhododendrons, snake bark Maples, and mountain Hemlocks and enhanced the garden spaces, each with their own style that still wove together beautifully. Their goal was to have their garden in a presentable state for their wedding at their house which we were able to accomplish. I feel grateful to have had a part in making their wedding backdrop beautiful.');
            }
            else{
                $('#gardenname').text('');
            }
        }
        else{
            $('#rightarrow').css({"visibility":"visible"});
            $('.img').css({
                '-webkit-transform': 'translatex(' + (-70 * (count)) + 'vw) '
            });
            /* Slide 2*/
            $('#gardenname').text('Andrea Watson: Queen Anne Woodland');
            $('#gardendescription').text('I have had the pleasure of working with Andrea and her family since 2018. While  her garden was already established by the time I came on, we have worked together to make small and big changes throughout the years to bring more native plants, color, and diversity to the garden. We have been reclaiming parts of the garden that were heavily invaded by English Ivy and have transformed them into woodland garden beds featuring native plants mixed in with colorful, non-invasive exotic plants.');
        }
    });

});


/*Overlay Carousel*/
/* Exit Button */
$(document).ready(function(){
    $(".x").click(function(){
        $(".dark-overlay").css({"visibility":"hidden", "opacity":"0"});
        $(".overlay-carousel-container").css({"visibility":"hidden", "opacity":"0"});
    });
});

$(document).ready(function(){
    $(".projectx").click(function(){
        $(".dark-overlay").css({"visibility":"hidden", "opacity":"0"});
        $(".project-carousel-container").css({"visibility":"hidden", "opacity":"0"});
    });
});

/*Gallery Images*/
$(document).ready(function(){
    $("#image-item-1").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".overlay-carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".overlay-carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4meNRd58I_vov14uC-RSm7V1c0SVhO7bYQYM2c1qs4NZlbzahZNpRwcDIeJ7d5HeHMGok3p2ZtkgbxQN7DHwbNyNq0goO5GaPYPa_9XWJ8Iy-2KsBTpyuyHp6Tul_Qt0ZW-7CRS8HcWeQN7C8QsU6sHg5skp0OlLC7ycvO-5kAvquITGYLkppgqmkBApDQH_gD?width=3024&height=4032&cropmode=none)" , });
    });

    $("#image-item-2").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".overlay-carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".overlay-carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4m-BuexTNboPWJq9ycVIHqx0R59cj454gRzneH42qNJeOadi_QcOo4l0UYtBQthHnVHJvHkLA9DcI1vN3EQhfnONtsm2lb2SOhgtMRSAmpv4Mr9dbE6FiPfZ1vQxaJ_wjz24Mbvehso6FbuJggHzdhPXL33BhTtZ3bwJeM_Q4ZA93eSgInKhYMa2TX6_dVBQFJ?width=3024&height=3318&cropmode=none)" , });
    });

    $("#image-item-3").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".overlay-carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".overlay-carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mogC_GhqGDJzq5Ws1T4RbF77j9M4Q6yM0NZia4z4UvKXJSL3EwpkryKausBy52hIlyix7Y9jwsF9V0GD6MSpv12X27_lkRACRBcPnqiqG0ZE4f6t6BtWh2AJ7bmje7sw3wvzNi4qTtp7lc_MjB8dfM6hYpdlCIIi7KFOS7W0YRfUKeeRabpjzTpmYp-QEEeMH?width=4032&height=3024&cropmode=none)" , });
    });

    $("#image-item-4").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".overlay-carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".overlay-carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4m6G8Jc9-65LnHqb2pVTO5pVe3CBjNBZpOjOjtoTsZxq3GNZv3Rr8qoEecEGHTJQF0uWHXDwGJhvzlomNqJxiIIBen-dFcv1aIchACSMklv6HlEwwEEJzTgVhUHqdTMo7Fo4wshznWQEJw6cX7y2YUCWGRuo8_ZEelwPmlrcwlGDes3-6KHL2tDOcOmO90tO22?width=3469&height=2647&cropmode=none)" , });
    });

    $("#image-item-5").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".overlay-carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".overlay-carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mcRA8MkX-_PKRPseO6BBX5BubyrKF37JKPtYvqitjABV0mlL3DYLkYvbEKd9BD3sBfqvPhntRXLXWsYGWq7UO0LMo9Oud08QUo6ioCTdAslJ59YzxbOgqRis-Rat2L-6qrm4-ltsQWEOWo5d-8gkzh0ycjSqnRqbK-1z0-coGx3xJDDBT3BFm9V8jd_gXuIxj?width=3024&height=4032&cropmode=none)" , });
    });

    $("#image-item-5").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".overlay-carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".overlay-carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mcRA8MkX-_PKRPseO6BBX5BubyrKF37JKPtYvqitjABV0mlL3DYLkYvbEKd9BD3sBfqvPhntRXLXWsYGWq7UO0LMo9Oud08QUo6ioCTdAslJ59YzxbOgqRis-Rat2L-6qrm4-ltsQWEOWo5d-8gkzh0ycjSqnRqbK-1z0-coGx3xJDDBT3BFm9V8jd_gXuIxj?width=3024&height=4032&cropmode=none)" , });
    });

    $("#image-item-6").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".overlay-carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".overlay-carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mJiCaN-BDN1QAX_SEi8iQr_jvn78fUQo4LdREsdrCAYrRcYk28VxUiaw1vsL2ew43VGzWrm9aBFYieehWOfSRbQWX3AtLWbrQQ5At2OfyoO9Re8BjM12F2m85oaPVG0jH9XcgA17XDWTLGms49_TpGr-Gev0V73AtH4nrg8z1pBBAnrItGk38tsL3o1koSMEr?width=3024&height=4032&cropmode=none)" , });
    });

    $("#image-item-7").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".overlay-carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".overlay-carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mnKWDxYXXxoriaQO86olz6a3w5K8YytVcNXJPPkrDXCG4gWYqCDRja0Mn7BaAQ50y0h8AFTwm7SPZ-q68TBD_qmPv9PvztVVOOR5F5JUmRO8Qu0yV5r98g1ZcaqFGZbhOEeXWyF5lVFAXQjidQmbpLMXiYFCK0qXcCDUowhQuM4-_ws-n36-_gK6nGdxzmn7P?width=3024&height=4032&cropmode=none)" , });
    });

    $("#image-item-8").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".overlay-carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".overlay-carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4molgt21s7AoxsY0GZzqpZ7dCQkdLT_j7Pi8ROswWfPyEzlLCgtDQXXZbgY-8in-TYlR8wwbHQJLtYlJhD6DcHvMBTXJF4esSeZiCSSgF25nwrOgpnyLxZUQCwNBt5zabaSWvTitK1YdtnW9yoHfyM30YCpE4Tz9C4AzGUBTcv6XbK9sqhRytIYWr7bvkaEXhI?width=3469&height=2647&cropmode=none)" , });
    });

    $("#image-item-9").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".overlay-carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".overlay-carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mvLTYv6elUtkWBW1b6ELAlzkrrqkmX_YLZJVhKtO-y_HLufL9arpZvDaruBR-0kQ386HMW0rSO2wbI16u8LL6r45RCxfWOOl_mZfJ6J3nV6ZJUXhWM0civgMaI60z_kycRRbhUrNL3nnO1_2fWDU7OuKwO0RsVo3BdvwkAoKYHo3uYqZrPHk5idJ0Ffxn2khJ?width=3024&height=4032&cropmode=none)" , });
    });
});
