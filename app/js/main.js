$(function () {

    $('.slider__inner, .about-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });

    $(document).ready(function () {

        var show = true;
        var countbox = ".progress__inner";
        $(window).on("scroll load resize", function () {
            if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
            var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height(); // Высота окна браузера
            var d_height = $(document).height(); // Высота всего документа
            var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if (w_top + 100 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $('.inner__number').css('opacity', '1');
                $('.inner__number').spincrement({
                    thousandSeparator: "",
                    duration: 3000
                });

                show = false;
            }
        });

    });

    $(window).on("scroll", function () {
        var w_top = $(window).scrollTop();
        var e_top = $("#counts").offset().top;

        console.log(w_top + " " + e_top);
    });

});