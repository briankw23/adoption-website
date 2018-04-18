// this will include event listener and print to dom
const data = require('./data');

const allButton = document.getElementById('all');
const catsButton = document.getElementById('cat');
const dogButton = document.getElementById('dog');
const dinoButton = document.getElementById('dino');

const allPetsEvent = (e) => {
  allButton.addEventListener('click', data.initializer);
};

const allCatsEvent = (e) => {
  catsButton.addEventListener('click', data.getCats);
};

const allDogsEvent = () => {
  dogButton.addEventListener('click', data.getDogs);
};

const allDinoEvent = () => {
  dinoButton.addEventListener('click', data.getDino);
};

module.exports = {
  allPetsEvent,
  allCatsEvent,
  allDogsEvent,
  allDinoEvent,
};
