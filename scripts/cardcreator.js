// FUNCTION TO INSERT MORE PERFORMING ACTS
export default function createCardGroup(cardClass, start, end, cardsArray) {
  const cardGroup = document.createElement('div');
  cardGroup.className = `cardgroup${start / 2 + 1}`;

  for (let i = start; i < end; i += 1) {
    const card = document.createElement('div');
    card.className = `${cardClass}`;
    card.innerHTML = `
      <img src="${cardsArray[i].image}" alt="${cardsArray[i].name}">
      <ul class="cardcontent">
        <li class="cardtitle">${cardsArray[i].name}</li>
        <li class="philantropy">${cardsArray[i].char}</li>
        <li class="cardline"></li>
        <li class="cardphrase">${cardsArray[i].quote}</li>
      </ul>`;
    cardGroup.appendChild(card);
  }
  return cardGroup;
}
