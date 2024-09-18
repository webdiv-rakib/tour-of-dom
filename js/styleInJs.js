const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.textAlign = 'center';
    section.style.listStyle = 'none';
    section.style.borderRadius = '16px';
    section.style.backgroundColor = 'lightgrey';
    section.style.marginBottom = '10px';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('yellow-bg');