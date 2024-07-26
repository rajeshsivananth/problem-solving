const numbers = [3, 2, 4, 9];
const pairNumber = 5;
let pairFound = false;

for (let outerIndex = 0; outerIndex < numbers.length; outerIndex++) {
    if (pairFound) {
        break;
    }
    for (let innerIndex = outerIndex + 1; innerIndex < numbers.length; innerIndex++) {
        if (innerIndex !== outerIndex && numbers[innerIndex] + numbers[outerIndex] === pairNumber) {
            pairFound = true;
            break;
        }
    }
}

console.log(`Pair found: ${pairFound}`)