const bars = document.querySelector('.bars');
const aside = document.querySelector('aside');
const closeBtn = document.querySelector('.close-btn');

bars.addEventListener('click', () => {
  aside.classList.add('show-links');
});

closeBtn.addEventListener('click', () => {
  aside.classList.remove('show-links');
});
