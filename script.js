// 1. MOBILE NAVBAR TOGGLE (Flawless Logic)

const menuBtn = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Open/Close Menu on click
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-xmark'); // Changes bars to X
});

// Automatically close the menu when ANY link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
    });
});


// 2. STICKY HEADER & ACTIVE SCROLL LINKS

const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;

    // Sticky Header
    header.classList.toggle('sticky', currentScroll > 50);

    // Active Link Highlighting
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Accounting for sticky header height
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (currentScroll >= offset && currentScroll < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Select the link that matches the current section ID
            let activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// 3. TYPED.JS INITIALIZATION

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'AI Enthusiast', 'Youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


// 4. SCROLL REVEAL ANIMATIONS

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: false // Set to true if you want animations to trigger every time you scroll up and down
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); 
ScrollReveal().reveal('.home-img, .services-container, .portfolio-card, .iframe-container, .contact-form', { origin: 'bottom' }); 
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' }); 
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
