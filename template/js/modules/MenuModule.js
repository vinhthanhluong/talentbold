export default function MenuModule() {

    if ($('.header-menu').length) {

        $('.hamburger-btn').click(function () {
            $(this).addClass('--active');
            $('.header .header-menu').addClass('--active');
           $('body').addClass('not-scroll-mobi');
        });

        $('.overplay').click(function () {
            $('.header-menu').removeClass('--active');
            $('.hamburger-btn').removeClass('--active');
          $('body').removeClass('not-scroll-mobi');
        });

    }






}