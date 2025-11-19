document.querySelectorAll('img.lazy-img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('visible');
    });
});