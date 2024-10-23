// Lista de imágenes de flores
const flowerImages = [
    './pngwing.com (6).png',
    './pngwing.com (5).png',
    './pngwing.com (15).png',
    './pngwing.com (17).png',
    './pngwing.com (9).png',
    './pngwing.com (13).png',
    './pngwing.com (1).png'
    
];

// Lista de mensajes bonitos
const messages = [
    "Me tienes tan enamorado, que quiero hablar despues de hablar, verte despues de verte y abrazarte despues de abrazarte. eres todo lo que quiero, me tienes completamente enamorado.🌸",
    "En uste he encontrado una fortaleza que me asombra y una ternura que me enamora cada día más. Nunca deje que las dudas le hagan olvidar lo increíblemente única que es y lo hermosa que es mi niña.",
    "Cada dia que pasa, me maravillo mas de ti. uste es fuerte, es hermosa, es inteligente y tiene la capacidad de hacer cualquier cosa que se proponga. no deje que nadie la haga dudar de eso. La quiero ❤️",
    "yo se que simepre dices  'yo puedo sola' pero Mientras yo exista y siga respirando uste jamas tendra que sentirse que esta sola. cunete conmigo como un apoyo mi amor ",
    "Quiero que sepa que la quiero, que sin importar donde y como estemos, te quiero con todo mi corazoon, eres mi persona favorita, eres mi todo. te quiero incondicionalmente.",
    "Me enamore antes de besarte, me enamore antes de tocar tu piel, me enamore de ti ese dia que empezamos hablar, por que senti que eras mi persona, la persona que se robo mi corazon.",
    "Conocerte fue y sigue siendo lo mejor que me ha pasado mi amor, te quiero hasta el infinito y mas alla en pasitos de tortuga",
    "¿alguna vez has mirado a alguien mientras hace algo tan simple como reir, hablar o comer, y solo sonries porque te das cuenta de lo mucho que te gusta? pues eso me pasa con uste mi amor",
    "no estaba en mis planes quererte tanto, supongo que asi es como empiezan las mejores historias, porque sin buscarlo con uste ya lo tengo todo.",
    "Tengo ganas de ti, ganas de cuidarte el alma, llenarte de cariñitos y cubrirla de los miedos que no la dejan dormir. tengo ganas de llegar a una cima de una montaña y gritarle a todos lo mucho que te quiero. ",
    "Nunca necesite verte dos veces para saber que eras tu, toda tu, la que me haria sentir ashi y la persona que no se salvo de quererla con todo mi corazon",
    "Uste es la persona mas hermosa que conozco, con una sonrisa que no solo ilumina el mundo, sino que desde la primera vez que la vi, enamoro mi corazón por completito. 🌷",
    "Cuando el cansancio la supere y las dudas sean demasiadas, recuerde que usted es capaz de lograr lo imposible. Eres la mejor mi amor y siempre estare aqui para recordarselo y quererla simpre.✨",
    "Cada vez que la veo, me sorprende lo hermosa que eres, no solo por fuera, sino por todo lo que lleva en su corazoncito. uste es increíble en todo lo que hace y siempre se lo dire.🌟",
    "A veces me pregunto si los poetas conocieron su sonrisa, porque en cada palabra de amor que leo, la encuentro a uste. 💖"
];

function createShootingHeart() {
    for (let i = 0; i < 15; i++) { // Generar 5 corazones a la vez
      const heart = document.createElement('div');
      heart.classList.add('shooting-heart');
      heart.innerHTML = '❤'; // Corazón
      heart.style.top = `${Math.random() * 120}vh`;
      heart.style.left = `${Math.random() * 120}vw`;
      document.body.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 10000); // Duración de cada corazón (5 segundos)
    }
  }
  
  // Crear corazones fugaces cada 2 segundos
  setInterval(createShootingHeart, 1000);
  
  



let availableFlowers = []; // Lista temporal de flores disponibles

// Genera flores aleatorias en la pantalla
function createFlower() {
    if (availableFlowers.length === 0) {
        // Si la lista temporal de flores está vacía, vuelve a llenarla con las imágenes originales
        availableFlowers = [...flowerImages];
    }

    const flower = document.createElement('img');
    
    // Selecciona una imagen aleatoria de la lista temporal de flores
    const randomIndex = Math.floor(Math.random() * availableFlowers.length);
    const randomImage = availableFlowers.splice(randomIndex, 1)[0]; // Eliminar de la lista temporal y obtener la imagen
    flower.src = randomImage;

    flower.classList.add('flower');
    
    // Posición inicial asegurada dentro de los límites de la pantalla
    flower.style.top = `${Math.random() * 75}vh`; // Mantenerse en el 75% de la pantalla vertical
    flower.style.left = `${Math.random() * 75}vw`; // Mantenerse en el 75% de la pantalla horizontal
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



let availableMessages = []; // Lista temporal de mensajes disponibles

// Mostrar un mensaje bonito y animar la flor
function showMessage(event) {
    const flower = event.target;

    // Solo mostrar mensaje si aún hay mensajes disponibles
    if (availableMessages.length > 0) {
        // Mostrar el mensaje
        const messageBox = document.getElementById('message-box');
        const messageText = document.getElementById('message-text');

        // Seleccionar y eliminar un mensaje aleatorio de la lista temporal
        const randomIndex = Math.floor(Math.random() * availableMessages.length);
        const selectedMessage = availableMessages.splice(randomIndex, 1)[0]; // Eliminar de la lista temporal y obtenerlo

        messageText.textContent = selectedMessage;
        messageBox.classList.remove('hidden');

        // Activar desenfoque de fondo
        document.body.classList.add('message-open');

        // Crear partículas
        createParticles();
    }

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
    // Hacer una copia de la lista original de mensajes al cargar la página
    availableMessages = [...messages];

    // Crear flores según el número de mensajes
    for (let i = 0; i < messages.length; i++) {
        createFlower();
    }
};

