'use strict';

// Complete the staircase function below.
function staircase(n) {
  // create string of # with length of n
  let stairStr = "#".repeat(n);
  let count = n-1;

  for(let i=n; i > 0; i--) {
    // Change stairStr to array
    let tempArr = stairStr.split("");

    for(let a=0; a < count; a++){
      tempArr[a] = " ";
    }
    count--;

    tempArr = tempArr.join(""); 
    console.log(tempArr);
  }
}

staircase(6);
