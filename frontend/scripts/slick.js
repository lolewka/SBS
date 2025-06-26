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
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});