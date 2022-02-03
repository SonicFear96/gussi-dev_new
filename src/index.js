// let slideIndex = 1;
// showSlides(slideIndex);
// function rightSlide() {
//   showSlides((slideIndex += 1));
// }
// function leftSlide() {
//   showSlides((slideIndex -= 1));
// }
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }
// function showSlides(n) {
//   let slider = document.getElementsByClassName("slider");
//   console.log(slider);
//   if (n > slider.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slider.length;
//   }
//   for (let i = 0; i < slider.length; i++) {
//     slider[i].style.display = "none";
//   }

//   slider[slideIndex - 1].style.display = "block";
// }

/*Quantity */

const LeftQuantity = document.querySelector(".quantity__left");
const RightQuantity = document.querySelector(".quantity__right");
const Quantity = document.querySelector(".quantity__text");

const IncrementQuantity = () => {
  Quantity.textContent++;
};
const DecrementQuantity = () => {
  if (Quantity.textContent <= 0) {
    return 0;
  } else Quantity.textContent--;
};

RightQuantity.addEventListener("click", IncrementQuantity);
LeftQuantity.addEventListener("click", DecrementQuantity);

/*Slider */

const Slider = document.querySelector(".slider");
const ButtonSliderNext = document.querySelector(".slider__next");
const ButtonSliderPrev = document.querySelector(".slider__prev");
const CounterFirst = document.querySelector(".counter-first");
const CounterLast = document.querySelector(".counter-last");

let i = 1;

const NextSlider = () => {
  if (i === 3) {
    ButtonSliderNext.disabled = true;
  } else i++;
  ButtonSliderNext.disabled = false;
  CounterFirst.textContent = `0${i}`;
  Slider.style.backgroundImage = `url('./img/gussi_slider_${i}.png')`;
};

const PrevSlider = () => {
  if (i === 1) {
    ButtonSliderPrev.disabled = true;
  } else i--;
  ButtonSliderPrev.disabled = false;
  CounterFirst.textContent = `0${i}`;
  Slider.style.backgroundImage = `url('./img/gussi_slider_${i}.png')`;
};

ButtonSliderNext.addEventListener("click", NextSlider);
ButtonSliderPrev.addEventListener("click", PrevSlider);
