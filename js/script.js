$( document ).ready(function() {
$('#owl-carousel-s2').owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    touchDrag: true,
    mouseDrag: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
});

 $('#slider-row').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items:2,
            nav:false,
        },
        800: {
            items:3,
            nav:true,
        },
        1000: {
            items:5,
            nav:true,            
        },
        2000: {
            items:5,
        },
    },
});
});


// $('a.to-scroll[href*="#"]').on('click', function (e) {
//     e.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($(this).attr('href')).offset().top - 80
//     }, 500, 'linear');
// });

$(document).on('click','skrollLink', function(event){
    event.preventDefault();
    $('html,body').animate({
        scrollTop : $(this).attr('href').offset().top
    }, 500)
} );
