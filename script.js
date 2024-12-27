// //Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// ('try');














// //day2 after fundamentals part 2 /day22
// 'use strict';
// // PROBLEM 2:-
// /*We work for a company building a smart phone thermometer. 
// our most resent task is that: "Given an array of thermometer 
// of one day, calculate the temperature amplitude. keep in mind 
// that sometimes the might be a sensor error."*/

// const temperature =[3, -1, -1, 4, 6, 5, 'error', 3, -3, 7, 8];

// const calcTempAmplitude = function (temps){
//     let max = temps[0];
//     let min = temps [0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];

//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min
// };

// const amplitude = calcTempAmplitude([0,1,2,9,'error',7,8,4,3,5,6]);
// console.log(amplitude);















// //day3 after fundamentals part 2 /day23
// //PROBLEM 2:-
// //Function should now receive 2 array of temps 

// const calcTempAmplitude = function (t1, t2){
//     const temps = t1.concat(t2)
//     console.log(temps);
    
//     let max = temps[0];
//     let min = temps [0];
    
//         for (let i = 0; i < temps.length; i++) {
//             const curTemp = temps[i];
    
//             if (typeof curTemp !== 'number') continue;
//             if (curTemp > max) max = curTemp;
//             if (curTemp < min) min = curTemp;
//         }
//         console.log(max, min);
//         return max - min
// };
    
// const amplitude = calcTempAmplitude([0,7,8,3,'error'],[1,2,4,9,5,6]);
// console.log(amplitude);




// const measureKelvin = function (){
//     const measurement = {
//         type: 'temperature',
//         unit: 'celsius',
//         value: Number(prompt('Degrees celsius'))
//     }
//     console.log(measurement);
//     //in table form
//     console.table(measurement);
//     //one and the same thing diff can be seen in console
//     console.log(measurement.value);
//     console.warn(measurement.value);
//     console.error(measurement.value);

//     const Kelvin = measurement.value + 273;
//     return Kelvin;
// }

// console.log(measureKelvin());

















// //day4 after fundamentals part 2 /day24
// //Project 1- Guess Number

// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent="End............";
// console.log(document.querySelector('.message').textContent);
















// //day5 after fundamentals part 2 /day25
// //Project 1- Guess Number

// 'use strict';
// // document.querySelector('.number').textContent = 18;
// // document.querySelector('.score').textContent = 7;

// // document.querySelector('.guess').value = 10
// // console.log(document.querySelector('.guess').value);


// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

// let score = 20;
// document.querySelector('.score').textContent = score;


// document.querySelector('.check').addEventListener('click',function () {
//     const guess = Number(document.querySelector('.guess').value);
//     document.querySelector('.message').textContent = 'Correct Number✅✅✅'
//     console.log(guess, typeof guess);

//     if (!guess) {
//         document.querySelector('.message').textContent = 'Number not entered⛔⛔⛔Please enter the number'
//     } else if(guess === secretNumber) {
//         document.querySelector('.message').textContent = 'Correct Number✅✅✅'
//     }
//     else if(guess > secretNumber) {
        
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Number you entered is too large 📈📈📈'
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'you lost the game☹️☹️☹️'
//         }
//     }
//     else if(guess < secretNumber) {

//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Number you entered is too small📉📉📉'
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'you lost the game☹️☹️☹️'
//         }
//     }
// })





















//day6 after fundamentals part 2 /day26
//Project 1- Guess Number

'use strict';
// document.querySelector('.number').textContent = 18;
// document.querySelector('.score').textContent = 7;

// document.querySelector('.guess').value = 10
// console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let highscore = 0;
let score = 20;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function (message) {
    document.querySelector('.score').textContent = message;
}
displayScore(score);


document.querySelector('.check').addEventListener('click',
    function () {
    const guess = Number(document.querySelector('.guess').value);
    // document.querySelector('.message').textContent = 'Correct Number✅✅✅';
    displayMessage('Correct Number✅✅✅');
    console.log(guess, typeof guess);

    if (!guess) {
        // document.querySelector('.message').textContent = 'Number not entered⛔⛔⛔Please enter the number';
        displayMessage('Number not entered⛔⛔⛔Please enter the number');
    } else if(guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number✅✅✅';
        displayMessage('Correct Number✅✅✅');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector("body").style.backgroundColor='#15B392';
        document.querySelector('.number').style.width='37rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.heighscore').textContent = highscore;
        }
    }
    else if(guess !== secretNumber) {
        
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Number you entered is too large 📈📈📈' : 'Number you entered is too small📉📉📉';
            displayMessage(guess > secretNumber ? 'Number you entered is too large 📈📈📈' : 'Number you entered is too small📉📉📉');
            score--;
            displayScore(score);
        } else {
            // document.querySelector('.message').textContent = 'you lost the game☹️☹️☹️';
            displayMessage('you lost the game☹️☹️☹️');
        }
    }
});
    // else if(guess < secretNumber) {

    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Number you entered is too small📉📉📉'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'you lost the game☹️☹️☹️'
    //     }
    // }




document.querySelector('.again').addEventListener('click',
    function () {
        let secretNumber = Math.trunc(Math.random() * 20) + 1;
        let score = 20;
        displayScore(score);

        // document.querySelector(".message").textContent = "Start guessing~~~~~~~~~~~";
        displayMessage("Start guessing~~~~~~~~~~~");
        document.querySelector(".number").textContent = '?';
        document.querySelector(".guess").value = '';
        document.querySelector("body").style.backgroundColor='#000000';
        document.querySelector('.number').style.width='15rem'
    }
)