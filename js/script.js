$(document).ready(function(){
    $('.slider-text').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: ".slider",
        centerPadding: '0px',
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.slider').slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3,
        asNavFor: ".slider-text",
        speed: 500,
        responsive: [
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '60px'
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                    arrows: false
                }
            }
        ]
    });
    //burger-menu
    $('.burger-open').click(function() {
        $('.mobile-menu').addClass('active-mobile');
    });
    $('.close-btn').click(function() {
        $('.mobile-menu').removeClass('active-mobile');
    })
});