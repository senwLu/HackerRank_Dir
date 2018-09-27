'use strict';

// Complete the aVeryBigSum function below.
function aVeryBigSum(arr) {
    const sum = arr.reduce((total,amount) => total+amount);

    console.log(sum);
}

const a = [1000000001,1000000002,1000000003,1000000004,1000000005];

aVeryBigSum(a);