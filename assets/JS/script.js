/* Const */

const seachBtn = document.querySelector(".search-icon");
const searchBox = document.querySelector(".header__actions--search");
const bannerTitle = document.querySelector(".banner__content h1");
const header = document.querySelector("header");
const banner = document.querySelector(".banner");

/* Slider */

const swiper = new Swiper(".mySwiper", {
  loop: true,

  speed: 500,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  slidesPerView: "auto",
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  on: {
    init: function () {
      updateTitle();
    },
    slideChangeTransitionEnd: function () {
      updateTitle();
    },
  },
});

// Search toggle click

seachBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  searchBox.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".header__actions--search")) {
    searchBox.classList.remove("active");
  }
});

//

function updateTitle(swiper) {
  const activeSlide = document.querySelector(".swiper-slide-active");

  if (!activeSlide) return;

  const title = activeSlide.querySelector("h3").textContent;

  if (title) {
    bannerTitle.textContent = title;
  }
}

updateTitle(swiper);

/* Hit tours slider*/

const hittoursSwiper = new Swiper(".hittoursSwiper", {
  loop: true,

  speed: 500,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  slidesPerView: "auto",
  spaceBetween: 20,

  navigation: {
    nextEl: ".hittours-next",
    prevEl: ".hittours-prev",
  },
});

/* Header sticky */

window.addEventListener("scroll", () => {
  const bannerHeight = banner.offsetHeight;

  if (window.scrollY > bannerHeight - 100) {
    header.classList.add("header--sticky");
     document.querySelector(".sticky_back").classList.add("active");
  } else {
    header.classList.remove("header--sticky");
     document.querySelector(".sticky_back").classList.remove("active");
  }
});
