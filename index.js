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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExlZnRRdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVhbnRpdHlfX2xlZnRcIik7XHJcbmNvbnN0IFJpZ2h0UXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1YW50aXR5X19yaWdodFwiKTtcclxuY29uc3QgUXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1YW50aXR5X190ZXh0XCIpO1xyXG5jb25zdCBTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlclwiKTtcclxuY29uc3QgQnV0dG9uU2xpZGVyTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX19uZXh0XCIpO1xyXG5jb25zdCBCdXR0b25TbGlkZXJQcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX3ByZXZcIik7XHJcbmNvbnN0IENvdW50ZXJGaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRlci1maXJzdFwiKTtcclxuY29uc3QgQ291bnRlckxhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXItbGFzdFwiKTtcclxuY29uc3QgU2xpZGVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fdGl0bGVcIik7XHJcblxyXG4vKlF1YW50aXR5ICovXHJcblxyXG5jb25zdCBJbmNyZW1lbnRRdWFudGl0eSA9ICgpID0+IHtcclxuICBRdWFudGl0eS50ZXh0Q29udGVudCsrO1xyXG59O1xyXG5jb25zdCBEZWNyZW1lbnRRdWFudGl0eSA9ICgpID0+IHtcclxuICBpZiAoUXVhbnRpdHkudGV4dENvbnRlbnQgPD0gMCkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfSBlbHNlIFF1YW50aXR5LnRleHRDb250ZW50LS07XHJcbn07XHJcblxyXG5SaWdodFF1YW50aXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBJbmNyZW1lbnRRdWFudGl0eSk7XHJcbkxlZnRRdWFudGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRGVjcmVtZW50UXVhbnRpdHkpO1xyXG5cclxuLypTbGlkZXIgKi9cclxuXHJcbmNvbnN0IGFyclNsaWRlclRpdGxlID0gW1wiTGlnaHQgY29hdFwiLCBcIlNhbmR5IGxvbmdzbGVldmVcIiwgXCJMaW1lIGphY2tldFwiXTtcclxuXHJcbmxldCBpID0gMTtcclxuXHJcbmNvbnN0IE5leHRTbGlkZXIgPSAoKSA9PiB7XHJcbiAgaWYgKGkgPT09IDMpIHtcclxuICAgIEJ1dHRvblNsaWRlck5leHQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSBpKys7XHJcbiAgU2xpZGVyVGl0bGUudGV4dENvbnRlbnQgPSBhcnJTbGlkZXJUaXRsZVtpIC0gMV07XHJcbiAgQnV0dG9uU2xpZGVyTmV4dC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIENvdW50ZXJGaXJzdC50ZXh0Q29udGVudCA9IGAwJHtpfWA7XHJcblxyXG4gIFNsaWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuL2ltZy9ndXNzaV9zbGlkZXJfJHtpfS5wbmcnKWA7XHJcbn07XHJcblxyXG5jb25zdCBQcmV2U2xpZGVyID0gKCkgPT4ge1xyXG4gIGlmIChpID09PSAxKSB7XHJcbiAgICBCdXR0b25TbGlkZXJQcmV2LmRpc2FibGVkID0gdHJ1ZTtcclxuICB9IGVsc2UgaS0tO1xyXG4gIFNsaWRlclRpdGxlLnRleHRDb250ZW50ID0gYXJyU2xpZGVyVGl0bGVbaSAtIDFdO1xyXG4gIEJ1dHRvblNsaWRlclByZXYuZGlzYWJsZWQgPSBmYWxzZTtcclxuICBDb3VudGVyRmlyc3QudGV4dENvbnRlbnQgPSBgMCR7aX1gO1xyXG4gIFNsaWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuL2ltZy9ndXNzaV9zbGlkZXJfJHtpfS5wbmcnKWA7XHJcbn07XHJcblxyXG5CdXR0b25TbGlkZXJOZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBOZXh0U2xpZGVyKTtcclxuQnV0dG9uU2xpZGVyUHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUHJldlNsaWRlcik7XHJcbiJdfQ==
