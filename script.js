function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

let currentSlide = 0;
const itemsPerView = 3;

function slideProjects(direction) {
    const carousel = document.getElementById('projectCarousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const maxSlide = totalItems - itemsPerView;
    
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }
    
    const slideWidth = items[0].offsetWidth + 32; // item width + gap
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    updateArrows(maxSlide);
}

function updateArrows(maxSlide) {
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    
    leftArrow.disabled = currentSlide === 0;
    rightArrow.disabled = currentSlide >= maxSlide;
}

// Initialize on page load
window.addEventListener('load', () => {
    const items = document.querySelectorAll('.carousel-item');
    updateArrows(items.length - itemsPerView);
});