const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

function showPage(pageId) {
  pages.forEach(page => {
    page.classList.remove('active');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  const activePage = document.querySelector(`#${pageId}`);
  activePage.classList.add('active');

  const activeLink = document.querySelector(`a[href="#${pageId}"]`);
  activeLink.classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const pageId = e.target.getAttribute('href').slice(1);
    showPage(pageId);
    navLinksContainer.classList.remove('active');
  });
});

hamburger.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

window.addEventListener('click', e => {
  if (!e.target.matches('.nav-link') && !e.target.matches('.hamburger')) {
    navLinksContainer.classList.remove('active');
  }
});

showPage('home'); // Show the home page by default