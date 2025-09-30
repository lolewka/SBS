// const swiper = new Swiper('.mySwiper', {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
//     breakpoints: {
//         768: {
//             slidesPerView: 2
//         },
//         1024: {
//             slidesPerView: 1
//         }
//     }
// });
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    // slidesPerView: 1,
    // spaceBetween: 20,
    // loop: true,
    // autoplay: {
    //     // delay: 20000, // задержка между слайдами (в мс)
    //     disableOnInteraction: false, // не отключать после клика
    //     pauseOnMouseEnter: true, // пауза при наведении мыши
    // },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true
    // },
    breakpoints: {

    }
});