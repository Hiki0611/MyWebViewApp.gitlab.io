document.addEventListener('DOMContentLoaded', function () {
    // Переключение для гамбургер-меню
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('open');  // Открытие/закрытие бокового меню
    });
});
