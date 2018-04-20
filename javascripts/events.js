// this will include event listener and print to dom
const dom = require('./dom');

const allButton = document.getElementById('all');
const catsButton = document.getElementById('cat');
const dogButton = document.getElementById('dog');
const dinoButton = document.getElementById('dino');

const allPetsEvent = (e) => {
  allButton.addEventListener('click', dom.allPrintToDom);
};

const allCatsEvent = (e) => {
  catsButton.addEventListener('click', dom.catsPrintToDom);
};

const allDogsEvent = () => {
  dogButton.addEventListener('click', dom.dogsPrintToDom);
};

const allDinoEvent = () => {
  dinoButton.addEventListener('click', dom.dinosPrintToDom);
};

module.exports = {
  allPetsEvent,
  allCatsEvent,
  allDogsEvent,
  allDinoEvent,
};
