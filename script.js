// script.js

// Example: Toggle mobile menu (with null checks)
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

// Insert current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}); 