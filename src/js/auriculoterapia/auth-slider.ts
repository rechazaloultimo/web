const slides = document.querySelectorAll<HTMLElement>(".slide");
const dots = document.querySelectorAll<HTMLButtonElement>(".dot");
const buttonPlans = document.getElementById("btnVerPlanes");

let currentSlide = 0;

function setSlide(index: number) {
  if (!slides.length) return;

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index]?.classList.add("active");
  dots[index]?.classList.add("active");
  currentSlide = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => setSlide(index));
});

buttonPlans?.addEventListener("click", () => setSlide(1));

window.setInterval(() => {
  if (slides.length > 0) {
    currentSlide = (currentSlide + 1) % slides.length;
    setSlide(currentSlide);
  }
}, 10000);
