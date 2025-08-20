// For 문 
// for(let i = 1; i < 5; i++) {
//   if(i >= 3) {
//     break;
//   } 
//   console.log(i);
// }

for(let i = 1; i < 5; i++) {
  if(i === 3) {
    continue;
  } 
  console.log(i);
}

// 다중루프 
for(let i = 0; i < 3; i++) {
  console.log(`바깥쪽 루프 : ${i}번째`);

  for(let z = 0; z < 3; z++) { 
    console.log(`안쪽 루프 : ${z}번째`);
  }
} 

// 구구단 2단 
let dan = 2;
for(let i = 1; i <= 9; i++) {
  console.log(`${dan} X ${i} = ${2 * i}`);
}

let starDan = 2;
let startMultiPlier = 1;
let maxDan = 9;

for(let dan = starDan; dan <= maxDan; dan++) {
  console.log(`** ${dan}단 **`);

  for(let multiPlier = startMultiPlier; multiPlier <= maxDan; multiPlier++) {
    console.log(`${dan} X ${multiPlier} = ${dan * multiPlier}`);
  }
}
