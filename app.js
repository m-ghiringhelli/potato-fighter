// import functions and grab DOM elements
import { renderPotato } from './test/utils.js';

const playerHPEl = document.getElementById('player-HP');
const defeatedPotatoesEl = document.getElementById('defeated-potatoes-display');
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

playerHPEl.textContent = playerHP;

defeatedPotatoesEl.textContent = `You've french-fried ${frenchFriedPotatoes} potatoes!`;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
