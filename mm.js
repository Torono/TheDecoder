let reset = 0
let marker = 0
let tally = 0
let counter = 0
let slot1 = 0
let slot2 = 0
let slot3 = 0
let slot4 = 0
let slot5 = 0
let slot6 = 0
let slot7 = 0
let slot8 = 0 
let slot9 = 0
let colorSelect = ('')
const colors = ['0', '1'];
function slot10() {
    if (counter == 1) {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    slot1 = colorSelect;
    guess.innerHTML = slot1;
    counter = counter + 1;
    } else {
        slot20();
    }
    if (tally == 0) {
        marker = marker + 1;
        setTimeout(slot10, 500);
    } else {
        stop;
    }
}
function slot20() {
    if (colorSelect == content) {
        test();
    } else {
    if (counter == 2) {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    do {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);

    } while (colorSelect == slot1);
    slot2 = colorSelect;
    guess.innerHTML = slot2;
    counter = counter + 1;
    } else {
        slot30();
    }
}
}
function slot30() {
    if (colorSelect == content) {
        test();
    } else {
    if (counter == 3) {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    do {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    } while(colorSelect == slot1 || colorSelect == slot2);
        slot3 = colorSelect;
        guess.innerHTML = slot3;
        counter = counter + 1;
    } else {
        slot40();
    }
}
}
function slot40() {
    if (colorSelect == content) {
        test();
    } else {
    if (counter == 4) {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    do {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    } while (colorSelect == slot1 || colorSelect == slot2 || colorSelect == slot3);
    slot4 = colorSelect;
    guess.innerHTML = slot4;
    counter = counter + 1;
    } else {
        slot50();
    }
}
}
function slot50() {
    if ( colorSelect == content) {
        test();
    } else {
    if (counter == 5) {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    do {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    } while (colorSelect == slot1 || colorSelect == slot2 || colorSelect == slot3 || colorSelect == slot4);
    slot5 = colorSelect;
    guess.innerHTML = slot5;
    counter = counter + 1;
    } else {
        slot60();
    }
}
}
function slot60 () {
    if (colorSelect == content) {
        test();
    } else {
    if (counter == 6) {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    do {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    } while (colorSelect == slot1 || colorSelect == slot2 || colorSelect == slot3 || colorSelect == slot4 || colorSelect == slot5);
    slot6 = colorSelect;
    guess.innerHTML = slot6;
    counter = counter + 1;
    } else {
        slot70();
    }
}
}
function slot70() {
    if (colorSelect == content) {
        test();
    } else {
    if (counter == 7) {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    do {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    } while (colorSelect == slot1 || colorSelect == slot2 || colorSelect == slot3 || colorSelect == slot4 || colorSelect == slot5 || colorSelect == slot6);
    slot7 = colorSelect;
    guess.innerHTML = slot7;
    counter = counter + 1;
    } else {
        slot80();
    }
}
}
function slot80() {
    if (colorSelect == content) {
        test();
    } else {
    if (counter == 8) {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    do {
        colorSelect = (colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)] + colors[Math.floor(Math.random() * colors.length)]);
    } while (colorSelect == slot1 || colorSelect == slot2 || colorSelect == slot3 || colorSelect == slot4 || colorSelect == slot5 || colorSelect == slot6 || colorSelect == slot7);
    slot8 = colorSelect;
    guess.innerHTML = slot8;
    counter = counter + 1;
    } else{
        document.write('Liar!');
    }
}
}
function start() {
    content = answer1.value;
    if (content == '000' || content == '001' || content == '011' || content == '111' || content == '110' || content == '100' || content == '101' || content == '010') {
        counter = 1;
        tally = 0;
        slot10();
        start1.innerHTML = ('Reset');
        start1.style.display = 'none';
    } else {
        alert('Hey man, you have to type only 0s and 1s, the computer only knows what a 0 and a 1 is. The computer is smart, but not that smart.');
    }
}
function test() {
    start1.innerHTML = ('Start');
    if (colorSelect = content) {
        alert('Your answer was guessed. Click Ok to reset. ' + 'It took ' + marker + ' trys to guess your answer.');
        tally = 1;
        marker = 0;
        reset = 1;
        start1.style.display = null;
        colorSelect = ('');
    guess.innerHTML = colorSelect;
    answer1.value = ('');
    reset = 0;
    start1.innerHTML = ('Start');
    setCaretPosition(start1, start1.value.length);
    } else {
        alert('Your answer was not guesed yet.');
    }
}
const guess = document.querySelector('#guess');
const start1 = document.querySelector('#start');
let answer1 = document.querySelector('#answer');
let content = answer1.value;
start1.addEventListener('click', start);
guess.innerHTML = (colorSelect);