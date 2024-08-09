const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const n = arr[0].length;

// original
// [
//     1, 2, 3
//     4, 5, 6
//     7, 8, 9
// ]


// transposed
// [
//     1, 4, 7
//     2, 5, 8
//     3, 6, 9
// ]
console.log(arr)
for(i=0; i<= n-2; i++) {
    for(j=i+1; j<=n-1; j++) {
        let temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
    }
}

console.log(arr)
