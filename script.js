// Функция для смены страниц
function showPage(pageId) {
    // Скрываем все страницы
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    // Показываем выбранную страницу
    document.getElementById(pageId).style.display = 'block';
}

// Смена темы
const themeToggle = document.getElementById('theme-toggle');
const themes = ['light', 'dark', 'gold', 'red', 'beige'];
let currentThemeIndex = 0;

themeToggle.addEventListener('click', () => {
    // Удаляем текущую тему
    document.body.classList.remove(`${themes[currentThemeIndex]}-theme`);
    // Переключаем на следующую тему
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    // Добавляем новую тему
    document.body.classList.add(`${themes[currentThemeIndex]}-theme`);
});

// По умолчанию показываем первую страницу
showPage('about');

