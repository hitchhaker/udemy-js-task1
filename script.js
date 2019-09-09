'use strict';

let money = +prompt('What is your budget for a month?', '3200'),
    time = prompt('Input date in format: YYYY-MM-DD', '2019-01-01');

let appData = {
    budget: money,
    t: time,
    expences: {},
    optionalExpences: {},
    income: {},
    savings: false,
};

// for (let i = 0; i < 2; i++) {
//     let a1 = prompt('Input an obligatory expense:', 'Mivina');
//     let a2 = prompt('Input cost:', '55');

//     if ((typeof(a1) === 'string') && (typeof(a1) != null) &&
//         (typeof(a2) != null) && a1 != '' && a2 != '' &&
//         a1.length < 50) {
//         appData.expences[a1] = a2; // a1 - ключ, а2 - значення
//     } else {

//     }
// }

let i = 0;

// while (i < 2) {
//     let a1 = prompt('Input an obligatory expense:', 'Mivina');
//     let a2 = prompt('Input cost:', '55');

//     if ((typeof(a1) === 'string') && (typeof(a1) != null) &&
//         (typeof(a2) != null) && a1 != '' && a2 != '' &&
//         a1.length < 50) {
//         appData.expences[a1] = a2; // a1 - ключ, а2 - значення
//     } else {

//     }
//     i++;
// }

i = 0;
do {
    let a1 = prompt('Input an obligatory expense:', 'Mivina');
    let a2 = prompt('Input cost:', '55');

    if ((typeof(a1) === 'string') && (typeof(a1) != null) &&
        (typeof(a2) != null) && a1 != '' && a2 != '' &&
        a1.length < 50) {
        appData.expences[a1] = a2; // a1 - ключ, а2 - значення
    } else {

    }
    i++;
} while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert('1 day budget is ' + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
    console.log("Minimal level of profit");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Normal level of profit");
} else if (appData.moneyPerDay > 2000) {
    console.log("High level of profit");
} else {
    console.log("WTF?");
}

console.log(appData);