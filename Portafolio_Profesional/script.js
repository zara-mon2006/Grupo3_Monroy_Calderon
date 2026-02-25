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
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre')?.value;
    const email = document.getElementById('email')?.value;

    if (nombre && email) {
      alert('Gracias por tu mensaje');
      e.target.reset();
    }
  });
}

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

// ====== SKILLS WHEELS (BLANDAS / TÉCNICAS) ======
const wheels = document.querySelectorAll('.skill-wheel');

function layoutSkillWheels() {
  wheels.forEach((wheel) => {
    const items = wheel.querySelectorAll('.wheel-items li');
    const n = items.length;

    // radio dinámico según tamaño del círculo
    const radius = (wheel.offsetWidth / 2) - 36;
    wheel.style.setProperty('--r', `${radius}px`);

    items.forEach((li, i) => {
      const angle = (360 / n) * i - 90; // empieza arriba
      li.style.setProperty('--a', `${angle}deg`);
    });
  });
}

function revealSkillWheels() {
  wheels.forEach((wheel) => {
    const top = wheel.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      wheel.classList.add('visible');
    }
  });
}

function enableWheelInteraction() {
  wheels.forEach((wheel) => {
    const centerTitle = wheel.querySelector('.wheel-title');
    const baseTitle = wheel.dataset.center || centerTitle.textContent;

    const buttons = wheel.querySelectorAll('.wheel-items button');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        // activar visualmente
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // mostrar en el centro
        centerTitle.textContent = btn.textContent;
      });

      // opcional: al salir del mouse vuelve al título base (si no está activo)
      btn.addEventListener('mouseleave', () => {
        const active = wheel.querySelector('.wheel-items button.active');
        if (!active) centerTitle.textContent = baseTitle;
      });
    });
  });
}

window.addEventListener('load', () => {
  layoutSkillWheels();
  enableWheelInteraction();
  revealSkillWheels();
});

window.addEventListener('resize', layoutSkillWheels);
window.addEventListener('scroll', revealSkillWheels);