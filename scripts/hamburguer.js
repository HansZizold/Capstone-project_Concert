// HAMBURGUER PART
function dropmenu() {
  const dropmenu = document.querySelector('#dropmenu');
  dropmenu.classList.add('ulheader2');
  dropmenu.classList.remove('hide');
  const button = document.querySelector('#button');
  button.classList.remove('button');
  button.classList.add('hide2');
}

function closemenu() {
  const closemenu = document.querySelector('#dropmenu');
  closemenu.classList.add('hide');
  closemenu.classList.remove('ulheader2');
  const button = document.querySelector('#button');
  button.classList.remove('hide2');
  button.classList.add('button');
}

const menuIcon = document.getElementById('menuIcon');
menuIcon.addEventListener('click', dropmenu);

const closeMenuIcon = document.getElementById('closeMenuIcon');
closeMenuIcon.addEventListener('click', closemenu);

const gotoacts = document.getElementById('goToActs');
if (gotoacts) {
  gotoacts.addEventListener('click', closemenu);
}

const pastacts = document.getElementById('pastActs');
if (pastacts) {
  pastacts.addEventListener('click', closemenu);
}
