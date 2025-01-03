// Функция для открытия/закрытия бокового меню
function toggleMenu() {
  const sideMenu = document.getElementById('sideMenu');
  const currentPosition = sideMenu.style.left;

  // Если меню скрыто, показываем его, если открыто - скрываем
  if (currentPosition === '-250px' || currentPosition === '') {
    sideMenu.style.left = '0';
  } else {
    sideMenu.style.left = '-250px';
  }
}
