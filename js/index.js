// Your code goes here
/* 	* [ ] `mouseover`
 * [ ] `keydown`
 * [ ] `wheel`
 * [ ] `drag / drop`
 * [ ] `load`
 * [ ] `focus`
 * [ ] `resize`
 * [ ] `scroll`
 * [ ] `select`
 * [ ] `dblclick`
 */

// Replicating randomise color nav from WEB16 Class video
const heroImage = document.querySelector('header img');
const navItems = document.querySelectorAll('nav a');

function getColor() {
  const letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomise() {
  navItems.forEach(item => (item.style.color = getColor()));
}

heroImage.addEventListener('mousemove', randomise);

// Scroll to the botton on dblclick of "Let's Go Header"
const letsGo = document.querySelector('.text-content h2');

function pageBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

letsGo.addEventListener('dblclick', pageBottom);

// Add image opacity on hover
const image1 = document.querySelector('.img-one');

function enlarge() {
  image1.style.opacity = '0.5';
}

image1.addEventListener('mouseover', enlarge);
