const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

for (let btn of infoBtns) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();

    // this.parentNode
    //   .querySelector(".info-dot__circle")
    //   .classList.toggle("info-dot_circle--active");
    // this.parentNode
    //   .querySelector(".info-dot__radius")
    //   .classList.toggle("info-dot_radius--active");
    this.parentNode.querySelector(".info-hint").classList.toggle("none");
  });
}

document.addEventListener("click", function () {
  for (let hint of infoHints) {
    hint.classList.add("none");
  }
});

for (let hint of infoHints) {
  hint.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  freeMode: true,

  slidesPerView: 4,
  spaceBetween: 42,
  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  },
});
