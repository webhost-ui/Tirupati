document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksWrapper = document.querySelector('.nav-links-wrapper');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Sticky Navbar Logic
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled', 'glass');
        } else {
            navbar.classList.remove('scrolled', 'glass');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Mobile Menu Logic
    const toggleMenu = () => {
        const isOpen = navLinksWrapper.classList.contains('open');
        if (isOpen) {
            navLinksWrapper.classList.remove('open');
            navbar.classList.remove('mobile-menu-open');
            hamburger.classList.remove('active');
        } else {
            navLinksWrapper.classList.add('open');
            navbar.classList.add('mobile-menu-open');
            hamburger.classList.add('active');
        }
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksWrapper.classList.remove('open');
            navbar.classList.remove('mobile-menu-open');
            hamburger.classList.remove('active');
        });
    });
});
