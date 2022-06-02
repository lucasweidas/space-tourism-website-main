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

export function checkDataset(dataset, optionNumber) {
  switch (dataset) {
    case 'destinations':
      changeDestinationsContent(dataset, optionNumber);
      break;
    case 'crew':
      changeCrewContent(dataset, optionNumber);
      break;
    case 'technology':
      changeTechnologyContent(dataset, optionNumber);
      break;
  }
}

async function changeDestinationsContent(dataset, optionNumber) {
  const data = await getData(dataset, optionNumber);
  const sourceImage = document.querySelector('[data-source-image]');
  const image = document.querySelector('[data-image]');
  const name = document.querySelector('[data-name]');
  const description = document.querySelector('[data-description]');
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

async function changeCrewContent(dataset, optionNumber) {
  const data = await getData(dataset, optionNumber);
  const sourceImage = document.querySelector('[data-source-image]');
  const image = document.querySelector('[data-image]');
  const name = document.querySelector('[data-name]');
  const role = document.querySelector('[data-role]');
  const bio = document.querySelector('[data-bio]');
  const section = document.querySelector('[data-section]');

  section.dataset.section = data.role;
  sourceImage.srcset = data.images.png;
  image.src = data.images.webp;
  image.alt = data.name;
  name.innerText = data.name;
  role.innerText = data.role;
  bio.innerText = data.bio;
}

async function changeTechnologyContent(dataset, optionNumber) {
  const data = await getData(dataset, optionNumber);
  const sourceImage = document.querySelector('[data-source-image]');
  const image = document.querySelector('[data-image]');
  const name = document.querySelector('[data-name]');
  const description = document.querySelector('[data-description]');

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
