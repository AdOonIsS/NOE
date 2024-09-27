// Lista de imágenes de flores
const flowerImages = [
    './clipart1540816.png',
    './clipart106543.png',
    './pngwing.com.png',
    './pngwing.com (1).png',
    './pngwing.com (4).png'
    
];

// Lista de mensajes bonitos
const messages = [
    "Eres mi razón de sonreír 🌸",
    "Cada día a tu lado es un regalo 🎁",
    "Te amo más de lo que las palabras pueden expresar ❤️",
    "Eres mi flor más bonita 🌷",
    "Contigo todo es perfecto ✨",
    "Eres la luz de mi vida 🌟",
    "Te elijo hoy y siempre 💖"
];

// Genera flores aleatorias en la pantalla
function createFlower() {
    const flower = document.createElement('img');
    
    // Selecciona una imagen aleatoria de la lista de flores
    const randomImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];
    flower.src = randomImage;
    
    flower.classList.add('flower');
    
    // Posición inicial asegurada dentro de los límites de la pantalla
    flower.style.top = `${Math.random() * 75}vh`; // Mantenerse en el 70% de la pantalla vertical
    flower.style.left = `${Math.random() * 75}vw`; // Mantenerse en el 70% de la pantalla horizontal
    flower.style.animationDuration = `${15 + Math.random() * 20}s`; // Velocidad aleatoria, pero más lenta

    // Añadir evento de click/touch para mostrar mensaje
    flower.addEventListener('click', showMessage);
    flower.addEventListener('touchstart', showMessage);

    document.getElementById('flower-container').appendChild(flower);
}


// Crear partículas brillantes
function createParticles() {
    const particleCount = 70; // Número de partículas
    const messageBox = document.getElementById('message-box');

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');


        // Añadir un margen mínimo para asegurar que no se amontonen
        const minMargin = 20; // Mínimo margen de 10% para top y left
        const maxTop = 100 - minMargin; 
        const maxLeft = 100 - minMargin;




        // Posición aleatoria alrededor del mensaje
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;

        // Añadir partícula al mensaje
        messageBox.appendChild(particle);
    }
}



// Mostrar un mensaje bonito y animar la flor
function showMessage(event) {
    const flower = event.target;
    
    // Mostrar el mensaje
    const messageBox = document.getElementById('message-box');
    const messageText = document.getElementById('message-text');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageText.textContent = randomMessage;
    messageBox.classList.remove('hidden');
    
    // Activar desenfoque de fondo
    document.body.classList.add('message-open');

    // Crear partículas
    createParticles();
    
    // Animar y desaparecer la flor
    flower.classList.add('disappear');
    flower.addEventListener('animationend', () => {
        flower.remove();
    });
}

// Cerrar el mensaje y remover desenfoque del fondo
document.getElementById('close-message').addEventListener('click', () => {
    document.getElementById('message-box').classList.add('hidden');
    document.body.classList.remove('message-open');


     // Remover partículas
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => particle.remove());
});



// Crear varias flores al cargar la página
window.onload = () => {
    for (let i = 0; i < 80; i++) {
        createFlower();
    }
};
