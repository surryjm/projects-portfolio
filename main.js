function openNav() {
  let nav = document.getElementById('navbar');
  console.log(nav);
  if (nav.className === 'navbar') {
    nav.className += ' responsive';
  } else {
    nav.className = 'navbar';
  }
}