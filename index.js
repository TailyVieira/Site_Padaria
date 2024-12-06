let currentIndex = 0; 
const slides = document.querySelectorAll('.carrossel-slide img'); 
const totalSlides = slides.length; 

function showSlide(index) {
   
    const offset = -index * 100; 
    const slideContainer = document.querySelector('.carrossel-slide');
    slideContainer.style.transition = 'transform 0.5s ease'; 
    slideContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    showSlide(currentIndex);
}

function startAutoSlide() {
    setInterval(nextSlide, 3000); // Avança para o próximo slide a cada 3 segundos
}

// Inicia o carrossel automático
startAutoSlide();