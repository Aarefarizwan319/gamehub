import { getRandomQuote } from './main.js';

// Animated stars
function createStars(num) {
  const starBg = document.getElementById('star-bg');
  for (let i = 0; i < num; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${2 + Math.random() * 4}s`;
    starBg.appendChild(star);
  }
}

createStars(80);

// Star CSS
const starStyle = document.createElement('style');
starStyle.innerHTML = `
.star {
  position: absolute;
  background: linear-gradient(90deg, #fff, #b39ddb);
  border-radius: 50%;
  opacity: 0.8;
  box-shadow: 0 0 8px #fff8, 0 0 16px #b39ddb44;
  animation: twinkle 3s infinite ease-in-out;
}
@keyframes twinkle {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
}
`;
document.head.appendChild(starStyle);

// Quote of the day
const quoteEl = document.getElementById('quote');
quoteEl.textContent = getRandomQuote();
quoteEl.style.opacity = 1;