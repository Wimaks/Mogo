$(document).ready(function () {

    let header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();

    //* Fixed Header
    checkScroll(scrollOffset);

    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    })

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed')
        }
    };

    //* Smooth Scroll
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('#nav a').removeClass('active');
        $this.addClass('active');
        $('.nav, .nav-toggle').removeClass('active'); // при скролле по нажатию в меню убирать меню и менять бургер

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
    })


    //* Burger menu

    $('.nav-toggle').on('click', function (event) {
        event.preventDefault();

        $('.nav').toggleClass('active'); // появление меню при нажатии на бургер
        $(this).toggleClass('active'); // изменение меню бургер при открытии меню
    })

    //* Accordeon active

    $('.accordion__item').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
    })

});