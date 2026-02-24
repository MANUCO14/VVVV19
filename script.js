// 1. CONFIGURACIÓN DEL FONDO (CANVAS)
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for(let i=0; i<150; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        s.y -= s.speed;
        if(s.y < 0) s.y = canvas.height;
    });
    requestAnimationFrame(drawStars);
}
drawStars();

// 2. GENERAR LAS 19 RAZONES
const razones = [
    "Tu risa por FaceTime", "Tu paciencia infinita", "Cómo brillas al hablar de lo que amas",
    "Tu apoyo en mis días grises", "Nuestras llamadas eternas", "Tu mirada en cada foto",
    "Tu fuerza ante los retos", "Cómo me haces mejor persona", "Tu sentido del humor único",
    "Nuestros planes a futuro", "La primera vez que nos vimos", "Tu voz al despertar",
    "Tu honestidad", "Cómo cuidas de los tuyos", "Tu estilo único",
    "Que eres mi lugar seguro", "Nuestras metas juntos", "Tu forma de ver el mundo",
    "Simplemente, que eres tú."
];

const grid = document.getElementById('gridEstrellas');
razones.forEach((texto, i) => {
    let star = document.createElement('div');
    star.className = 'star-icon';
    star.title = "Haz clic";
    star.onclick = () => {
        alert(`Razón ${i+1}: ${texto}`);
        star.style.background = "#fff"; // Marcar como leída
    };
    grid.appendChild(star);
});

// 3. FUNCIONES DE NAVEGACIÓN Y REGALO
function scrollToId(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function openGift() {
    const music = document.getElementById('musicaEve');
    const envelope = document.getElementById('envelope');
    const carta = document.getElementById('carta');

    envelope.style.display = 'none';
    carta.style.display = 'block';
    
    music.volume = 0.5;
    music.play();

    // Lluvia de confeti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#fdb813', '#5eb5e0', '#ffffff']
    });
}