import * as support from './support.js';

export function checkHeaderClick(evt) {
  if (evt.target.matches('[data-menu-btn]')) {
    support.openOrCloseHeaderNav(evt);
  }
}
