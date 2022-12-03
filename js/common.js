$(document).ready(function () {

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

        },
    });



    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)
    $('.testimonials, .formsection, .aboutplannig').css('padding-left', paddingContainer);

    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        $('.testimonials, .formsection, .aboutplannig').css('padding-left', paddingContainer);
    });

    // testimonials
    var swiper = new Swiper(".testimonials-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },

            1199: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },

        },
    });

    // to top
    $(function () {
        $('.totop').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        })

    });
    // 
    $('.menubtn').click(function () {
        $('.menucol').addClass('show');
    });
    $('.closemenu').click(function () {
        $('.menucol').removeClass('show');
    })

    // accordeon
    $('.accitem__header').click(function(){
        $('.accitem__header').not($(this)).next('.accitem__body').slideUp();
        $(this).next('.accitem__body').slideToggle();

        $('.accitem__header').not($(this)).removeClass('plus');
        // $(this).addClass('plus');
        
        $(this).toggleClass('plus');
    });


    // menu

    $('.scrollnav .scrollitem a').on( 'click', function(){ 
        $('.menucol').removeClass('show');
        var el = $(this);
        var dest = el.attr('href'); 
        if(dest !== undefined && dest !== '') { // check existence
            $('html').animate({ 
                scrollTop: $(dest).offset().top - 80 // scroll to...
            }, 500 // speed
            );
        }
        return false;
    });
    // footer
    $('.footerscrollnav .scrollitem a').on( 'click', function(){ 
        var el = $(this);
        var dest = el.attr('href'); 
        if(dest !== undefined && dest !== '') { // check existence
            $('html').animate({ 
                scrollTop: $(dest).offset().top - 80 // scroll to...
            }, 500 // speed
            );
        }
        return false;
    });







    $('.scrolltoform').on( 'click', function(){ 
        var el = $(this);
        var dest = el.attr('href'); 
        if(dest !== undefined && dest !== '') { // check existence
            $('html').animate({ 
                scrollTop: $(dest).offset().top - 80 // scroll to...
            }, 500 // speed
            );
        }
        return false;
    });




});





