const allBars = document.querySelectorAll('.bar-fill');
const redish = '#cf2f24';
const greeny = '#8bcf24';

// check state of warehouses

allBars.forEach(element => {
    if (parseFloat(element.style.width) >= 85) {
        element.style.backgroundColor = redish;
    } else {
        element.style.backgroundColor = greeny;
    }
});