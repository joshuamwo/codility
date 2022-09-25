CyclicRotation(["0", "1", "2", "3", "4", "5"], 6);

function CyclicRotation(A, K) {
  let B = [];
  let l = K % A.length;
  if (l === 0) {
    B = A;
  } else {
    for (let i = 0; i < l; i++) {
      B[i] = A[A.length + i - l];
    }

    for (let i = l; i < A.length; i++) {
      B[i] = A[i - l];
    }
  }
  console.log(B);
}

function CyclicRotation

//2
//4 = 0
//5 = 1
//0 = 2
//1 = 3
//2 = 4
//3 = 5
