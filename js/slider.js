document.addEventListener('DOMContentLoaded', () => {
    const sliderCards = document.querySelector('.slider__cards');
    const sliderItems = document.querySelectorAll('.slider__item');
    const prevButton = document.querySelector('.slider__arrow--left');
    const nextButton = document.querySelector('.slider__arrow--right');
    
    let index = 0;
    
    const updateSlider = () => {
        const totalItems = sliderItems.length;
        const itemWidth = sliderItems[0].clientWidth;
        sliderCards.style.transform = `translateX(${-index * itemWidth}px)`;
    };

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : sliderItems.length - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        index = (index < sliderItems.length - 1) ? index + 1 : 0;
        updateSlider();
    });

    // Initial update
    updateSlider();
});
