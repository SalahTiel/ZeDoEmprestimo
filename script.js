const carouselContent = document.querySelector('.carousel-content');
const card = document.querySelectorAll('.card-comment');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
  if(screen.width >= 1280){
    const offset = -currentIndex * 23.74;
    carouselContent.style.transform = `translateX(${offset}vw)`;
  }else{
    const offset = -currentIndex * 90;
    carouselContent.style.transform = `translateX(${offset}vw)`;
  }
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? card.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === card.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});
