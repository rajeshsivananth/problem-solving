const length = 5;
arr = [];

for (let i = 0; i < length; i++) {
    arr[i] = [];
}


let left = 0, right = length - 1, top = 0, bottom = length - 1;
let dir = 0;
let count = 1;

while (top <= bottom && left <= right) {

    if (dir === 0) {
        for (let i = left; i <= right; i++) {
            arr[top][i] = count;
            count++;
        }
        top++;
    }



    if (dir === 1) {
        for (let i = top; i <= bottom; i++) {
            arr[i][right] = count;
            count++;
        }
        right--;
    }


    if (dir === 2) {
        for (let i = right; i >= left; i--) {
            arr[bottom][i] = count;
            count++;
        }
        bottom--;
    }



    if (dir === 3) {
        for (let i = bottom; i >= top; i--) {
            arr[i][left] = count;
            count++;
        }
        left++;
    }



    dir = (dir + 1) % 4;
    
}

console.log('Spiral matrix:', arr)