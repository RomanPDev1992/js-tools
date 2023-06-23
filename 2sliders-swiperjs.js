jQuery(function() {
    var swiper2 = new Swiper('.swiper-menu', {/* слайдер через бібліотеку swiperjs*/
        loop: false,
        slidesPerView: 2.8,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 6,
            },
            1500: {
                slidesPerView: 9,
            },

        },
    })

    jQuery('.list-horizontal .products.columns-4').addClass('swiper-wrapper')/* наступний слайдер через бібліотеку swiperjs. Додаю класи через js щоб не лізти в код плагіна чи ядра, щоб вони могли простіше обновлятись*/
    jQuery('.list-horizontal .products.columns-4 .rounded-lg.overflow-hidden').addClass('product-wrapper-cart')
    jQuery('.list-horizontal .products.columns-4 .rounded-lg.overflow-hidden').addClass('swiper-slide')
    var swiper3 = new Swiper('.list-horizontal', {
        loop: false,
        slidesPerView: 2.5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
        },
    })
})
