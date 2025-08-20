// let star = '*';
// for (let i = 5; i <= 5; i++ ) {
//   console.log(star);
// }

// console.log('*****');
// console.log('*****');
// console.log('*****');
// console.log('*****');
// console.log('*****');

// for(let i = 0; i < 5; i++) {
//   console.log('*****');
// }

// let star = '*';
// let makedstar = ''; 
// let maxstar = '*****';

// for(let star = 0; star < 5; star++) {
//    console.log(makedstar);
   
//    for(let makedstar = 0; makedstar < 5; makedstar++) {
//     console.log(maxstar); 
//    }
// }

// let star = '*';

// for(let i = 0; i < 5; i++) {
//   let makedStar = '';

//   for(let z = 0; z < 5; z++) {
//     makedStar += star; 
//   }
//   console.log(`${makedStar}`);
// }


// for(let i = 0; i < 5; i++) {
//   console.log('*');
//   console.log('**');
//   console.log('***');
//   console.log('****');
//   console.log('*****');
// } 

// let makdedStar = '';
// for(let lineCnt = 0; lineCnt < 5; lineCnt++) {
//   makdedStar += '*';
//   console.log(makdedStar);
// }

// for(let lineCnt = 0; lineCnt < 5; lineCnt++) {
//   let makdedStar = '';
//   for(let starCnt = 0; starCnt <= lineCnt; starCnt++) {
//     makdedStar += '*'; 
//   }
//   console.log(makdedStar);
// }

let makedStar = ''; 

for(let lineCnt = 5; lineCnt > 0; lineCnt--) {
  makedStar += '*'; 
  let makedSpace = '';
  for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
    makedSpace += ' ';
  }
  console.log(makedSpace + makedStar);
}