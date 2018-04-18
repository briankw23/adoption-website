const buildPets = (data) => {
  let domString = '';
  for (let i = 0; i < data.length; i++) {
    domString += `<div class="col-md-4">`;
    domString += `<h1>${data[i].name}</h1>`;
    domString += `<img class='img-rounded' src='${data[i].imageUrl}'>;`;
    domString += `<p>${data[i].specialSkill}<p>`;
    domString += `<p>${data[i].type}</p>`;
    domString += `</div>`;
  }
  printToDom(domString,'main');
};

const printToDom = (string,divId) => {
  document.getElementById(divId).innerHTML += string;
};

module.exports = {
  buildPets,
};
