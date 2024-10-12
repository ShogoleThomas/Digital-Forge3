// script.js

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const numStars = 100;
let stars = [];

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2,
        velocity: Math.random() * 0.5,
    });
}

function drawStars() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#00ffcc";
        ctx.fill();
    }
}

function updateStars() {
    for (let i = 0; i < stars.length; i++) {
        stars[i].y += stars[i].velocity;
        if (stars[i].y > height) {
            stars[i].y = 0;
            stars[i].x = Math.random() * width;
        }
    }
}

function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
}

animate();

// Resize canvas when window is resized
window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});
