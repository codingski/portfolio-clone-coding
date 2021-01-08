'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }

    console.log(window.scrollY);
})

const about = document.getElementById('#about__');

about.addEventListener('click', () => {
    about.scrollIntoView(false, {block: "end", inline: "nearest"});
})