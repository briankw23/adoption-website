// data is where i will pass from request
const http = require('./pets');
const buildPets = require('./dom');

const successXhr = function () {
  const data = JSON.parse(this.responseText).pets;
  console.log(data);
  buildPets(data);
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
