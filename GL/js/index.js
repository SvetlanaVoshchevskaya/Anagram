'use strict'
const mainInput = document.querySelector('.first');
const checkInput = document.querySelector('.second');
const form = document.querySelector('.form');
const positivAnswer = document.querySelector('.info_positiv');
const negativeAnswer = document.querySelector('.info_negativ');

const checkValue = () => {
    const firstStr = mainInput.value;
    const secondStr = checkInput.value;
    mainInput.value = '';
    checkInput.value = '';
    return sortLetter(firstStr) === sortLetter(secondStr)
};

const sortLetter = (str) => str.toLowerCase().split('').map(itemStr => itemStr.trim()).sort().join('');

const addClass = (event) => {
    event.preventDefault();
    if (checkValue()) {
        positivAnswer.classList.remove('active');
        negativeAnswer.classList.add('active')
    } else {
        positivAnswer.classList.add('active');
        negativeAnswer.classList.remove('active')
    }
}

form.addEventListener('submit', addClass);

