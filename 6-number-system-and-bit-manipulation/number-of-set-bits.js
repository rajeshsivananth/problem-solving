const givenNumber = 11;
let totalSetbits = 0;

let numberInEachIteration = givenNumber;
while (numberInEachIteration > 0) {
    const remainder = numberInEachIteration % 2;
    if (remainder) {
        totalSetbits++;
    }
    numberInEachIteration = parseInt(numberInEachIteration / 2);
}

console.log(`Total number of set bits in given number ${givenNumber} is ${totalSetbits}`)