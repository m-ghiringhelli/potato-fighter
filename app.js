// import functions and grab DOM elements
import { renderPotato } from './test/utils.js';

const playerHPEl = document.getElementById('player-HP');
const form = document.getElementById('create-potato-form');
const potatoInput = document.getElementById('potato-opponent-input');
const potatoContainer = document.getElementById('potatoes-container');
const defeatedPotatoesEl = document.getElementById('defeated-potatoes-display');
const createPotatoEl = document.getElementById('create-potato-container');
const fighterImageEl = document.getElementById('fighter');
const hitSound = new Audio('./assets/hit.wav');
const deathSound = new Audio('./assets/death.wav');

// let state
let potatoList = [
    {
        id: 1,
        name: 'Papa Cabeza',
        hp: 10
    },
    {
        id: 2,
        name: 'Frau Kartoffelkopf',
        hp: 12
    }
];
let playerHP = 10;
let frenchFriedPotatoes = 0;
let potatoIds = 3;
let gameOver = false;
// display player HP
playerHPEl.textContent = playerHP;
// display number of defeated potatoes
defeatedPotatoesEl.textContent = `You've french-fried ${frenchFriedPotatoes} potatoes!`;
// displays potato array
function displayPotatoes() {
    potatoContainer.textContent = '';
    for (let potato of potatoList) {
        // create DOM element
        const potatoEl = renderPotato(potato);
        if (potato.hp < 1) {
            potatoEl.childNodes[1].src = './assets/fries.png';
            potatoEl.lastChild.textContent = '0 HP';
        }
        // create event listener
        potatoEl.addEventListener('click', () => {
            potatoClickHandler(potato);
        });
        // append DOM element
        potatoContainer.append(potatoEl,);
    }
}
// on user click, input clears
potatoInput.addEventListener('click', () => {
    potatoInput.value = '';
});
// on form submit creates potato
createPotatoEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (gameOver) return;
    // createPotatoObject();
    createPotatoObject();
    displayPotatoes();
});
// on div click creates potato
createPotatoEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (gameOver) {
        alert('GAME OVER');
        return;
    }
    if (e.target === e.currentTarget) {
        createPotatoObject();
        displayPotatoes();
    }
});
// creates potato and appends to potatoList
function createPotatoObject() {
    if (gameOver) return;
    const formData = new FormData(form);
    const potato = {
        id: potatoIds,
        name: formData.get('potato-name'),
        hp: Math.ceil(Math.random() * 20),
    };
    potatoIds++;
    potatoList.push(potato);
    form.reset();
}

function potatoClickHandler(poData) {
    // fighterImageEl.classList.remove('hit');
    const els = document.getElementsByClassName('hit');
    while (els[0]) {
        els[0].classList.remove('hit');
    }
    if (poData.hp < 1) {
        alert(`They're already dead!`);
        return;
    }
    // you try to hit potato
    if (Math.random() < 0.7) {
        const hit = Math.ceil(Math.random() * 4);
        alert(`You mashed ${poData.name} for ${hit} HP!`);
        poData.hp -= hit;
        displayPotatoes();
        const potatoHitEl = document.getElementById(`potato-${poData.id}`);
        potatoHitEl.childNodes[1].classList.add('hit');
        hitSound.play();
    } else alert(`You missed ${poData.name}!`);
    // potato tries to hit you
    if (Math.random() < 0.5) {
        alert(`${poData.name} got you good!`);
        fighterImageEl.classList = 'hit';
        playerHP--;
        playerHPEl.textContent = playerHP;
        hitSound.play();
    } else {
        alert(`${poData.name} missed!`);
    }
    // Potato dies (if HP reaches 0)
    if (poData.hp < 1) {
        deathSound.play();
        alert(`You've french-fried ${poData.name}! Somebody tell the family.`);
        frenchFriedPotatoes++;
        defeatedPotatoesEl.textContent = `You've french-fried ${frenchFriedPotatoes} potatoes!`;
        if ((frenchFriedPotatoes) === (potatoIds - 1)) alert(`You've killed them all, you animal. I hope you're happy with yourself. I guess YOU "WIN"`);
    }
    // Change display of defeated potatoes
    // User dies (hp === 0)
    if (playerHP < 1) {
        fighterImageEl.className = 'dead';
        alert('You dead! GAME OVER');
    }
    if (playerHP === 0 || frenchFriedPotatoes === (potatoIds - 1)) gameOver = true;
}


displayPotatoes();