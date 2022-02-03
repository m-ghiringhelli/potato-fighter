// import functions and grab DOM elements
import { renderPotato } from './test/utils.js';

const playerHPEl = document.getElementById('player-HP');
const form = document.getElementById('create-potato-form');
const potatoContainer = document.getElementById('potatoes-container');
const defeatedPotatoesEl = document.getElementById('defeated-potatoes-display');
const createPotatoEl = document.getElementById('create-potato-container');

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
//display player HP
playerHPEl.textContent = playerHP;
//appends potato object
function displayPotatoes(potatoObject) {
    potatoContainer.append(renderPotato(potatoObject));
}
//display starting potatoes
for (let potato of potatoList) {
    displayPotatoes(potato);
}
//display number of defeated potatoes
defeatedPotatoesEl.textContent = `You've french-fried ${frenchFriedPotatoes} potatoes!`;

// set event listeners 
createPotatoEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
        const formData = new FormData(form);
        const potato = {
            id: potatoIds,
            name: formData.get('potato-name'),
            hp: Math.ceil(Math.random() * 20),
        };
        potatoIds++;
        console.log('potatoIds', potato);
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
