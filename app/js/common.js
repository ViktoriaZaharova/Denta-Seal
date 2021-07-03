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
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 992) {
        $('.reviews-slider:not(.slick-initialized)').slick({
            slidesToShow: 1,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>',
        });
    } else {
        $(".reviews-slider.slick-initialized").slick("unslick");
    }
});
// slick active

$('.btn-burger').on('click', function () {
   $('.menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.menu').fadeOut();
});