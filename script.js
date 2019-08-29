'use strict';

let money,
    time;
money = +prompt('What is your budget for a month?', '3200');
time = prompt('Input date in format: YYYY-MM-DD', '2019-01-01');

let answer1 = prompt('Input an obligatory expense:', 'Mivina');
let answer2 = prompt('Input cost:', '55');
let expences = {
    answer1: answer2
};
let optionalExpences,
    income;

let appData = {
    money,
    time,
    expences,
    optionalExpences,
    income,
    savings: false,
};

alert('1 day budget is ' + (money / 30));