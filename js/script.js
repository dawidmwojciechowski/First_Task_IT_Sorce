const hamBtn = document.querySelector('.hamburger');
const linksList = document.querySelector('header ul')

hamBtn.addEventListener('click', function() {
  linksList.classList.toggle('active');
})