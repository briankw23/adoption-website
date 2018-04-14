// data is where i will pass from request

const http = require('./pets');
// const printToDom = require('./dom');

const successXhr = function () {
  const data = JSON.parse(this.responseText).pets;
  // data.setDepartments(data);
  console.log(data);
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
