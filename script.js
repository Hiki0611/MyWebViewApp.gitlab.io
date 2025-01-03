// Получаем элементы
const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');

// Открытие/закрытие меню
hamburger.addEventListener('click', () => {
  sideMenu.style.left = sideMenu.style.left === '0px' ? '-250px' : '0px';
});
