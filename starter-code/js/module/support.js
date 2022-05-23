export function openOrCloseHeaderNav(evt) {
  evt.currentTarget.classList.toggle('header--active');
}

export function changeActiveNavLink() {
  const url = location.href;
  const allNavLinks = document.querySelectorAll('[data-nav-link]');

  allNavLinks.forEach(link => {
    if (!url.includes(link)) return;
    link.classList.add('header__link--active');
  });
}
