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
})


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    scrollIntoView(link);
})


// Handle scrolling when tapping on the 'CONTACT ME' button
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}


// fade Function
function fadeSection (sectionId, sectionNum) {
    const section = document.querySelector(sectionId); 
    const height = section.getBoundingClientRect().height;
    section.style.opacity = sectionNum - window.scrollY / height;
}

// Make home slowly fade to transparent as the window scrolls down

document.addEventListener('scroll', () => {
    fadeSection('.home__container', 1);
})

// Make 'about' slowly fade to transparent as the window scrolls down

document.addEventListener('scroll', () => {
    fadeSection('#about', 2);
})

const navBar = document.querySelector('.navbar__menu');

navBar.addEventListener('click', (event) => {
    console.log(event.target);
})


const arrow = document.querySelector('.arrow-up');
arrow.addEventListener('click', ()=> {
    const home = document.querySelector('#home');
    home.scrollIntoView({behavior: "smooth"});
})

document.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        arrow.classList.add('visible');
    } else {
        arrow.classList.remove('visible');
    }
})