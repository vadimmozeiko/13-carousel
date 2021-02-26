let slidePosition = 0;
const slides = document.querySelectorAll('.img');
const totalSlides = slides.length

document.querySelector('.nxt').addEventListener('click', () =>{
    nextSlide()
})
document.querySelector('.prv').addEventListener('click', () =>{
    prevSlide()
})

function nextSlide() {
    if (slidePosition === totalSlides -1){
        slidePosition = 0
    } else {
        slidePosition++;
    }
    updateSlidePosition()
}

function prevSlide() {
    if (slidePosition === 0){
        slidePosition = totalSlides - 1
    } else {
        slidePosition--;
    }
    updateSlidePosition()
}

function updateSlidePosition() {
    for (const slide of slides) {
        slide.style.marginLeft = `-${slidePosition}00%`;
    }
    slides[slidePosition].style.marginLeft = `-${slidePosition}00%`;
}
