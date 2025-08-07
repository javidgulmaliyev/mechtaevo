import Swiper from "swiper";
import { Keyboard, Pagination, } from "swiper/modules";

const imagesSliders = document.querySelectorAll(".images-slider");

imagesSliders.forEach((imagesSlider) => {
  const pagination = imagesSlider.querySelector(".slider-pagination");

  const swiper = new Swiper(imagesSlider, {
    modules: [Keyboard, Pagination,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    pagination: {
      clickable: true,
      el: pagination,
      enabled: true,
    },
    spaceBetween: 10,
    rewind: true,
  });

});
