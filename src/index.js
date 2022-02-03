const LeftQuantity = document.querySelector(".quantity__left");
const RightQuantity = document.querySelector(".quantity__right");
const Quantity = document.querySelector(".quantity__text");
const Cost = document.querySelector(".cost__main");
const Slider = document.querySelector(".slider");
const ButtonSliderNext = document.querySelector(".slider__next");
const ButtonSliderPrev = document.querySelector(".slider__prev");
const CounterFirst = document.querySelector(".counter-first");
const CounterLast = document.querySelector(".counter-last");
const SliderTitle = document.querySelector(".slider__title");

/*Quantity */

const IncrementQuantity = () => {
  Quantity.textContent++;
  Cost.textContent = `$${120 * Quantity.textContent}`;
};
const DecrementQuantity = () => {
  if (Quantity.textContent <= 0) {
    return 0;
  } else Quantity.textContent--;
  Cost.textContent = `$${120 * Quantity.textContent}`;
};

RightQuantity.addEventListener("click", IncrementQuantity);
LeftQuantity.addEventListener("click", DecrementQuantity);

/*Slider */

const arrSliderTitle = ["Light coat", "Sandy longsleeve", "Lime jacket"];

let i = 1;

const NextSlider = () => {
  if (i === 3) {
    i = 1;
  } else i++;
  SliderTitle.textContent = arrSliderTitle[i - 1];
  CounterFirst.textContent = `0${i}`;

  Slider.style.backgroundImage = `url('./img/gussi_slider_${i}.png')`;
};

const PrevSlider = () => {
  if (i === 1) {
    i = 3;
  } else i--;
  SliderTitle.textContent = arrSliderTitle[i - 1];
  ButtonSliderPrev.disabled = false;
  CounterFirst.textContent = `0${i}`;
  Slider.style.backgroundImage = `url('./img/gussi_slider_${i}.png')`;
};

ButtonSliderNext.addEventListener("click", NextSlider);
ButtonSliderPrev.addEventListener("click", PrevSlider);
ButtonSliderNext.addEventListener("mouseout", start);
ButtonSliderPrev.addEventListener("mouseout", start);
ButtonSliderNext.addEventListener("mouseover", stop);
ButtonSliderPrev.addEventListener("mouseover", stop);

let timer = setInterval(function () {
  if (screen.width >= 1024) {
    NextSlider();
  }
}, 1000);

function stop() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}
function start() {
  if (timer) {
    return true;
  }
}
