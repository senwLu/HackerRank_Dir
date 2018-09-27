'use strict';

// Complete the plusMinus function below.
function plusMinus(arr) {

  const arrLength = arr.length;
  const negCount = (arr.filter(num => num < 0)).length;
  const posCount = (arr.filter(num => num > 0)).length;
  const zeroCount = (arr.filter(num => num == 0)).length;
  let finalArr = [];

  finalArr.push(parseFloat(((posCount/arrLength).toFixed(6))));
  finalArr.push(parseFloat(((negCount/arrLength).toFixed(6))));
  finalArr.push(parseFloat(((zeroCount/arrLength).toFixed(6))));
  

  for(let i in finalArr) {
      console.log(finalArr[i]);
  }
}

plusMinus([-4,3,-9,0,4,1]);