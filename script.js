const canvas = document.getElementById('patternCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawPattern() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const shapeCount = 20;
    for (let i = 0; i < shapeCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 50 + 10;
        ctx.fillStyle = getRandomColor();
        if (Math.random() > 0.5) {
            // Draw a rectangle
            ctx.fillRect(x, y, size, size);
        } else {
            // Draw a circle
            ctx.beginPath();
            ctx.arc(x, y, size / 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

drawPattern();
