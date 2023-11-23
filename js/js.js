// carrusel
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
menuBtn.addEventListener("click",() => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

let currentSlide = 0;
const intervalTime = 5000;
const nextSlide = () => {
    btns[currentSlide].classList.remove("active");
    slides[currentSlide].classList.remove("active");
    contents[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    btns[currentSlide].classList.add("active");
    slides[currentSlide].classList.add("active");
    contents[currentSlide].classList.add("active");
  };
  let carouselInterval = setInterval(nextSlide, intervalTime);
  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      clearInterval(carouselInterval);
      sliderNav(i);
      carouselInterval = setInterval(nextSlide, intervalTime);
    });
  });
const sliderNav = function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    });
    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });
    contents.forEach((content)=>{
        content.classList.remove("active");
    });
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i)=>{
    btn.addEventListener("click",()=>{
        sliderNav(i);
    });
    
});
// carrusel