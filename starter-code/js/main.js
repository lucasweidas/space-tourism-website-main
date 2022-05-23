import * as events from './module/events.js';
import * as support from './module/support.js';

const header = document.querySelector('.header');

header.addEventListener('click', events.checkHeaderClick);

document.addEventListener('DOMContentLoaded', support.changeActiveNavLink);
