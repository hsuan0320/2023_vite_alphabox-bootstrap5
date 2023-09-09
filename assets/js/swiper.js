import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const aboutSwiper = new Swiper('.aboutSwiper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      autoplay: {
        enabled: true, //設定為false 為768px 以上時，放棄所有功能；設定為true 為768px 以上時，可開啟下列設定
        delay: 1000,
      }
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const shareSwiper = new Swiper(".share__swiper", {
  // slide 間距
  spaceBetween: 24,
  slidesPerView: 3,
  // Scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",

    //需增加 draggable 可拉動下方滾動條
    draggable: true
  },
  // 使 swiper 可以使用滑鼠滾輪捲動
  mousewheel: true
});
