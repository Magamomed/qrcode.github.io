window.onload = function() {
    const mainImage = document.getElementById('mainImage');
    mainImage.addEventListener('mouseover', () => {
        mainImage.style.opacity = "0.8";
    });

    mainImage.addEventListener('mouseout', () => {
        mainImage.style.opacity = "1.0";
    });
};
