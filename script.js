function moveSlide(button, step) {
    const slider = button.closest('.slider');
    const images = slider.querySelectorAll('.slides img');
    let currentIndex = parseInt(slider.getAttribute('data-current'));

    images[currentIndex].classList.remove('active');
    currentIndex += step;

    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;

    images[currentIndex].classList.add('active');
    slider.setAttribute('data-current', currentIndex);
}
