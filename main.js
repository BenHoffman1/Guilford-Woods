// Last Updated 
const lastUpdated = "2024-07-17"; // YYYY-MM-DD format

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('lastUpdated').textContent = lastUpdated;
});

// Visit button animation
const visitButton = document.getElementById('visit-button');
const arrowImg = visitButton.querySelector('img');
const defaultSrc = arrowImg.src;
const hoverSrc = 'images/visit-arrow-max.svg';

visitButton.addEventListener('mouseenter', () => {
    arrowImg.src = hoverSrc;
});

visitButton.addEventListener('mouseleave', () => {
    arrowImg.src = defaultSrc;
});