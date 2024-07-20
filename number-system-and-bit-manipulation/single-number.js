const numbers = [2, 3, 2, 4, 3];

let numberOcuurences = {};

for (let index = 0; index < numbers.length; index++) {
    if (numberOcuurences[numbers[index]]) {
        numberOcuurences[numbers[index]] += 1;
    } else {
        numberOcuurences[numbers[index]] = 1;
    }
}

for(let number in numberOcuurences) {
    if(numberOcuurences[number] === 1) {
        console.log(number, 'is found once..');
        break;
    }
}