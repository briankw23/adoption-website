// data is where i will pass from request
const http = require('./pets');
const dom = require('./dom');

const pets = [];

const petSet = (petArray) => {
  pets = petArray;
  console.log(pets);
};

const successXhr = function () {
  const dataPets = JSON.parse(this.responseText).pets;
  console.log(dataPets);
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
