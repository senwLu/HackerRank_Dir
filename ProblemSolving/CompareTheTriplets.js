'use strict';

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let compArr = [0,0];
    
    for(let i=0; i < a.length; i++) {
        if(a[i] > b[i]) {
            compArr[0] = compArr[0] + 1;
        }
        if(a[i] < b[i]) {
            compArr[1] = compArr[1] + 1;
        }
    }
    console.log(compArr);
}

compareTriplets([5,6,7],[3,6,10]);