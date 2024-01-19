function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

const nightModeButton = document.getElementById('night-mode-button');
nightModeButton.addEventListener('click', toggleNightMode);