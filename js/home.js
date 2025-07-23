// Floating stars animation
function createStar() {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.opacity = Math.random() * 0.7 + 0.3;
  star.style.position = 'absolute';
  star.style.background = 'white';
  star.style.borderRadius = '50%';
  star.style.boxShadow = `0 0 ${size * 8}px #fff, 0 0 ${size * 16}px #b39ddb`;
  document.getElementById('star-bg').appendChild(star);
}

function animateStars() {
  const starBg = document.getElementById('star-bg');
  starBg.innerHTML = '';
  for (let i = 0; i < 80; i++) createStar();
}

document.addEventListener('DOMContentLoaded', () => {
  // Animate stars
  animateStars();
  window.addEventListener('resize', animateStars);

  // Motivational quotes
  const quotes = [
    "Stories are the wildest things of all. — Patrick Ness",
    "The world is shaped by two things — stories told and the memories they leave behind. — Vera Nazarian",
    "You can make anything by writing. — C.S. Lewis",
    "A single dream is more powerful than a thousand realities. — J.R.R. Tolkien",
    "Imagination is the only weapon in the war against reality. — Lewis Carroll",
    "Every great story seems to begin with a snake. — Nicolas Cage",
    "There is no greater agony than bearing an untold story inside you. — Maya Angelou",
    "Let your imagination soar among the stars!"
  ];
  const quoteEl = document.getElementById('quote');
  quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
});