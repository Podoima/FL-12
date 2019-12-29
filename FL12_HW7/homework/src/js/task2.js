let play = true;
let totalPrise = 0;
do {
    play = confirm('Do you want to play a game?');
    if (play) {
        let round = true;
        const firstRangeNumber = 0;
        const baseSecondRangeNumber = 8;
        let secondRangeNumber = baseSecondRangeNumber;
        let currentNumber;
        let attempts = 3;
        let basePrise = 100;
        let currentPrise = basePrise;
        const two = 2;
        const four = 4;
        while (round) {
            currentNumber = Math.floor(Math.random() * (secondRangeNumber - firstRangeNumber + 1)) + firstRangeNumber;
            for (let i = 0; i < attempts; i++) {
                let guess = prompt(`Choose a roulette pocket number from ${firstRangeNumber} to ${secondRangeNumber}
        Attempts left: ${attempts - i}
        Total prise: ${totalPrise}$
        Possible prise on current attempt: ${currentPrise}$`);
                if (guess !== currentNumber.toString()) {
                    if (i === attempts - 1) {
                        round = false;
                        alert(`Thank you for your participation. Your prize is: ${totalPrise}$`);
                    } else {
                        currentPrise /= two;
                    }
                } else {
                    totalPrise += currentPrise;
                    currentPrise = basePrise * two;
                    basePrise *= two;
                    secondRangeNumber += four;
                    i = attempts;
                    round = confirm(`Congratulation, you won!
        Your prize is: ${totalPrise}$. 
        Do you want to continue?`);
                }
            }
        }
    } else {
        alert('You did not become a billionaire, but can.'); 
    }
} while (play);
