const sliderItem = document.querySelectorAll(".slider__item");
const firstSlider = document.querySelector(".slider__item:first-child");

const SHOWING_CLASS = "showing";

firstSlider.classList.add(SHOWING_CLASS);

const handleSlide = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlider.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlider.classList.add(SHOWING_CLASS);
  }
};

const init = () => {
  sliderItem.forEach(function(item) {
    item.addEventListener("click", handleSlide);
  });
};

init();
