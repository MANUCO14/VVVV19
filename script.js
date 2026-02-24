// 1. CONFIGURACIÓN DEL FONDO (CANVAS - NOCHE ESTRELLADA ANIMADA)
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let stars = [];
for(let i=0; i<150; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random()
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 253, 231, ${s.opacity})`; // Color crema Van Gogh
        ctx.fill();
        
        // Movimiento lento hacia arriba
        s.y -= s.speed;
        if(s.y < 0) s.y = canvas.height;
        
        // Efecto de parpadeo
        s.opacity += Math.random() * 0.02 - 0.01;
        if(s.opacity < 0.2) s.opacity = 0.2;
        if(s.opacity > 1) s.opacity = 1;
    });
    requestAnimationFrame(drawStars);
}
drawStars();

// 2. LÓGICA DE LAS 19 RAZONES
const razones = [
    "Tu risa por Videollamada y en fisica mas hermosa aun", "Tu paciencia infinita", "Cómo brillas al hablar de lo que amas",
    "Tu apoyo en mis días grises", "Nuestras llamadas eternas", "Tu mirada tan encatadora en cada foto",
    "Tu fuerza ante los retos", "Cómo me haces mejor persona", "Tu sentido del humor único",
    "Nuestros planes a futuro", "La primera vez que nos vimos", "Tu voz al despertar",
    "Tu honestidad", "Cómo cuidas de los que amas y como me cuidas tu niño pequeño", "Tu estilo único, que me enamora",
    "Que eres mi lugar seguro en todo el universo", "Nuestras metas juntos, juntos somos mejores", "Tu forma de ver el mundo",
    "Simplemente, que eres tú."
];

const grid = document.getElementById('gridEstrellas');

// Generamos las estrellas UNA SOLA VEZ
razones.forEach((texto, i) => {
    let star = document.createElement('div');
    star.className = 'star-icon';
    star.style.animationDelay = `${Math.random() * 3}s`; // Brillo asíncrono
    
    star.onclick = () => {
        mostrarMensaje(texto);
        star.style.background = "white"; // Feedback visual de leída
        star.style.boxShadow = "0 0 20px white";
    };
    grid.appendChild(star);
});

// Funciones del Modal Decorado
function mostrarMensaje(texto) {
    const modal = document.getElementById('modal-mensaje');
    const textoModal = document.getElementById('texto-razon');
    
    textoModal.innerText = texto;
    modal.classList.add('visible');
}

function cerrarMensaje() {
    document.getElementById('modal-mensaje').classList.remove('visible');
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('modal-mensaje');
    if (event.target == modal) {
        cerrarMensaje();
    }
}

// 3. NAVEGACIÓN Y REGALO FINAL
function scrollToId(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function openGift() {
    const music = document.getElementById('musicaEve');
    const envelope = document.getElementById('envelope');
    const carta = document.getElementById('carta');

    envelope.style.display = 'none';
    carta.style.display = 'block';
    
    // Música de Eve
    music.volume = 0.6;
    music.play().catch(error => console.log("La reproducción automática requiere interacción previa."));

    // Lluvia de confeti con colores de Van Gogh
    confetti({
        particleCount: 180,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#fdb813', '#5eb5e0', '#1b2735', '#ffffff']
    });
}

// 4. EFECTO PARALLAX PARA LAS FOTOS FLOTANTES
document.addEventListener('mousemove', (e) => {
    const astros = document.querySelectorAll('.astro-foto');
    const moveX = (window.innerWidth / 2 - e.pageX) / 40;
    const moveY = (window.innerHeight / 2 - e.pageY) / 40;

    astros.forEach(astro => {
        astro.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});