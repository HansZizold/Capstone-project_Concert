import artistcards from './artistcards.js';
import createCardGroup from './cardcreator.js';

// SHOW HIDDEN CARDS AND CREDITS
function showcards(isShowCards) {
  if (isShowCards) {
    // Looks for the four cards and credits that are hidden for default
    const showcard = document.querySelectorAll('.maincard2');
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
showcards(false);
const showCards = document.getElementById('morebutton');
showCards.addEventListener('click', () => { showcards(true); });

// store in 'maincards' variable the position of class 'maincards'
const maincards = document.querySelector('.maincards');
maincards.appendChild(createCardGroup('maincard', 0, 2, artistcards));
maincards.appendChild(createCardGroup('hidecard maincard2', 2, 4, artistcards));
maincards.appendChild(createCardGroup('hidecard maincard2', 4, 6, artistcards));
