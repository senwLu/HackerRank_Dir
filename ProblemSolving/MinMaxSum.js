'use strict';

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const sortArray = arr.sort();

  let minArr = sortArray.slice(0, arr.length-1);
  let maxArr = sortArray.slice(1, arr.length);
  const reducer = (a,b) => a+b;

  console.log(minArr.reduce(reducer) + " " + maxArr.reduce(reducer));
}

miniMaxSum([1,2,3,4,5]);
