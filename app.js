document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, password }),
    });

    const result = await response.json();

    if (response.ok) {
        // Если вход успешен, сохраняем токен и перенаправляем на страницу с расписанием
        localStorage.setItem('token', result.token);
        window.location.href = '/dashboard.html';
    } else {
        alert(result.message || 'Ошибка входа');
    }
});


// Функция для выхода из системы
function logout() {
    localStorage.removeItem('token');
    window.location.href = '/index.html';
}

// Функция для загрузки расписания и оценок
async function loadDashboardData() {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = '/index.html';  // Если нет токена, перенаправить на страницу входа
        return;
    }

    // Загружаем расписание
    const scheduleResponse = await fetch('http://localhost:3000/api/schedule', {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    const schedule = await scheduleResponse.json();
    const scheduleContainer = document.getElementById('schedule');
    scheduleContainer.innerHTML += `<pre>${JSON.stringify(schedule, null, 2)}</pre>`;

    // Загружаем оценки
    const gradesResponse = await fetch('http://localhost:3000/api/grades', {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    const grades = await gradesResponse.json();
    const gradesContainer = document.getElementById('grades');
    gradesContainer.innerHTML += `<pre>${JSON.stringify(grades, null, 2)}</pre>`;
}

loadDashboardData();
