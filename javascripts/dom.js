let domString = '';
const buildPets = (data) => {
  for (let i = 0; i < data.length; i++) {
    domString += `<div class="col-md-4 text-center">`;
    domString += `<div class="panel panel-default">`;
    domString += `<div class="panel-heading">`;
    domString += `<h1 class="panel-title">${data[i].name}</h1>`;
    domString += `</div>`;
    domString += `<div class="panel-body">`;
    domString += `<img class='img-rounded' src='${data[i].imageUrl}'>;`;
    domString += `<p>${data[i].specialSkill}<p>`;
    domString += `<p id="${data[i].type}">${data[i].type}</p>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  }
  printToDom(domString,'main');
};

const allPrintToDom = (e) => {
  document.getElementById('main').innerHTML = domString;
};

const printToDom = (string,divId) => {
  document.getElementById(divId).innerHTML += string;
};

let catDomString = '';
const catCards = (cats) => {
  for (let i = 0; i < cats.length; i++) {
    catDomString += `<div class="col-md-4 text-center">`;
    catDomString += `<div class="panel panel-default">`;
    catDomString += `<div class="panel-heading">`;
    catDomString += `<h1 class="panel-title">${cats[i].name}</h1>`;
    catDomString += `</div>`;
    catDomString += `<div class="panel-body">`;
    catDomString += `<img class='img-rounded' src='${cats[i].imageUrl}'>;`;
    catDomString += `<p>${cats[i].specialSkill}<p>`;
    catDomString += `<p id="${cats[i].type}">${cats[i].type}</p>`;
    catDomString += `</div>`;
    catDomString += `</div>`;
    catDomString += `</div>`;
  };
};
const catsPrintToDom = (e) => {
  document.getElementById('main').innerHTML = catDomString;
};

let dogDomString = '';
const dogCards = (dogs) => {
  for (let i = 0; i < dogs.length; i++) {
    dogDomString += `<div class="col-md-4 text-center">`;
    dogDomString += `<div class="panel panel-default">`;
    dogDomString += `<div class="panel-heading">`;
    dogDomString += `<h1 class="panel-title">${dogs[i].name}</h1>`;
    dogDomString += `</div>`;
    dogDomString += `<div class="panel-body">`;
    dogDomString += `<img class='img-rounded' src='${dogs[i].imageUrl}'>;`;
    dogDomString += `<p>${dogs[i].specialSkill}<p>`;
    dogDomString += `<p id="${dogs[i].type}">${dogs[i].type}</p>`;
    dogDomString += `</div>`;
    dogDomString += `</div>`;
    dogDomString += `</div>`;
  };
  console.log('catDomString', dogDomString);
};
const dogsPrintToDom = (e) => {
  document.getElementById('main').innerHTML = dogDomString;
};

let dinoDomString = '';
const dinoCards = (dinos) => {
  console.log('domdinos',dinos);
  for (let i = 0; i < dinos.length; i++) {
    dinoDomString += `<div class="col-md-4 text-center">`;
    dinoDomString += `<div class="panel panel-default">`;
    dinoDomString += `<div class="panel-heading">`;
    dinoDomString += `<h1 class="panel-title">${dinos[i].name}</h1>`;
    dinoDomString += `</div>`;
    dinoDomString += `<div class="panel-body">`;
    dinoDomString += `<img class='img-rounded' src='${dinos[i].imageUrl}'>;`;
    dinoDomString += `<p>${dinos[i].specialSkill}<p>`;
    dinoDomString += `<p id="${dinos[i].type}">${dinos[i].type}</p>`;
    dinoDomString += `</div>`;
    dinoDomString += `</div>`;
    dinoDomString += `</div>`;
  };
  console.log('catDomString', dinoDomString);
};
const dinosPrintToDom = (e) => {
  document.getElementById('main').innerHTML = dinoDomString;
};

module.exports = {
  buildPets,
  catCards,
  catsPrintToDom,
  dogCards,
  dogsPrintToDom,
  dinoCards,
  dinosPrintToDom,
  allPrintToDom,
};
