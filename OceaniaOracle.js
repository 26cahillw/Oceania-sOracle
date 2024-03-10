const internalLinks = document.querySelectorAll('nav button');

internalLinks.forEach(link => {

  link.addEventListener('click', (event) => {

    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('id');
    const targetElement = document.querySelector(`#${targetId}`);
    targetElement.scrollIntoView({ behavior: 'smooth' });

  });
});

const languageToggleLinks = document.querySelectorAll('.language-selector a'); 
const overlay = document.getElementById('big-brother-overlay');
const closeOverlay = document.getElementById('close-overlay');

languageToggleLinks.forEach(link => {
  link.addEventListener('click', showOverlay);
});

function showOverlay() {
  overlay.style.display = 'block';
}

closeOverlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});
