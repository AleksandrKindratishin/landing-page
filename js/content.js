document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы с атрибутом data-target (кнопки)
    const links = document.querySelectorAll('a[data-target]');

    // Функция для показа выбранной секции
    function showSection(id) {
        // Скрываем все секции, убираем класс active
        const sections = document.querySelectorAll('.content, .warning');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Показываем секцию с соответствующим id
        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    // Назначаем обработчик кликов для каждой ссылки
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем стандартное поведение ссылки
            const targetId = link.getAttribute('data-target'); // Получаем ID секции
            showSection(targetId); // Показываем секцию
        });
    });

    // Добавляем функционал для кнопки "next" на слайдере
    const sliderNextBtn = document.querySelector('.slider__next');
    if (sliderNextBtn) {
        sliderNextBtn.addEventListener('click', function(event) {
            event.preventDefault();
            showSection('warning'); // Показываем секцию предупреждения
        });
    }

    // Добавляем функционал для кнопки "Ok, Continue" в предупреждении
    const warningOkBtn = document.querySelector('.warning__ok');
    if (warningOkBtn) {
        warningOkBtn.addEventListener('click', function(event) {
            event.preventDefault();
            showSection('header'); // Возвращаем пользователя в хедер
        });
    }
});
