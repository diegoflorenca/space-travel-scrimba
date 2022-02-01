const mobileMenuToggle = document.querySelector('.mobile-nav-toggle');
const primaryNavigation = document.querySelector('#primary-navigation');

mobileMenuToggle.addEventListener('click', menuToggle);

function menuToggle() {
  const visibility = primaryNavigation.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNavigation.setAttribute('data-visible', true);
    mobileMenuToggle.setAttribute('aria-expanded', true);
  } else {
    primaryNavigation.setAttribute('data-visible', false);
    mobileMenuToggle.setAttribute('aria-expanded', false);
  }
}
