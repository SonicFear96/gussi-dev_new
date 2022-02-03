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
