/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */

//= include ../lib/jquery-3.3.1.min.js
//= include ../lib/owl-slider/js/build.js


/**
 * CUSTOM SCRIPTS
 **/

$(document).ready(function () {

    var nav = $('.main-nav');

    /**
     * MOB MENU SCRIPT
     **/

    $('.burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.btn-close, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });

    $('.sub-menu__toggle').click(function (e) {
        $(this).toggleClass('sub-menu__toggle_active')
    });

    /**
     * OWL-CAROUSEL SCRIPT
     **/
    jQuery("#slider-carousel").owlCarousel({
        items: 3,
        pagination: false,
        dots: false,
        nav: true,
        slideSpeed: 2000,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                stagePadding: 75,
            },
            580: {
                items: 1,
                stagePadding: 150,
            },
            // 820: {
            //     items: 1,
            //     stagePadding: 180,
            // },
            1190: {
                items: 3,
            }
        }
    });

    var planks = $('#slider-carousel1');
    var clonedContent = planks.children().clone(true, true);

    function handleResponsiveSlides() {
        var isInit = planks.data('owl.carousel');
        if ($(window).width() < 1190) {
            if (!planks.hasClass('owl-carousel')) {
                planks.addClass('owl-carousel');
                planks.owlCarousel({
                    items: 1,
                    autoHeight: false,
                    pagination: false,
                    dots: true,
                    autoplay: true,
                    autoplayTimeout: 6000,
                    slideSpeed: 1000,
                    stopOnHover: true,
                    margin: 20
                })
            }
        } else {
            if (isInit) {
                planks.owlCarousel('destroy');

                planks.removeClass('owl-carousel owl-loaded owl-drag');
                planks.empty().append(clonedContent);
            }
        }
    }

    handleResponsiveSlides();

    $(window).on('resize', function () {
        handleResponsiveSlides()
    });

    // jQuery("#slider-carousel1").owlCarousel({
    //     items: 1,
    //     autoHeight: false,
    //     pagination: false,
    //     dots: true,
    //     autoplay: true,
    //     autoplayTimeout: 8000,
    //     slideSpeed: 5000,
    //     stopOnHover: true,
    //     margin: 0,
    // });


    /***
     * SMOOTH SCROLL TO ANCHOR
     **/

    function smoothScrollToAnchor(selector) {
        $(selector).on('click', function (event) {
            var anchor = $.attr(this, 'href');

            if (anchor.match(/^#/) && anchor !== '#') {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 150
                }, 2000);
            }
        });
    }

    smoothScrollToAnchor('#requestDemo');
    smoothScrollToAnchor('.header .menu__link, .sub-menu__link');

});