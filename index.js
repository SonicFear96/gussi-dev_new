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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExlZnRRdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVhbnRpdHlfX2xlZnRcIik7XHJcbmNvbnN0IFJpZ2h0UXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1YW50aXR5X19yaWdodFwiKTtcclxuY29uc3QgUXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1YW50aXR5X190ZXh0XCIpO1xyXG5jb25zdCBDb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3N0X19tYWluXCIpO1xyXG5jb25zdCBTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlclwiKTtcclxuY29uc3QgQnV0dG9uU2xpZGVyTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX19uZXh0XCIpO1xyXG5jb25zdCBCdXR0b25TbGlkZXJQcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX3ByZXZcIik7XHJcbmNvbnN0IENvdW50ZXJGaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRlci1maXJzdFwiKTtcclxuY29uc3QgQ291bnRlckxhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXItbGFzdFwiKTtcclxuY29uc3QgU2xpZGVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fdGl0bGVcIik7XHJcblxyXG4vKlF1YW50aXR5ICovXHJcblxyXG5jb25zdCBJbmNyZW1lbnRRdWFudGl0eSA9ICgpID0+IHtcclxuICBRdWFudGl0eS50ZXh0Q29udGVudCsrO1xyXG4gIENvc3QudGV4dENvbnRlbnQgPSBgJCR7MTIwICogUXVhbnRpdHkudGV4dENvbnRlbnR9YDtcclxufTtcclxuY29uc3QgRGVjcmVtZW50UXVhbnRpdHkgPSAoKSA9PiB7XHJcbiAgaWYgKFF1YW50aXR5LnRleHRDb250ZW50IDw9IDApIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH0gZWxzZSBRdWFudGl0eS50ZXh0Q29udGVudC0tO1xyXG4gIENvc3QudGV4dENvbnRlbnQgPSBgJCR7MTIwICogUXVhbnRpdHkudGV4dENvbnRlbnR9YDtcclxufTtcclxuXHJcblJpZ2h0UXVhbnRpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEluY3JlbWVudFF1YW50aXR5KTtcclxuTGVmdFF1YW50aXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBEZWNyZW1lbnRRdWFudGl0eSk7XHJcblxyXG4vKlNsaWRlciAqL1xyXG5cclxuY29uc3QgYXJyU2xpZGVyVGl0bGUgPSBbXCJMaWdodCBjb2F0XCIsIFwiU2FuZHkgbG9uZ3NsZWV2ZVwiLCBcIkxpbWUgamFja2V0XCJdO1xyXG5cclxubGV0IGkgPSAxO1xyXG5cclxuY29uc3QgTmV4dFNsaWRlciA9ICgpID0+IHtcclxuICBpZiAoaSA9PT0gMykge1xyXG4gICAgQnV0dG9uU2xpZGVyTmV4dC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfSBlbHNlIGkrKztcclxuICBTbGlkZXJUaXRsZS50ZXh0Q29udGVudCA9IGFyclNsaWRlclRpdGxlW2kgLSAxXTtcclxuICBCdXR0b25TbGlkZXJOZXh0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgQ291bnRlckZpcnN0LnRleHRDb250ZW50ID0gYDAke2l9YDtcclxuXHJcbiAgU2xpZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy4vaW1nL2d1c3NpX3NsaWRlcl8ke2l9LnBuZycpYDtcclxufTtcclxuXHJcbmNvbnN0IFByZXZTbGlkZXIgPSAoKSA9PiB7XHJcbiAgaWYgKGkgPT09IDEpIHtcclxuICAgIEJ1dHRvblNsaWRlclByZXYuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSBpLS07XHJcbiAgU2xpZGVyVGl0bGUudGV4dENvbnRlbnQgPSBhcnJTbGlkZXJUaXRsZVtpIC0gMV07XHJcbiAgQnV0dG9uU2xpZGVyUHJldi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIENvdW50ZXJGaXJzdC50ZXh0Q29udGVudCA9IGAwJHtpfWA7XHJcbiAgU2xpZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy4vaW1nL2d1c3NpX3NsaWRlcl8ke2l9LnBuZycpYDtcclxufTtcclxuXHJcbkJ1dHRvblNsaWRlck5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE5leHRTbGlkZXIpO1xyXG5CdXR0b25TbGlkZXJQcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBQcmV2U2xpZGVyKTtcclxuIl19
