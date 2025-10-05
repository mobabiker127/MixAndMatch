
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const bg = new Image();
bg.src = "images/shop-bg.jpg";

bg.onload = function() {
ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

}