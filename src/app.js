import feedUnicorn from './feed-unicorn.js';

//get all of the buttons with the DOM
const rainbowButtons = document.querySelectorAll('.color');
const poonicorn = document.getElementById('poonicorn');

//initialize things, and LOOPS
for(let i = 0; i < rainbowButtons.length; i++) {
    const rainbowButton = rainbowButtons[i];

    //wire up listening event
    rainbowButton.addEventListener('click', () => {
        feedUnicorn(poonicorn, rainbowButton.value);
        console.log('in event listener');
    });
}



