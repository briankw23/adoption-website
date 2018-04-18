// data is where i will pass from request
const http = require('./pets');
const dom = require('./dom');

let pets = [];
// const cats = [];
// let dogs = [];
// let dinos = [];

const petSet = (petArray) => {
  pets = petArray;
  console.log(pets);
};

const getCats = (e) => {
  console.log(e);
  // for (let i = 0; i < pets.length; i++) {
  //   if (pets[i].type === 'cat') {
  //     cats.push(pets[i]);
  //   };
  // };
  // console.log('cats',cats);
};

// const getDogs = (pets) => {

// };
// const getDinos = (pets) => {

// };

const successXhr = function () {
  const dataPets = JSON.parse(this.responseText).pets;
  // console.log(dataPets);
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
  getCats,
};
