"use strict";

const ulList = document.querySelector(".game-box");
const div = document.createElement("div");
const imgBack = document.createElement("img");
imgBack.src = "./img/back.jpg";
console.log(ulList);

let cards = [1, 2, 3, 4, 5, 6];
cards = [...cards, ...cards];

// перемешать
function random() {
  let j, temp;
  cards.forEach((i) => {
    j = Math.floor(Math.random() * cards.length);
    temp = cards[j];
    cards[j] = cards[i];
    cards[i] = temp;
  });
}

const generateCard = (num, id) => {
  const card = `
  <li class="game-item">
<div class="flipper" data-id=${id}>
    <div class="front">
        <img src="./img/${num}.jpg" alt="">
    </div>
    <div class="back">
    <img src="./img/back.jpg" alt="">
    </div>
</div>
</li>
`;
  return card;
};

function reset() {
  while (ulList.firstChild) {
    ulList.removeChild(ulList.firstChild);
  }
}

// вывод 12 карт
const startGame = () => {
  random();
  reset();
  let id = 0;
  const cardsOnBoard = (i) =>
    ulList.insertAdjacentHTML("beforeend", generateCard(i, id++));
  cards.forEach((card) => cardsOnBoard(card));
  console.log(cards);
};

function checkCards(pathCard) {
  return pathCard.querySelector(".front").img;
}

//
let pairCards = [];
// клик переворот
ulList.addEventListener("click", (e) => {
  const thisCard = e.target.closest(".flipper");
  thisCard.classList.add("flip");
  const idCard = thisCard.querySelector(".front");
  // idCard.children
  pairCards.push(thisCard.dataset.id);
  console.log(e.target);
  console.log(pairCards);
  if (pairCards.length === 2) {
    //reset
    sameCard(pairCards[0], pairCards[1]);
    setTimeout(() => {
      clothedCard();
    }, 1000);
    return (pairCards = []);
  }
});
console.log(sameCard());

// синхронизация картинок
// thisCard

// закрывается карта
function clothedCard() {
  const openedCard = ulList.querySelectorAll(".flip");
  openedCard.forEach((i) => i.classList.remove("flip"));
}

// найдены одинаковые
function sameCard(first, second) {
  console.log(cards[second]);
  console.log(cards[first]);
  if (cards[first] === cards[second]) {
    // удаляются
    console.log("должны удаляться");
  } else {
    // clothedCard ()
    console.log("закрываются");
  }
}
//

// два клика максимум
