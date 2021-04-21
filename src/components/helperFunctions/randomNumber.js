
function randomNum() {
    return Math.floor((Math.random() * 250));
}

function checkDoubleNumbers(numbersArr) {
    let number = randomNum();
    if ( numbersArr.includes(number) ) {
        return checkDoubleNumbers(numbersArr);
    }
    numbersArr.push( number );
    return numbersArr;
}


function getRandomNumberArr() {
    const usedNumbers = [];
    for ( let i = 0; i < 20; i++ ) {
        checkDoubleNumbers(usedNumbers);
    }
    return usedNumbers;
}

export default getRandomNumberArr;