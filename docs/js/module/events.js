import * as support from './support.js';

export function checkHeaderClick(evt) {
  if (evt.target.matches('[data-nav-btn]')) {
    support.toggleHeaderNav(evt);
  }

  if (evt.target.matches('[data-nav-link]')) {
    support.changeActiveNavLink(evt);
  }
}

export function checkMainChange(evt) {
  if (evt.target.matches('[data-option]')) {
    const dataset = evt.currentTarget.dataset.main;
    const optionNumber = Number(evt.target.dataset.option);

    support.checkMainDataset(dataset, optionNumber);
  }
}
