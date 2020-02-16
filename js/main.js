$(window).load(function() {

    $('#slider').nivoSlider({
        effect:'random',
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 500,
    pauseTime: 3000,
    startSlide: 0,
    directionNav:true,
    controlNav:true,
    controlNavThumbs:false,
    pauseOnHover:true,
    manualAdvance:true,
    prevText:'<span class="fas fa-arrow-circle-left"></span>',
    nextText:'<span class="fas fa-arrow-circle-right"></span>',
    randomStart:false,
    beforeChange:function(){},
    afterChange:function(){},
    slideshowEnd:function(){},
    lastSlide:function(){},
    afterLoad:function(){}
});
});


var typed = new Typed('.typed', {

    strings: [
        'Welcome Sir...',
        'i am ....',
        'Web design and Developer...',
        'also  Graphic  Designer...',
        'ভালোবাসা আমাদের লক্ষ্য...',


    ],


    typeSpeed: 20,
    startDelay: 1000,
    backSpeed: 20,
    backDelay: 1000,

    loop:true,

});

$(document).ready(function(){

    // $(".owl-carousel").owlCarousel();
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

});
$(document).ready(function(){
    $('.parallaxie').parallaxie({
        speed: 1,


    });
});


$('#circle1').circleProgress({
    value: 1,
    size: 120,
    thickness:3,
    fill: 'deeppink',

}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.circle-inner').html(Math.round(100 * progress) + '<i>%</i>');
});



    $('#circle').circleProgress({
    value: 0.65,
        size: 120,
        thickness:3,
    animationStartValue:0.1,
    fill: {
        gradient:[["red", .6], ["green", .3], ["blue", .5]]
    }
    }) .on('circle-animation-progress', function(event, progress) {
            $(this).find('.circle-inner').html(Math.round(65 * progress) + '<i>%</i>');
        });


$('#circle2').circleProgress({
    value: 0.95,
    size: 120,
    thickness:3,

    animationStartValue:0.1,
    fill:{ color: 'white' }
}) .on('circle-animation-progress', function(event, progress) {
    $(this).find('.circle-inner').html(Math.round(95 * progress) + '<i>%</i>');
});
$('#circle3').circleProgress({
    value: 0.90,
    size: 120,
    thickness:3,
    animationStartValue:0.1,
    fill: {
        gradient:[["red", .6], ["green", .3], ["blue", .8]]
    }
}) .on('circle-animation-progress', function(event, progress) {
    $(this).find('.circle-inner').html(Math.round(90 * progress) + '<i>%</i>');
});


$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    })
});




