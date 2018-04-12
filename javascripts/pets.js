// this is where i will do my request
const requestData = (successful, failure) => {
  const http = new XMLHttpRequest();
  http.addEventListener('load', successful);
  http.addEventListener('error', failure);
  http.open('GET','../db/pets.json');
  http.send();
};

module.exports = requestData;
