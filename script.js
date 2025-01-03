document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');
    
    // Функция для открытия/закрытия меню
    hamburger.addEventListener('click', function() {
        if (sideMenu.style.left === '0px') {
            sideMenu.style.left = '-250px'; // Скрываем меню
        } else {
            sideMenu.style.left = '0px'; // Показываем меню
        }
    });
});
