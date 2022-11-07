let currentIndex = 0;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
  setSlides(1);
});

prevBtn.addEventListener("click", () => {
  setSlides(-1);
});

showSlides(currentIndex);

function setSlides(num) {
  const index = (currentIndex += num);
  showSlides(index);
}

function showSlides(num) {
  const slides = document.querySelectorAll(".slide");
  if (num > slides.length - 1) currentIndex = 0;
  if (num < 0) currentIndex = slides.length - 1;

  slides.forEach((slide, key) => {
    if (currentIndex === key) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}
