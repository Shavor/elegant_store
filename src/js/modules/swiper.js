import Swiper from "swiper/bundle";

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,

  //   If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //   Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
});

export default swiper;
