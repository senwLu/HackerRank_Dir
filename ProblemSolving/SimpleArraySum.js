'use strict';

/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    let count = 0;
    for(let a=0; a < ar.length; a++) {
        count += ar[a];
    }
    console.log(count);
}

simpleArraySum([1,2,3,4,10,11]);