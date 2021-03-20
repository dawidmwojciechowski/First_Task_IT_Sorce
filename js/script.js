const hamBtn = document.querySelector('.hamburger');
const linksList = document.querySelector('nav ul')

hamBtn.addEventListener('click', function() {
  linksList.classList.toggle('active');
})