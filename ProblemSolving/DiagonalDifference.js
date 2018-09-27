'use strict';

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    let leftSum = 0;
    let rightSum = 0;
    
    let innerCount = arr[0].length;
    
    for(let i=0; i < arr.length; i++) {
        leftSum += arr[i][i];
        rightSum += arr[i][innerCount-i-1];
    }
    
    console.log(Math.abs(leftSum - rightSum));
}

diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]);