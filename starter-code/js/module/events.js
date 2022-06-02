import * as support from './support.js';

export function checkHeaderClick(evt) {
  if (evt.target.matches('[data-nav-btn]')) {
    support.openOrCloseHeaderNav(evt);
  }

  if (evt.target.matches('[data-nav-link]')) {
    support.changeActiveNavLink(evt);
  }
}

export function checkMainChange(evt) {
  if (evt.target.matches('[data-option]')) {
    const dataset = evt.currentTarget.dataset.main;
    const optionNumber = evt.target.dataset.option;

    support.checkDataset(dataset, optionNumber);
  }
}
