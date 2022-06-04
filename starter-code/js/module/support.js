const actualUrl = document.location.href;
const allNavLinks = document.querySelectorAll('[data-nav-link]');
const sourceImage = document.querySelector('[data-source-image]');
const image = document.querySelector('[data-image]');
const name = document.querySelector('[data-name]');
const description = document.querySelector('[data-description]');

export function openOrCloseHeaderNav(evt) {
  evt.currentTarget.classList.toggle('header--active');
}

export function changeActiveNavLink() {
  allNavLinks.forEach(link => {
    if (!actualUrl.includes(link)) return;
    link.classList.add('header__link--active');
  });
}

export function changeButtonLink() {
  if (!actualUrl.includes('index')) return;
  const buttonLink = document.querySelector('[data-button-link]');
  const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  buttonLink.href = allNavLinks[randomNumber].href;
}

export async function checkMainDataset(dataset, optionNumber) {
  const data = await getData(dataset, optionNumber);

  switch (dataset) {
    case 'destinations':
      changeDestinationsContent(data);
      break;
    case 'crew':
      changeCrewContent(data);
      break;
    case 'technology':
      changeTechnologyContent(data);
      break;
  }
}

async function changeDestinationsContent(data) {
  const distance = document.querySelector('[data-distance]');
  const travel = document.querySelector('[data-travel]');

  sourceImage.srcset = data.images.png;
  image.src = data.images.webp;
  image.alt = data.name;
  name.innerText = data.name;
  description.innerText = data.description;
  distance.innerText = data.distance;
  travel.innerText = data.travel;
}

async function changeCrewContent(data) {
  const role = document.querySelector('[data-role]');
  const section = document.querySelector('[data-section]');

  section.dataset.section = data.role;
  sourceImage.srcset = data.images.png;
  image.src = data.images.webp;
  image.alt = data.name;
  name.innerText = data.name;
  role.innerText = data.role;
  description.innerText = data.bio;
}

async function changeTechnologyContent(data) {
  sourceImage.srcset = data.images.portrait;
  image.src = data.images.landscape;
  image.alt = data.name;
  name.innerText = data.name;
  description.innerText = data.description;
}

async function getData(dataset, optionNumber) {
  const response = await fetch('./data.json');
  const data = await response.json();
  return data[dataset][optionNumber];
}
