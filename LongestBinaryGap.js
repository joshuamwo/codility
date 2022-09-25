let N = 3466;
var binary = N.toString(2);

let firstCondition = false;
let zeroCounter = 0;
let maxGap = 0;

for (let i = 0; i < binary.length; i++) {
  if (firstCondition === true) {
    if (parseInt(binary[i]) === 0) {
      zeroCounter++;
    } else {
      if (zeroCounter != 0) {
        if (zeroCounter > maxGap) {
          maxGap = zeroCounter;
        }
        zeroCounter = 0;
      }
    }
  } else {
    if (parseInt(binary[i]) === 1) {
      firstCondition = true;
    }
  }
}

console.log(maxGap);
