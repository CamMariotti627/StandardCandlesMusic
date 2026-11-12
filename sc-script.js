const navButtons = document.querySelectorAll('#top-nav button');

navbuttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.location.href = btn.dataset.href;
    });
});