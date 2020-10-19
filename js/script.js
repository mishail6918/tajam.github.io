$(document).ready(function(){
    $('.slider-text').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: ".slider",
        speed: 500
    });
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        asNavFor: ".slider-text",
        speed: 500
    });
});