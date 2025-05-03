
const button = document.getElementById('openButton');
const envelope = document.getElementById('envelope');
const carta = document.getElementById('carta');
const bgMusic = document.getElementById('bgMusic');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  const colors = ['#e39ff6', '#ffb6c1', '#a3d8f4'];
  heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = '100%';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

button.addEventListener('click', () => {
  envelope.style.transform = 'scale(0)';
  carta.style.display = 'block';
  bgMusic.play();
  setInterval(createHeart, 300);
});
