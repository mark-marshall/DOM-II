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

function addOpacity() {
  image1.style.opacity = '0.5';
}

image1.addEventListener('mouseover', addOpacity);

// Remove image opacity after hover
function originalOpacity() {
  image1.style.opacity = '1.0';
}

image1.addEventListener('mouseout', originalOpacity);

// Tell user when page has loaded
const logoHeader = document.querySelector('header h1');

function growFont() {
  logoHeader.style.fontSize = '60pt';
  logoHeader.style.color = 'green';
}

logoHeader.addEventListener('click', growFont);

// Change body text on scroll
const bodyText = document.querySelector('body');

function changesBodyText() {
  bodyText.style.color = 'orange';
}

window.addEventListener('scroll', changesBodyText);

// Change body text on key-down and shift key-down
const buttons = document.querySelectorAll('.btn');

function colorRed() {
  buttons.forEach(item => (item.style.backgroundColor = 'red'));
}

window.addEventListener('keydown', colorRed);

// Take away other destination divs when click on FITS
const fitsButton = document.querySelector('.fits');
const dest = document.querySelectorAll('.d2');

function removeContent() {
  dest.forEach(item => item.classList.toggle('display-none'));
}

fitsButton.addEventListener('click', removeContent);

// Toggle red border on bottom image on mouseover
const bottomImage = document.querySelector('.content-destination img');

function toggleClassBorder() {
  bottomImage.classList.toggle('red-border');
}

bottomImage.addEventListener('mouseover', toggleClassBorder);

// Add opacity to AA image if shift and clicked on
const aaImage = document.querySelector('.img-fluid');

aaImage.addEventListener('click', opacity);

function opacity(eventObj) {
  const { shiftKey } = eventObj;
  if (shiftKey === true) {
    aaImage.style.opacity = '0.8';
  }
}

//Stop navigation items from refreshing the page
function preventDefault(event) {
  event.preventDefault();
}

navItems[0].addEventListener('click', preventDefault);
navItems[1].addEventListener('click', preventDefault);
navItems[2].addEventListener('click', preventDefault);
navItems[3].addEventListener('click', preventDefault);
