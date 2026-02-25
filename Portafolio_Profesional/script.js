// Animar elementos al desplazarse
window.addEventListener('scroll', () => {
    const elementos = document.querySelectorAll('.project-card');
    elementos.forEach(elemento => {
        const posicion = elemento.getBoundingClientRect().top;
        if (posicion < window.innerHeight) {
            elemento.classList.add('visible');
        }
    });
});

// Validar formulario de contacto
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    
    if (nombre && email) {
        alert('Gracias por tu mensaje');
        e.target.reset();
    }
});

// Animación + click para las tarjetas de "Datos curiosos"
const cardsDatos = document.querySelectorAll('.card-dato');

function animarCardsDatos() {
  cardsDatos.forEach((card, index) => {
    const posicion = card.getBoundingClientRect().top;

    if (posicion < window.innerHeight - 80 && !card.classList.contains('visible')) {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 120); // pequeño retraso entre tarjetas
    }
  });
}

// Click interactivo (activa/desactiva tarjeta)
cardsDatos.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('activa');
  });
});

// Ejecutar al cargar y al hacer scroll
window.addEventListener('load', animarCardsDatos);
window.addEventListener('scroll', animarCardsDatos);