let count = 0;
let output = document.getElementById('count1');

function minus() {
    count = count - 1;
    output.innerHTML = count;
}

function pluss() {
    count = count + 1;
    output.innerHTML = count;
}

function resetAll() {
    count = 0;
    output.innerHTML = count;
}

function helloOne() {
    document.getElementById('minTag1').innerHTML = /*HTML*/`
    Hei på deg!
    `;
}
function helloTwo() {
    document.getElementById('minTag2').innerHTML = /*HTML*/`
    Hei igjen!
    `;
}
function blankAll() {
    document.getElementById('minTag1').innerHTML = '';
    document.getElementById('minTag2').innerHTML = '';
}

function farge1(color, width, height) {
    document.getElementById('mainDiv').innerHTML = /*HTML*/`
    <div style="background-color: ${color}; width: ${width}%; height: ${height}px;"></div>
    `;
}

function resetFarge() {
    document.getElementById('mainDiv').innerHTML = ``
}

let outputDiv = document.getElementById('output');
let numToShow = 0;

function setNum(selectedNum) {
    numToShow = selectedNum;
    outputDiv.innerHTML = numToShow;
}

function increaseNum() {
    numToShow++;
    outputDiv.innerHTML = numToShow;
}

function secondNum() {
    let number2 = 2;
    outputDiv.innerHTML = numToShow + number2;
}

function resetNum() {
    outputDiv.innerHTML = ``
}
