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

    navbarMenu.classList.remove('open');
})


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuItems = document.querySelectorAll('.navbar__menu__item');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    scrollIntoView(link);
    navbarMenuItems.forEach((item) => {
        if(item.dataset.link == event.target.dataset.link) {
            event.target.classList.add('active');
        } else {
            event.target.classList.remove('active');
        }
    })
})

// Navbar menu button for small screen

const toggleBtn = document.querySelector('.navbar__toggle-btn');
toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
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


// Make Arrow-Up Button
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


// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectsContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    projectsContainer.classList.add('anim-out');
    setTimeout(()=> {
        projects.forEach((project) => {
            if(filter == '*' || filter == project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        })
        projectsContainer.classList.remove('anim-out');
    }, 300);
})


// Button
const categoryBtn = document.querySelectorAll('.category__btn');
workBtnContainer.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    categoryBtn.forEach((category)=> {
        console.log(category);
        console.log(category.dataset.filter);
        if(filter == category.dataset.filter) {
            category.classList.add('active');
        } else{
            category.classList.remove('active');
        }
    });
});


//