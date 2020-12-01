$(document).ready(function(){
    $('.main-slider-bg').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        fade: true,
        speed: 1000,
        asNavFor:'.main-slider-text'
    });

    $('.main-slider-text').slick({
        autoplay: false,
        speed: 1000,
        dots: true,
        arrows: true,
        infinite: true,
        appendDots: $('.dots-js'),
        appendArrows: $('.arrows-js'),
        asNavFor:'.main-slider-bg',
        easing: 'ease-in-out',
        prevArrow: '<button type="button" class="arrow prev"><span class="icon-arrow-up"></span></button>',
        nextArrow: '<button type="button" class="arrow next"><span class="icon-arrow-down"></span></button>',
    });

    //for rotate circle
    $('.main-slider-text').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        let deg = $('.circle').data('deg'),
            time = $('.circle').data('time');
        let circle = nextSlide * deg;
        let result = circle+'deg';
        $('.circle').css({
            'transform':'rotateZ('+ result +')',
            'transition-duration': time + 's'
        });
    });

    //for dots controllers
    function dotsPosition(){
        let countElem = ($('.dots-js > ul li').length);
        countElem = (((countElem*7)/2)+3.5)+'deg';
        $('.dots-js').css('transform','rotate(-'+ countElem +')');
    }
    dotsPosition();

    //data-text
    $('.data-text-js').each(function (i, elem) {
        let dataText = $(elem).data('text');
        if(dataText){
            $(elem).append('<span>'+dataText+'</span><span>'+dataText+'</span><span>'+dataText+'</span><span>'+dataText+'</span>');
        }
    })
});
