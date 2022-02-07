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
ButtonSliderNext.addEventListener("mouseover", stop);
ButtonSliderPrev.addEventListener("mouseover", stop);

const timer = setInterval(function () {
  if (screen.width >= 1024) {
    NextSlider();
  }
}, 8000);

function stop() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMZWZ0UXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1YW50aXR5X19sZWZ0XCIpO1xyXG5jb25zdCBSaWdodFF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWFudGl0eV9fcmlnaHRcIik7XHJcbmNvbnN0IFF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWFudGl0eV9fdGV4dFwiKTtcclxuY29uc3QgQ29zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29zdF9fbWFpblwiKTtcclxuY29uc3QgU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIik7XHJcbmNvbnN0IEJ1dHRvblNsaWRlck5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fbmV4dFwiKTtcclxuY29uc3QgQnV0dG9uU2xpZGVyUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX19wcmV2XCIpO1xyXG5jb25zdCBDb3VudGVyRmlyc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXItZmlyc3RcIik7XHJcbmNvbnN0IENvdW50ZXJMYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyLWxhc3RcIik7XHJcbmNvbnN0IFNsaWRlclRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX3RpdGxlXCIpO1xyXG5cclxuLypRdWFudGl0eSAqL1xyXG5cclxuY29uc3QgSW5jcmVtZW50UXVhbnRpdHkgPSAoKSA9PiB7XHJcbiAgUXVhbnRpdHkudGV4dENvbnRlbnQrKztcclxuICBDb3N0LnRleHRDb250ZW50ID0gYCQkezEyMCAqIFF1YW50aXR5LnRleHRDb250ZW50fWA7XHJcbn07XHJcbmNvbnN0IERlY3JlbWVudFF1YW50aXR5ID0gKCkgPT4ge1xyXG4gIGlmIChRdWFudGl0eS50ZXh0Q29udGVudCA8PSAwKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9IGVsc2UgUXVhbnRpdHkudGV4dENvbnRlbnQtLTtcclxuICBDb3N0LnRleHRDb250ZW50ID0gYCQkezEyMCAqIFF1YW50aXR5LnRleHRDb250ZW50fWA7XHJcbn07XHJcblxyXG5SaWdodFF1YW50aXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBJbmNyZW1lbnRRdWFudGl0eSk7XHJcbkxlZnRRdWFudGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRGVjcmVtZW50UXVhbnRpdHkpO1xyXG5cclxuLypTbGlkZXIgKi9cclxuXHJcbmNvbnN0IGFyclNsaWRlclRpdGxlID0gW1wiTGlnaHQgY29hdFwiLCBcIlNhbmR5IGxvbmdzbGVldmVcIiwgXCJMaW1lIGphY2tldFwiXTtcclxuXHJcbmxldCBpID0gMTtcclxuXHJcbmNvbnN0IE5leHRTbGlkZXIgPSAoKSA9PiB7XHJcbiAgaWYgKGkgPT09IDMpIHtcclxuICAgIGkgPSAxO1xyXG4gIH0gZWxzZSBpKys7XHJcbiAgU2xpZGVyVGl0bGUudGV4dENvbnRlbnQgPSBhcnJTbGlkZXJUaXRsZVtpIC0gMV07XHJcbiAgQ291bnRlckZpcnN0LnRleHRDb250ZW50ID0gYDAke2l9YDtcclxuXHJcbiAgU2xpZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy4vaW1nL2d1c3NpX3NsaWRlcl8ke2l9LnBuZycpYDtcclxufTtcclxuXHJcbmNvbnN0IFByZXZTbGlkZXIgPSAoKSA9PiB7XHJcbiAgaWYgKGkgPT09IDEpIHtcclxuICAgIGkgPSAzO1xyXG4gIH0gZWxzZSBpLS07XHJcbiAgU2xpZGVyVGl0bGUudGV4dENvbnRlbnQgPSBhcnJTbGlkZXJUaXRsZVtpIC0gMV07XHJcbiAgQnV0dG9uU2xpZGVyUHJldi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIENvdW50ZXJGaXJzdC50ZXh0Q29udGVudCA9IGAwJHtpfWA7XHJcbiAgU2xpZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy4vaW1nL2d1c3NpX3NsaWRlcl8ke2l9LnBuZycpYDtcclxufTtcclxuXHJcbkJ1dHRvblNsaWRlck5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE5leHRTbGlkZXIpO1xyXG5CdXR0b25TbGlkZXJQcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBQcmV2U2xpZGVyKTtcclxuQnV0dG9uU2xpZGVyTmV4dC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHN0b3ApO1xyXG5CdXR0b25TbGlkZXJQcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgc3RvcCk7XHJcblxyXG5jb25zdCB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICBpZiAoc2NyZWVuLndpZHRoID49IDEwMjQpIHtcclxuICAgIE5leHRTbGlkZXIoKTtcclxuICB9XHJcbn0sIDgwMDApO1xyXG5cclxuZnVuY3Rpb24gc3RvcCgpIHtcclxuICBpZiAodGltZXIpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgdGltZXIgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=
