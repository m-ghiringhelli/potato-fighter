// IMPORT MODULES under test here:
import { renderPotato } from './utils.js';

const test = QUnit.test;

const testData = {
    id: 1,
    name: 'Papa Cabeza',
    hp: 10
};

console.log(testData);

test('renderPotato(potato) should return HTML potato element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="potato" id="potato-1"><p>PAPA CABEZA</p><img src="./assets/potato.png" class="potato-picture"><p>10 HP</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPotato(testData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
