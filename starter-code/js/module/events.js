import * as support from './support.js';

export function checkHeaderClick(evt) {
  if (evt.target.matches('[data-nav-btn]')) {
    support.openOrCloseHeaderNav(evt);
  }

  if (evt.target.matches('[data-nav-link]')) {
    support.changeActiveNavLink(evt);
  }
}
