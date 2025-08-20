
let cnt = 0;

while(true) {
  console.log(cnt);
  cnt++;
  // console.log('while문 시작');

  if(cnt >= 3) {
    break;
  }
  // console.log('while문 끝');
}

// 구구단 2단만 
let count = 1; 
let dan = 2; 

while(true) {
  console.log(`${dan} X ${count} = ${2 * count} `);
  count++;
  if(count >= 10) {
    break; 
  }
}

// let multiPlier = 1;

// while(multiPlier < 10) {
//   console.log(`2 X ${multiPlier} = ${2 * multiPlier}`);

//   multiPlier++; 
// }

// do-while문 
let multiPlier = 1;
do {
  console.log(`2 X ${multiPlier} = ${2 * multiPlier}`);

  multiPlier++; 
} while(multiPlier < 10);