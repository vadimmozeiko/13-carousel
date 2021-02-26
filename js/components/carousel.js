let currentSlide = 0;
const slides = document.querySelectorAll('.img');
const totalSlides = slides.length;
let slideshow = setInterval(nextSlide, 5000);

let timer = 0;
const setTimer = 6;


document.querySelector('.nxt').addEventListener('click', () =>{
    nextSlide();
    clearInterval(slideshow);
    if(timer === 0) {
        timeCount(setTimer); 
    }
    
});
document.querySelector('.prv').addEventListener('click', () =>{
    prevSlide();
    clearInterval(slideshow);
    if(timer === 0) {
        timeCount(setTimer) ; 
      }
});

function nextSlide() {
    if (currentSlide === totalSlides -1){
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlidePosition();
};

function prevSlide() {
    if (currentSlide === 0){
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }
    updateSlidePosition();
};

function updateSlidePosition() {
    for (const slide of slides) {
        slide.style.transform = `translate(-${currentSlide}00%)`;
    }
    slides[currentSlide].style.transform = `translate(-${currentSlide}00%)`;
};


function timeCount(number){
timer = setInterval (function () {
        number--
        console.log(number)
           if (number === 0){
                   clearInterval(timer);
                   timer = 0;
                   slideshow = setInterval(nextSlide, 5000);
            }
    },1000)  
};


