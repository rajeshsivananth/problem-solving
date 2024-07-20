const numbers = [2, 3, 2, 4, 3];

var ans = 0;
for (let number of numbers) {
    ans = ans ^ number;
}

console.log(ans)