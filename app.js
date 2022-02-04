// import functions and grab DOM elements
import { renderPotato } from './test/utils.js';

const playerHPEl = document.getElementById('player-HP');
const form = document.getElementById('create-potato-form');
const potatoInput = document.getElementById('potato-opponent-input');
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
    // createPotatoObject();
    createPotatoObject();
    displayPotatoes();
});
// on div click creates potato
createPotatoEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
        createPotatoObject();
        displayPotatoes();
    }
});
// creates potato and appends to potatoList
function createPotatoObject() {
    const formData = new FormData(form);
    const potato = {
        id: potatoIds,
        name: formData.get('potato-name'),
        hp: Math.ceil(Math.random() * 20),
    };
    potatoIds++;
    potatoList.push(potato);
}

function potatoClickHandler(poData) {
// you try to hit potato
    if (Math.random() < 0.7) {
        alert(`You mashed ${poData.name}!`);
        poData.hp -= Math.ceil(Math.random() * 4);
    } else alert(`You missed ${poData.name}!`);
    // If hit, change potato HP state
    // On miss, alert user
// potato tries to hit you
    // Math.random to see if potato hits
    // Display (alert) whether potato hits
    // If hit, change user HP state
    // On miss, alert user
// Potato dies (if HP reaches 0)
    // Alert user potato is dead
    // Make potato die (disapper?), show french fries
    // Update defeated potato state
    // Change display of defeated potatoes
// User dies (hp === 0) 
    // Rotate image
    // Alert user (you lost)
}

displayPotatoes();
