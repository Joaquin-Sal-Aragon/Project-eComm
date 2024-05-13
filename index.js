// Referencias a los elementos
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const carousel = document.querySelector('.carousel');
const tarjetas = Array.from(carousel.children);

let currentIndex = 0;
let autoInterval; // Intervalo automático

// Función para mostrar la tarjeta actual
function showCurrentTarjeta() {
    // Ocultar todas las tarjetas y mostrar solo la actual
    tarjetas.forEach((tarjeta, index) => {
        if (index === currentIndex) {
            tarjeta.classList.add('active')
            tarjeta.style.display = 'block'; // Mostrar la tarjeta actual
        } else {
            tarjeta.classList.remove('active')
            tarjeta.style.display = 'none'; // Ocultar las demás tarjetas
        }
    });

    // Controlar los botones de navegación
    prevButton.disabled = (currentIndex === 0);
    nextButton.disabled = (currentIndex === tarjetas.length - 1);
}

// Función para mover el carrusel al siguiente índice
function moveToIndex(index) {
    if (index >= 0 && index < tarjetas.length) {
        currentIndex = index;
        showCurrentTarjeta();
    }
}

// Manejo del botón "Siguiente"
nextButton.addEventListener('click', () => {
    moveToIndex(currentIndex + 1);
});

// Manejo del botón "Anterior"
prevButton.addEventListener('click', () => {
    moveToIndex(currentIndex - 1);
});

// Inicializar la visualización de la primera tarjeta
showCurrentTarjeta();

// Función para iniciar el carrusel automático
function startAutoCarousel() {
    autoInterval = setInterval(() => {
        moveToIndex((currentIndex + 1) % tarjetas.length);
    }, 3000); // Cambia el intervalo (3000 ms = 3 segundos) según tus preferencias
}

// Función para detener el carrusel automático
function stopAutoCarousel() {
    clearInterval(autoInterval);
}

// Iniciar el carrusel automático cuando la página se carga
startAutoCarousel();

// Escucha las teclas de flecha izquierda y derecha
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveToIndex(currentIndex + 1);
    } else if (event.key === 'ArrowLeft') {
        moveToIndex(currentIndex - 1);
    }
});


console.log('Current index:', currentIndex);
console.log('Tarjetas length:', tarjetas.length);
