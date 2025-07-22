// This file contains JavaScript code for interactivity on the portfolio, such as form validation, animations, or dynamic content loading. 

document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Example: Form validation for contact form
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            if (!name || !email) {
                e.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }
});