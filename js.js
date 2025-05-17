
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        mobileMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
    } else {
        mobileMenu.classList.remove('hidden');
        menuButton.setAttribute('aria-expanded', 'true');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');

    if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    }
});
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    const navLinks = navbar.querySelectorAll('a');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-opacity-50', 'backdrop-blur-md');
        navbar.classList.remove('bg-blue-800');
        navLinks.forEach(link => link.classList.add('text-blue-800'));
    } else {
        navbar.classList.remove('bg-opacity-50', 'backdrop-blur-md');
        navbar.classList.add('bg-blue-800');
        navLinks.forEach(link => link.classList.remove('text-blue-800'));
    }
});