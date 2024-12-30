document.addEventListener("DOMContentLoaded", () => {
   const slides = document.querySelectorAll(".carousel__slide");
   const prevButton = document.querySelector(".carousel__button--left");
   const nextButton = document.querySelector(".carousel__button--right");
   let currentSlide = 0;

   function showSlide(index) {
      slides.forEach((slide, i) => {
         slide.style.display = i === index ? "block" : "none";
      });
   }

   function showNextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
   }

   function showPrevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
   }

   prevButton.addEventListener("click", showPrevSlide);
   nextButton.addEventListener("click", showNextSlide);

   // Initialize the carousel by showing the first slide
   showSlide(currentSlide);
});
