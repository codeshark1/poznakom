document.addEventListener("touchstart", function(){}, true);

var md = new MobileDetect(window.navigator.userAgent);

var x = document.getElementById("myAudio"); 


$(window).on('load resize orientationchange', function() {
    $('.row-carousel').each(function(){
        var $carousel = $(this);
        if ($(window).width() >= 800) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        } else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    //adaptiveHeight:true,
                    dots: true,
                    arrows: false,
                    autoplay:true
                });
            }
        }
    });

    $('.row-carousel-2').each(function(){
        var $carousel = $(this);
        if ($(window).width() >= 1040) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({                        
                    slidesToScroll: 1,
                    adaptiveHeight:true,
                    dots: true,
                    arrows: false,
                    infinite: true,
                    slidesToShow: 1,
                    centerPadding: '12px',
                    //appendDots: $('#device'),
                    centerMode: false,
/*                     responsive: [                                              
                        {
                            breakpoint: 700,
                            centerMode: false,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ] */
                });
            }
        }
    });        
});

$('#circular').find('.node').mouseenter(function(){
    if ( $(window).width() >= 1040 && !md.phone() && !md.tablet()) {
        $(this).addClass('active').siblings().removeClass('active');
        //x.pause(); 
        //x.play(); 
    }
});
$(window).on('load', function(){
    $('#circular').find('.node:first-child').mouseenter();
});

function clickingCircle() {
    if( $('#circular').find('.active').length ) {            
        if ( $('#circular').find('.active').next().length ) {
            $('#circular').find('.active').next().addClass('active').siblings().removeClass('active');
        } else {
            $('#circular').find('.node:first-child').addClass('active').siblings().removeClass('active');
        }
    } else {            
        $('#circular').find('.node:first-child').addClass('active').siblings().removeClass('active');
    }
}
if ($(window).width() < 1040 ) {
    setInterval(clickingCircle, 1500);
}



/* how it works */
$(document).ready(function(){
    $('.howitworks').find('.device').css('opacity',0);
});

$('#slides').find('.slide-card').mouseenter(function(){
    if ( $(window).width() >= 1040 ) {
        $(this).addClass('active').siblings().removeClass('active');  
        $('#device').find("div[data-id='" + $(this).data('id') +"']").addClass('visible').siblings().removeClass('visible');
        //x.pause(); 
        //x.play(); 
    }
});  
$('#slides').find('.slide-card:first-child').mouseenter();

$(".howitworks").on('DOMSubtreeModified', "#slides", function() {
    var currentSlide = $('#slides').find('.slick-current').data('id');
    $('#device').find("div[data-id='" + currentSlide +"']").addClass('visible').siblings().removeClass('visible');
});