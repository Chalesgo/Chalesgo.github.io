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