let currentSlide = 0;
const slides = document.querySelectorAll('.img');
const totalSlides = slides.length
const timeout = setInterval(autoSlideshow, 5000);

document.querySelector('.nxt').addEventListener('click', () =>{
    nextSlide()
    clearInterval(timeout)

})
document.querySelector('.prv').addEventListener('click', () =>{
    prevSlide()
    clearInterval(timeout)
})

function nextSlide() {
    if (currentSlide === totalSlides -1){
        currentSlide = 0
    } else {
        currentSlide++;
    }
    updateSlidePosition()
}

function prevSlide() {
    if (currentSlide === 0){
        currentSlide = totalSlides - 1
    } else {
        currentSlide--;
    }
    updateSlidePosition()
}

function updateSlidePosition() {
    for (const slide of slides) {
        slide.style.transform = `translate(-${currentSlide}00%)`;
    }
    slides[currentSlide].style.transform = `translate(-${currentSlide}00%)`;
}


function autoSlideshow() {
    nextSlide()
}