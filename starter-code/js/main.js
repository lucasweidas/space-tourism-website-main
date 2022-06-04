import * as events from './module/events.js';
import * as support from './module/support.js';

const header = document.querySelector('[data-header]');
const main = document.querySelector('[data-main]');

document.addEventListener('DOMContentLoaded', () => {
  support.changeActiveNavLink();
  support.changeButtonLink();
});

header.addEventListener('click', events.checkHeaderClick);

main.addEventListener('change', events.checkMainChange);
