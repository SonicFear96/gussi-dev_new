let slideIndex = 1;
showSlides(slideIndex);
function rightSlide() {
  showSlides((slideIndex += 1));
}
function leftSlide() {
  showSlides((slideIndex -= 1));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slider = document.getElementsByClassName("slider");
  console.log(slider);
  if (n > slider.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slider.length;
  }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }

  slider[slideIndex - 1].style.display = "block";
}
