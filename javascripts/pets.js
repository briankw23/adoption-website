// this is where i will do my request
const http = (suucessXhr, failXhr) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', suucessXhr);
  myRequest.addEventListener('error', failXhr);
  myRequest.open('GET', '../db/pets.json');
  myRequest.send();
};

module.exports = http;
