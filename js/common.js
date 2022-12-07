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
    $('.accitem__header').click(function () {
        $('.accitem__header').not($(this)).next('.accitem__body').slideUp();
        $(this).next('.accitem__body').slideToggle();

        $('.accitem__header').not($(this)).removeClass('plus');
        // $(this).addClass('plus');

        $(this).toggleClass('plus');
    });


    // menu

    $('.scrollnav .scrollitem a').on('click', function () {
        $('.menucol').removeClass('show');
        var el = $(this);
        var dest = el.attr('href');
        if (dest !== undefined && dest !== '') { // check existence
            $('html').animate({
                scrollTop: $(dest).offset().top - 80 // scroll to...
            }, 500 // speed
            );
        }
        return false;
    });
    // footer
    $('.footerscrollnav .scrollitem a').on('click', function () {
        var el = $(this);
        var dest = el.attr('href');
        if (dest !== undefined && dest !== '') { // check existence
            $('html').animate({
                scrollTop: $(dest).offset().top - 80 // scroll to...
            }, 500 // speed
            );
        }
        return false;
    });

    $('.scrolltoform').on('click', function () {
        var el = $(this);
        var dest = el.attr('href');
        if (dest !== undefined && dest !== '') { // check existence
            $('html').animate({
                scrollTop: $(dest).offset().top - 80 // scroll to...
            }, 500 // speed
            );
        }
        return false;
    });





    // locatins tab(click on city)
    $('.locations__top-tab').on('click', function () {
        var dataClass = $(this).attr('data-map');
        $('.locations__item').removeClass('active-tab').hide();
        $('.locations__bottom').removeClass('active-tab').hide();
        $('.locations__top-tab').removeClass('active');
        $('.locations__bottom-tab').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('active-tab').fadeIn();
        return false;
    });

    // locatins tab(click on address)
    $('.locations__bottom-tab').on('click', function () {
        var dataClass = $(this).attr('data-loc');
        $('.locations__item').removeClass('active-tab').hide();
        $('.locations__bottom-wraper').removeClass('active-tab').hide();
        $('.locations__bottom-tab').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('active-tab').fadeIn();
        return false;
    });

    // show first locations
    $('.locations__top-row').find('.locations__top-tab').first().each(function () {
        $(this).trigger('click');
    });


    // local storage script
    $('.cities a').on('click', function () {
        localStorage.productForm = $(this).attr('data-city');
        console.log(localStorage.productForm);
    });
    console.log(localStorage.productForm);

    $('.locations__top-tab').each(function () {
        if ($(this).attr('data-map') == localStorage.productForm) {
            $(this).addClass('active');
            $(this).trigger('click');
        }
    });

    $('.locations__top-tab').on('click', function () {
        localStorage.clear();
    });


});





