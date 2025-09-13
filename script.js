
/******************************************** toggle icon portfolio in header ********************************************/

let icon = document.querySelector(".icon1");
let ul = document.querySelector("navbar a");
icon.addEventListener("click", () => {
    navbar .classList.toggle("showData");
    if (navbar .classList.contains("showData")) {
        document.getElementById("bar").className = "fa-solid fa-xmark";
    } else {
        document.getElementById("bar").className = "fa-solid fa-bars";
    }
});


/******************************************** toggle icon navbar ********************************************/

let menuIcon = document.querySelector('#menu-icon'); // Corrected variable name
let navbar = document.querySelector('header .navbar'); // Added 'header' to querySelector for specificity

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/******************************************** scroll section active link ********************************************/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY; // Corrected variable name
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Corrected variable name
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active'); // Added '#' and corrected concatenation
        }
    });

    /******************************************** sticky navbar ********************************************/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); // Corrected variable name

    /******************************************** remove toggle icon and navbar ********************************************/
    if (!navbar.classList.contains('active')) { // Added check to only remove class if navbar is not active
        menuIcon.classList.remove('fa-xmark');
    }
    if (!menuIcon.classList.contains('fa-xmark')) { // Added check to only remove class if icon is not active
        navbar.classList.remove('active');
    }
}

/******************************************** scroll reveal ********************************************/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // Corrected class name

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' }); // Corrected class name

ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' }); // Corrected class name

ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' }); // Corrected class name

/******************************************** typed js ********************************************/

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});