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
    income: [],
    savings: true,
    chooseExpences: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = parseFloat((appData.budget / 30).toFixed(2));
        alert('1 day budget is ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Minimal level of profit");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Normal level of profit");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High level of profit");
        } else {
            console.log("WTF?");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('What is your value of savings?', '100'),
                percent = +prompt('What is the percent value', '5');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('The profit per month from your deposit: ' + appData.monthIncome);

        }
    },
    chooseOptExpences: function() {
        for (let i = 0; i < 3; i++) {
            let opt = prompt('Input an optional expense:', 'MDMA');

            if ((typeof(opt) === 'string') && (typeof(opt) != null) &&
                opt.length < 50) {
                appData.optionalExpences[i + 1] = opt; // a1 - ключ, а2 - значення
            } else {

            }
        }
    },
    chooseIncome: function() {
        let items, somethingElse;
        do {
            items = prompt('What can fetch you an extra profit?', 'tutoring, gambling');
            somethingElse = prompt('Maybe something else?', 'sell kidney');
        } while (items == '' || somethingElse == '' || items === null ||
            somethingElse === null || typeof(items) != 'string' || typeof(somethingElse) != 'string');

        appData.income = items.split(', ');
        appData.income.sort();
        appData.income.push(somethingElse);
        appData.income.forEach(function(item, i, arr) {
            console.log(i + 1 + ': ' + item);
        });
    }
};

// appData.chooseExpences();
// appData.detectDayBudget();
// appData.detectLevel();


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


console.log('This program has such data: ');
for (let i in appData) {
    console.log(i + ': ' + appData[i]);
}