import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiper = new Swiper('.swiper', {
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
