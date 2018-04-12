// data is where i will pass from request
const requestData = require('./pets');
// const printToDom = require('./dom');

let petsData = [];

const successful = function () {
  petsData = JSON.parse(this.responseText).pets;
  console.log(petsData);
};

const failure = function () {
  console.error('Epic Fail');
};

// const getData = (data) => {
//   return pets;
//   console.log(pets);
// };

const start = () => {
  requestData();
};

module.exports = start;
