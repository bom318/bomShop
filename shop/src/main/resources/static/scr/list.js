'use strict'

const arrow = document.querySelector('.arrow-up');
const title = document.querySelector('.title');

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
    title.scrollIntoView({behavior: 'smooth'});
})