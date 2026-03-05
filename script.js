// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Scroll to the target element smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Add active class to nav links based on scroll position
// This is a more advanced feature and requires Intersection Observer API for better performance.
// For simplicity, it's implemented with scroll event listener for now.
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let currentActiveSectionId = '';

    sections.forEach(section => {
        // Get the top position of the section relative to the viewport
        const sectionTop = section.getBoundingClientRect().top;
        // Get the height of the section
        const sectionHeight = section.clientHeight;

        // Determine if the scroll position is within the current section
        // Adjust `80` pixels for the fixed header height to ensure the section title is visible
        if (sectionTop <= 80 && sectionTop + sectionHeight > 80) {
            currentActiveSectionId = section.getAttribute('id');
        }
    });

    // Remove 'active' class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add 'active' class to the link corresponding to the current active section
    if (currentActiveSectionId) {
        const correspondingNavLink = document.querySelector(`.nav-link[href="#${currentActiveSectionId}"]`);
        if (correspondingNavLink) {
            correspondingNavLink.classList.add('active');
        }
    }
});
