// product swiper

  // import Swiper from 'swiper/swiper-bundle.esm.js';
  // import 'swiper/swiper-bundle.css';
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });