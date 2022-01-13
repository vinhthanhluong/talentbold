export default function SlideModule(){
    function slide() {
        let width = $(window).width();
        //console.log(width);
        if (width <= 1200 && document.querySelector('#slide-home')) {
            const swiper = document.querySelector('#slide-home');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    // autoHeight: true,
                    //spaceBetween: 20,
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },

                    breakpoints: {
                        // 320: {
                        //     spaceBetween: 50
                        // },
                        // 480: {
                        //     spaceBetween: 30
                        // },
                        // 576: {
                        //     spaceBetween: 0,

                        // }
                    }
                    // observeParents:true,
                    // observeSlideChildren: true,
                    // observer: true,
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $(window).on("resize", function () {
        slide;
    });
    if (document.querySelector('#banner-slide')) {
        const swiper = document.querySelector('#banner-slide');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                // autoplay: {
                //     delay: 6000,
                // },

                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },

                // breakpoints: {
                //     320: {
                //         slidesPerView: 2,
                //         spaceBetween: 10,
                //     },

                //     768: {
                //         spaceBetween: 30,
                //         slidesPerView: 3,
                //     }
                // },
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-brand')) {
        const swiper = document.querySelector('#slide-brand');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                
             

                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        loop:true,
                        allowTouchMove: true,
                    },
                    500: {
                        slidesPerView: 3,
                        loop:true,
                        allowTouchMove: true,
                    },

                    768: {
                        slidesPerView: 5,
                        loop: false,
                        allowTouchMove: false,
                    },
                    
                },
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-price')) {
        const swiper = document.querySelector('#slide-price');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#rate-slide')) {
        const swiper = document.querySelector('#rate-slide');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        loop: true,
                    },

                    500: {
                        slidesPerView: 2,
                        // spaceBetween: 10,
                        loop: true,
                    },

                    768: {
                        spaceBetween: 30,
                        slidesPerView: 2,
                        slidesPerColumnFill: 'row',
                        slidesPerColumn: '2',
                        loop: false,
                    }
                },
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#follow-slide')) {
        const swiper = document.querySelector('#follow-slide');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 30,
                slidesPerView: 4,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },

                    500: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                    },
                },
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}