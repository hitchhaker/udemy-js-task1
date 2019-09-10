'use strict';

let money, time;

function start() {
    money = +prompt('What is your budget for a month?', '3200');
    time = prompt('Input date in format: YYYY-MM-DD', '2019-01-01');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('What is your budget for a month?', '3200');
    }
}
start();

let appData = {
    budget: money,
    t: time,
    expences: {},
    optionalExpences: {},
    income: {},
    savings: true,
};

function chooseExpences() {
    for (let i = 0; i < 2; i++) {
        let a1 = prompt('Input an obligatory expense:', 'Mivina');
        let a2 = prompt('Input cost:', '55');

        if ((typeof(a1) === 'string') && (typeof(a1) != null) &&
            (typeof(a2) != null) && a1 != '' && a2 != '' &&
            a1.length < 50) {
            appData.expences[a1] = a2; // a1 - ключ, а2 - значення
        } else {

        }
    }
}
chooseExpences();

//let i = 0;

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

// i = 0;
// do {
//     let a1 = prompt('Input an obligatory expense:', 'Mivina');
//     let a2 = prompt('Input cost:', '55');

//     if ((typeof(a1) === 'string') && (typeof(a1) != null) &&
//         (typeof(a2) != null) && a1 != '' && a2 != '' &&
//         a1.length < 50) {
//         appData.expences[a1] = a2; // a1 - ключ, а2 - значення
//     } else {

//     }
//     i++;
// } while (i < 2);


function chooseOptExpences() {
    for (let i = 0; i < 3; i++) {
        let opt = prompt('Input an optional expense:', 'MDMA');

        if ((typeof(opt) === 'string') && (typeof(opt) != null) &&
            opt.length < 50) {
            appData.optionalExpences[i + 1] = opt; // a1 - ключ, а2 - значення
        } else {

        }
    }
}


function detectDayBudget() {
    appData.moneyPerDay = parseFloat((appData.budget / 30).toFixed(2));
    alert('1 day budget is ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Minimal level of profit");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Normal level of profit");
    } else if (appData.moneyPerDay > 2000) {
        console.log("High level of profit");
    } else {
        console.log("WTF?");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('What is your value of savings?', '100'),
            percent = +prompt('What is the percent value', '5');

        appData.monthIncome = save / 100 / 12 * percent;
        alert('The profit per month from your deposit: ' + appData.monthIncome);

    }
}
checkSavings();



console.log(appData);