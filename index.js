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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypRdWFudGl0eSAqL1xyXG5cclxuY29uc3QgTGVmdFF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWFudGl0eV9fbGVmdFwiKTtcclxuY29uc3QgUmlnaHRRdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVhbnRpdHlfX3JpZ2h0XCIpO1xyXG5jb25zdCBRdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVhbnRpdHlfX3RleHRcIik7XHJcblxyXG5jb25zdCBJbmNyZW1lbnRRdWFudGl0eSA9ICgpID0+IHtcclxuICBRdWFudGl0eS50ZXh0Q29udGVudCsrO1xyXG59O1xyXG5jb25zdCBEZWNyZW1lbnRRdWFudGl0eSA9ICgpID0+IHtcclxuICBpZiAoUXVhbnRpdHkudGV4dENvbnRlbnQgPD0gMCkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfSBlbHNlIFF1YW50aXR5LnRleHRDb250ZW50LS07XHJcbn07XHJcblxyXG5SaWdodFF1YW50aXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBJbmNyZW1lbnRRdWFudGl0eSk7XHJcbkxlZnRRdWFudGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRGVjcmVtZW50UXVhbnRpdHkpO1xyXG5cclxuLypTbGlkZXIgKi9cclxuXHJcbmNvbnN0IFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpO1xyXG5jb25zdCBCdXR0b25TbGlkZXJOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX25leHRcIik7XHJcbmNvbnN0IEJ1dHRvblNsaWRlclByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fcHJldlwiKTtcclxuY29uc3QgQ291bnRlckZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyLWZpcnN0XCIpO1xyXG5jb25zdCBDb3VudGVyTGFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRlci1sYXN0XCIpO1xyXG5cclxubGV0IGkgPSAxO1xyXG5cclxuY29uc3QgTmV4dFNsaWRlciA9ICgpID0+IHtcclxuICBpZiAoaSA9PT0gMykge1xyXG4gICAgQnV0dG9uU2xpZGVyTmV4dC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfSBlbHNlIGkrKztcclxuICBCdXR0b25TbGlkZXJOZXh0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgQ291bnRlckZpcnN0LnRleHRDb250ZW50ID0gYDAke2l9YDtcclxuICBTbGlkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnLi9pbWcvZ3Vzc2lfc2xpZGVyXyR7aX0ucG5nJylgO1xyXG59O1xyXG5cclxuY29uc3QgUHJldlNsaWRlciA9ICgpID0+IHtcclxuICBpZiAoaSA9PT0gMSkge1xyXG4gICAgQnV0dG9uU2xpZGVyUHJldi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfSBlbHNlIGktLTtcclxuICBCdXR0b25TbGlkZXJQcmV2LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgQ291bnRlckZpcnN0LnRleHRDb250ZW50ID0gYDAke2l9YDtcclxuICBTbGlkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnLi9pbWcvZ3Vzc2lfc2xpZGVyXyR7aX0ucG5nJylgO1xyXG59O1xyXG5cclxuQnV0dG9uU2xpZGVyTmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTmV4dFNsaWRlcik7XHJcbkJ1dHRvblNsaWRlclByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFByZXZTbGlkZXIpO1xyXG4iXX0=
