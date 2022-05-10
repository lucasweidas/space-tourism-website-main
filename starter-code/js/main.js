import * as events from './module/events.js';

const header = document.querySelector('.header');

header.addEventListener('click', events.checkHeaderClick);
