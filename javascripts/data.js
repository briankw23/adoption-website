// data is where i will pass from request
const http = require('./pets');
const dom = require('./dom');

let pets = [];
const cats = [];
const dogs = [];
const dinos = [];

const petSet = (petArray) => {
  pets = petArray;
  getCats(pets);
  getDogs(pets);
  getDinos(pets);
};

const getCats = (pets) => {
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === 'cat') {
      cats.push(pets[i]);
    };
  };
  dom.catCards(cats);
};

const getDogs = (pets) => {
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === 'dog') {
      dogs.push(pets[i]);
    };
  };
  dom.dogCards(dogs);
};
const getDinos = (pets) => {
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === 'dino') {
      dinos.push(pets[i]);
    };
  };
  dom.dinoCards(dinos);
};

const successXhr = function () {
  const dataPets = JSON.parse(this.responseText).pets;
  dom.buildPets(dataPets);
  petSet(dataPets);
};

const failXhr = function () {
  console.error('epic fail');
};

const initializer = () => {
  http(successXhr, failXhr);
};

module.exports = {
  initializer,
};
