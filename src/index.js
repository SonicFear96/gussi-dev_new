const LeftQuantity = document.querySelector(".quantity__left");
const RightQuantity = document.querySelector(".quantity__right");
const Quantity = document.querySelector(".quantity__text");
const Slider = document.querySelector(".slider");
const ButtonSliderNext = document.querySelector(".slider__next");
const ButtonSliderPrev = document.querySelector(".slider__prev");
const CounterFirst = document.querySelector(".counter-first");
const CounterLast = document.querySelector(".counter-last");
const SliderTitle = document.querySelector(".slider__title");

/*Quantity */

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

const arrSliderTitle = ["Light coat", "Sandy longsleeve", "Lime jacket"];

let i = 1;

const NextSlider = () => {
  if (i === 3) {
    ButtonSliderNext.disabled = true;
  } else i++;
  SliderTitle.textContent = arrSliderTitle[i - 1];
  ButtonSliderNext.disabled = false;
  CounterFirst.textContent = `0${i}`;

  Slider.style.backgroundImage = `url('./img/gussi_slider_${i}.png')`;
};

const PrevSlider = () => {
  if (i === 1) {
    ButtonSliderPrev.disabled = true;
  } else i--;
  SliderTitle.textContent = arrSliderTitle[i - 1];
  ButtonSliderPrev.disabled = false;
  CounterFirst.textContent = `0${i}`;
  Slider.style.backgroundImage = `url('./img/gussi_slider_${i}.png')`;
};

ButtonSliderNext.addEventListener("click", NextSlider);
ButtonSliderPrev.addEventListener("click", PrevSlider);
