// Add class to header and footer on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('topbar');
    const footer = document.getElementById('footer');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        footer.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        footer.classList.remove('scrolled');
    }
});
