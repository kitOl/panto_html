const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

for (let btn of infoBtns) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();

    // for (let hint of infoHints) {
    //   hint.classList.add("none");
    // }

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
  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 32,
  //   },
  //   1340: {
  //     slidesPerView: 4,
  //     spaceBetween: 42,
  //   },
  // },
});

const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtns) {
  btn.addEventListener("click", function () {
    for (let btn of tabsBtns) {
      btn.classList.remove("tab-controls__btn--active");
    }

    this.classList.add("tab-controls__btn--active");

    for (let product of tabsProducts) {
      if (
        this.dataset.tab === "all" ||
        product.dataset.tabValue === this.dataset.tab
      ) {
        product.classList.remove("none");
      } else {
        product.classList.add("none");
      }
    }

    swiper.update();
  });
}

const mobileNavOpenBtn = document.querySelector("#open-mobile-nav-btn");
const mobileNavCloseBtn = document.querySelector("#close-mobile-nav-btn");
const mobileMenu = document.querySelector(".mobile-nav__wrapper");

mobileNavOpenBtn.onclick = function () {
  mobileMenu.classList.add("mobile-nav__wrapper--open");
};

mobileNavCloseBtn.onclick = function () {
  mobileMenu.classList.remove("mobile-nav__wrapper--open");
};
