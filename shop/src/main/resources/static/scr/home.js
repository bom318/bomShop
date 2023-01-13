'use strict'

const arrow = document.querySelector('.arrow-up');
const benner = document.querySelector('.main-benner');

// arrow
document.addEventListener('scroll' , () => {
    
    if (window.scrollY !== 0) {
        arrow.classList.add('visible');
        return;
    } else {
        arrow.classList.remove('visible');
    }
})

arrow.addEventListener('click', () => {
    benner.scrollIntoView({behavior: 'smooth'});
})