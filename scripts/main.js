import artistcards from './artistcards.js';

// SHOW HIDDEN CARDS AND CREDITS

function showcards(a) {
  if (a === 1) {
    // Looks for the four cards and credits that are hidden for default
    const showcard = document.querySelectorAll('#maincard2');
    const showcredits1 = document.querySelector('#credits1');
    const showcredits2 = document.querySelector('#credits2');

    // remove the class that hides the cards and credits, and add the
    // class 'maincard' and 'credits' to format properly
    for (let i = 0; i < 4; i += 1) {
      showcard[i].classList.remove('hidecard');
      showcard[i].classList.add('maincard');
    }
    showcredits1.classList.remove('hidecredits');
    showcredits1.classList.add('credits');
    showcredits2.classList.remove('hidecredits2');
    showcredits2.classList.add('credits2');

    // removes the 'MORE' button
    const more = document.querySelector('#more');
    more.classList.add('hidecard');
  }
}
showcards(0);
const showCards = document.getElementById('morebutton');
showCards.addEventListener('click', function() { showcards(1); });


// INSERTING THE MORE OF PERFORMING ACTS INSIDE THE JS FILE

// console.log(artistcards[0].image);

// store in 'maincards' variable the position of class 'maincards'
const maincards = document.querySelector('.maincards');

// create a variable containing the cardgroups html code
const cardgroup1 = `
<div class="cardgroup1">
  <div class="maincard">
    <img src="${artistcards[0].image}" alt="${artistcards[0].name}">
      <ul class="cardcontent">
        <li class="cardtitle">${artistcards[0].name}</li>
        <li class="philantropy">${artistcards[0].char}</li>
        <li class="cardline"></li>
        <li class="cardphrase">${artistcards[0].quote}</li>
      </ul>
  </div>
  <div class="maincard">
    <img src="${artistcards[1].image}" alt="${artistcards[1].name}">
      <ul class="cardcontent">
        <li class="cardtitle">${artistcards[1].name}</li>
        <li class="philantropy">${artistcards[1].char}</li>
        <li class="cardline"></li>
        <li class="cardphrase">${artistcards[1].quote}</li>
      </ul>
  </div>
</div>`;

// create a div and assign to 'cardgroup1div' variable
const cardgroup1div = document.createElement('div');
// load the 'cardgroup1' html content inside the div variable
// we just created (cardgroup1div)
cardgroup1div.innerHTML = cardgroup1;
// insert the html code stored in the 'cardgroup1div' variable inside
// the maincards section represented with the variable 'maincards'
maincards.appendChild(cardgroup1div);

const cardgroup2 = `
<div class="cardgroup2">
  <div id="maincard2" class="hidecard">
    <img src="${artistcards[2].image}" alt="${artistcards[2].name}">
      <ul class="cardcontent">
        <li class="cardtitle">${artistcards[2].name}</li>
        <li class="philantropy">${artistcards[2].char}</li>
        <li class="cardline"></li>
        <li class="cardphrase">${artistcards[2].quote}</li>
      </ul>
  </div>
  <div id="maincard2" class="hidecard">
    <img src="${artistcards[3].image}" alt="${artistcards[3].name}">
      <ul class="cardcontent">
        <li class="cardtitle">${artistcards[3].name}</li>
        <li class="philantropy">${artistcards[3].char}</li>
        <li class="cardline"></li>
        <li class="cardphrase">${artistcards[3].quote}</li>
      </ul>
  </div>
</div>`;

// create a div and assign to 'cardgroup2div' variable
const cardgroup2div = document.createElement('div');
// load the 'cardgroup2' html content inside the div variable
// we just created (cardgroup2div)
cardgroup2div.innerHTML = cardgroup2;
// insert the html code stored in the 'cardgroup2div' variable inside
// the maincards section represented with the variable 'maincards'
maincards.appendChild(cardgroup2div);
const cardgroup3 = `
<div class="cardgroup3">
  <div id="maincard2" class="hidecard">
    <img src="${artistcards[4].image}" alt="${artistcards[4].name}">
      <ul class="cardcontent">
        <li class="cardtitle">${artistcards[4].name}</li>
        <li class="philantropy">${artistcards[4].char}</li>
        <li class="cardline"></li>
        <li class="cardphrase">${artistcards[4].quote}</li>
      </ul>
  </div>
  <div id="maincard2" class="hidecard">
    <img src="${artistcards[5].image}" alt="${artistcards[5].name}">
      <ul class="cardcontent">
        <li class="cardtitle">${artistcards[5].name}</li>
        <li class="philantropy">${artistcards[5].char}</li>
        <li class="cardline"></li>
        <li class="cardphrase">${artistcards[5].quote}</li>
      </ul>
  </div>
</div>`;

// create a div and assign to 'cardgroup3div' variable
const cardgroup3div = document.createElement('div');
// load the 'cardgroup3' html content inside the div variable
// we just created (cardgroup3div)
cardgroup3div.innerHTML = cardgroup3;
// insert the html code stored in the 'cardgroup3div' variable inside
// the maincards section represented with the variable 'maincards'
maincards.appendChild(cardgroup3div);
