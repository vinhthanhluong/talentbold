export default function ParallaxModule() {

    function parallax1() {
        let width = $(window).width();
        if (width >= 768 && $('.about-img')) {
            var rect = $('.about-img')[0].getBoundingClientRect();
            var mouse = { x: 0, y: 0, moved: false };

            $(".about-img").mousemove(function (e) {
                mouse.moved = true;
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });

            // Ticker event will be called on every frame
            TweenLite.ticker.addEventListener('tick', function () {
                if (mouse.moved) {
                    parallaxIt(".task-todo", -30);
                    parallaxIt(".task-completed", -30);
                    parallaxIt(".total-balance", -30);
                    parallaxIt(".about-im", 10);
                }
                mouse.moved = false;
            });

            function parallaxIt(target, movement) {
                TweenMax.to(target, 0.5, {
                    x: (mouse.x - rect.width / 2) / rect.width * movement,
                    y: (mouse.y - rect.height / 2) / rect.height * movement
                });
            }

            $(window).on('resize scroll', function () {
                rect = $('.about-img')[0].getBoundingClientRect();
            })
        }
    }

    parallax1();

    function parallax2() {
        let width = $(window).width();
        if (width >= 768 && $('.banner-img')) {
            var rects = $('.banner-img')[0].getBoundingClientRect();
            var mouses = { x: 0, y: 0, moved: false };

            $(".banner-img").mousemove(function (e) {
                mouses.moved = true;
                mouses.x = e.clientX - rects.left;
                mouses.y = e.clientY - rects.top;
            });

            // Ticker event will be called on every frame
            TweenLite.ticker.addEventListener('tick', function () {
                if (mouses.moved) {
                    // parallaxIt(".banner-left", -6);
                    // parallaxIt(".shawdo-dots", -6);
                    // parallaxIt(".banner-right", 2);
                    parallaxIt(".banner-img", 5);

                }
                mouses.moved = false;
            });

            function parallaxIt(target, movement) {
                TweenMax.to(target, 0.5, {
                    x: (mouses.x - rects.width / 2) / rects.width * movement,
                    y: (mouses.y - rects.height / 2) / rects.height * movement
                });
            }

            $(window).on('resize scroll', function () {
                rects = $('.banner-img')[0].getBoundingClientRect();
            })

            ///////

            $('.banner-img').on('mousemove', (el) => {
                const x = el.pageX / $(window).width();
                const y = el.pageY / $(window).height();


                $('.banner-mid').css(
                    'transform',
                    'translate(-50% , ' + y * 30 + 'px)'
                );
            });
        }

        // console.log(width);

    }

    parallax2();

    $(window).on("resize", function () {
        parallax2();
        parallax1();
    });
}