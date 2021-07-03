$(".btn-play").on("click", function(e){
    e.preventDefault();
    $('.video-js')[0].play();
    $('.btn-play').hide();
});
$(".video-js").on("click", function(){
    $('.video-js')[0].pause();
    $('.btn-play').show();
});

$('.instruction-work-slider').slick({
    slidesToShow: 3,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>'
});