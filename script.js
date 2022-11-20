const navbarList = document.querySelector('.navbar-list');
const hamburgerOpen = document.querySelector('.hamburger__open');
const hamburgerClose = document.querySelector('.hamburger__close');

function hamburgerAction(check) {
  if (check.checked) {
    navbarList.classList.add('unhide');
    hamburgerOpen.classList.add('close');
    hamburgerClose.classList.add('open');
  } else {
    navbarList.classList.remove('unhide');
    hamburgerOpen.classList.remove('close');
    hamburgerClose.classList.remove('open');
  }
}

AOS.init();
