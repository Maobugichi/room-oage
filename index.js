const prev = document.querySelector(".prev-div");
const nextSlide = document.querySelector(".next-div")
let slides = document.querySelectorAll(".hero__right__content");
let heroSlides = document.querySelectorAll(".hero__left");
const menu = document.querySelector(".menu");
const topNav = document.querySelector(".top-nav");
const close = document.querySelector(".close")


menu.addEventListener("click", () => {
 topNav.classList.add("block")
})

close.addEventListener("click", () => {
  topNav.classList.add("closeNav")
  setTimeout(() => {
    topNav.classList.remove("block")
    topNav.classList.remove("closeNav")
  },1000)
})
let slideIndex = 1;
showSlides(slideIndex);

function next(n) {
 showSlides(slideIndex += n);
}

prev.addEventListener("click", () => {
 prev.style.backgroundColor = "hsl(0, 0%, 27%)"
 setTimeout(() => {
     prev.style.backgroundColor = "transparent"
 },1000)
 next(-1);
})

nextSlide.addEventListener("click", () => {
 nextSlide.style.backgroundColor = "hsl(0, 0%, 27%)"
 setTimeout(() => {
    nextSlide.style.backgroundColor = "transparent"
 },1000)
 next(1)
})

function showSlides(n) {
 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  heroSlides[i].style.display = "none"
 }
 slides[slideIndex-1].style.display = "flex"
 heroSlides[slideIndex-1].style.display = "block"
}


