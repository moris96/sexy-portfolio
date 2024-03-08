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

// Show the home page by default
window.addEventListener('load', () => {
  showPage('home');
});

// Carousel functionality
let slider = document.querySelector('.slider');
let wrapper = document.querySelector('.wrapper');
let next = document.querySelector('.arrow-next');
let prev = document.querySelector('.arrow-prev');
let item = document.querySelectorAll('.item');
let currdeg = 0;
let active = 0;

next.addEventListener('click', () => {
  slider.classList.toggle('zoom');
  currdeg = currdeg - 120;
  if (active === item.length - 1) {
    active = 0;
  } else {
    active++;
  }
  toggle();
});

prev.addEventListener('click', () => {
  slider.classList.toggle('zoom');
  currdeg = currdeg + 120;
  if (active === 0) {
    active = item.length - 1;
  } else {
    active--;
  }
  toggle();
});

let toggle = () => {
  setTimeout(() => {
    for (let i = 0; i < item.length; i++) {
      item[i].classList.remove('active');
    }
    item[active].classList.add('active')
    wrapper.style.transform = `rotateY(${currdeg}deg)`;
  }, 900);

  setTimeout(() => {
    slider.classList.toggle('zoom');
  }, 10);
}