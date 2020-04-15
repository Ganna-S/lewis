$(function () {

    $('.slider__inner, .about-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });

    $('.detail__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button class="slick-arrow slick-next">next project<img src="../images/right.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-prew"><img src="../images/left.png" alt="">previous project</button>',
    });

    $('.menu__btn').on('click', function () {
        $('.menu').slideToggle();
    });

    new WOW().init();

    var show = true;
    var countbox = ".progress__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.inner__number').css('opacity', '1');
            $('.inner__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});