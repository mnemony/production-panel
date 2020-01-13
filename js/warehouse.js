const allBars = document.querySelectorAll('.bar-fill');
const redish = 'rgba(207, 47, 36, 0.801)';
const greeny = 'rgba(139, 207, 36, 0.801)';
const yellowlike = '#d4ca33c5';

// check state of warehouses

allBars.forEach(element => {
    if (parseFloat(element.style.width) >= 85) {
        element.style.backgroundColor = redish;
    } else if (parseFloat(element.style.width) <= 25) {
        element.style.backgroundColor = yellowlike;
    } else {
        element.style.backgroundColor = greeny;
    }
});