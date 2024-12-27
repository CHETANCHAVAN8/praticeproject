const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.backgroundColor = '#333';
backToTopButton.style.color = '#fff';
backToTopButton.style.padding = '10px 20px';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.border = 'none';
backToTopButton.style.cursor = 'pointer';

document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});