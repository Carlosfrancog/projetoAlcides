const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navList.classList.toggle('active');
});