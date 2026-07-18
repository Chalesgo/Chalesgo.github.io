function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    updateNightModeButton();
}

function updateNightModeButton() {
    const isNight = document.body.classList.contains('night-mode');
    nightModeButton.textContent = isNight ? '☀️' : '🌙';
}

const nightModeButton = document.getElementById('night-mode-button');
nightModeButton.addEventListener('click', toggleNightMode);
updateNightModeButton();

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .menu-links a');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((section) => sectionObserver.observe(section));