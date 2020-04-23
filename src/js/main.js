/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */

//= include ../lib/jquery-3.3.1.min.js
//= include ../lib/owl-slider/js/build.js

/**
 * CUSTOM SCRIPTS
 **/

$(document).ready(function () {

    var scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 100) {
            $(".header").css({"background": "linear-gradient(to right, #30b025, #6fd230)"})
        }
        if (100 > scrolled) {
            $(".header").css({"background": "transparent"})
        }
    }

    var nav = $('.main-nav');

    /**
     * MOB MENU SCRIPT
     **/

    $('.burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        $('.backdrop').fadeIn();
        $('body').addClass('noscroll');
    });

    $('.btn-close, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
       $('.backdrop').fadeOut();
        $('body').removeClass('noscroll');
    });


    /**
     * OWL-CAROUSEL SCRIPT
     **/
    var $homeSlider = $(".home-slider");

    $(window).resize(function () {
        showHomeSlider();
    });

    function showHomeSlider() {
        if ($homeSlider.data("owlCarousel") !== "undefined") {
            if (window.matchMedia('(max-width: 768px)').matches) {
                initialHomeSlider();
            } else {
                destroyHomeSlider();
            }
        }
    }

    showHomeSlider();

    function initialHomeSlider() {
        $homeSlider.addClass("owl-carousel").owlCarousel({
            items: 2,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                    margin:0,
                },
                580: {
                    margin: 30,
                    items:2,
                }
            }
        });
    }

    function destroyHomeSlider() {
        $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
    }

    /**
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