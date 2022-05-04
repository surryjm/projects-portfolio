// (function() {

const nav = document.getElementById('navbar');
const hamburgerIcon = document.getElementById('hamburger-icon');
const logo = document.getElementById('logo');
const navLinks = document.querySelectorAll('.nav-links');

// Open responsive navigation
function openNav() {
  let main = document.getElementById('main');
  if (nav.className === 'navbar') {
    nav.className += ' nav-open';
    main.className = 'blur';
  } else {
    nav.className = 'navbar';
    main.classList.remove('blur');
  }
}

// Close responsive navigation
function closeNav() {
  let nav = document.getElementById('navbar');
  let main = document.getElementById('main');
  if (nav.classList.contains('nav-open')) {
    nav.className = 'navbar';
    main.classList.remove('blur');
  }
}

// Add event listeners
hamburgerIcon.addEventListener('click', openNav);
logo.addEventListener('click', closeNav);
navLinks.forEach(navlink => {
  navlink.addEventListener('click', closeNav);
});

// Close responsive navigation if window is > 768px
window.addEventListener('resize', function() {
  let nav = document.getElementById('navbar');
  let main = document.getElementById('main');
  if (window.innerWidth > 768) {
    nav.className = 'navbar';
    main.classList.remove('blur');
  }
});

// Registering service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
  .then(registration => {
    console.log('Registration successful, scope is: ', registration.scope);
  })
  .catch(error => {
    console.log('Service worker registration failed, error: ', error);
  });
}

// })();