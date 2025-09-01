// Callback Hell 
// setTimeout(() => {
//   console.log('A');

//   setTimeout(() => {
//     console.log('B');

//     setTimeout(() => {
//      console.log('C');
//    }, 1000);
//  }, 2000);
// }, 3000);

// Promise 객체 
// 비동기 처리의 결과를 제공하겠다는 약속을 반환 
// 단, 비동기 처리가 끝날 때 까지 결과를 기다리는 것은 아니다. 
function pro1(str, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(str === 'A' || str === 'B' || str === 'C') {
        console.log(str);
        resolve();
      } else {
        reject();
      }
    }, ms);
  });
}

pro1('A', 3000)
.then( (data) => {
  console.log('THEN');    // promise가 성공했을 때 결과가 콜백함수의 파라미터로 됨. 
}) // 작업이 성공했을 때, then() 실행    
.catch( (err) => {
  console.log('Catch', err);     //err가 발생하면 에러를 반환     
}) // 작업이 실패했을 때, catch() 실행
.finally(() => {
  console.log('Finally');
}); // 성공, 실패 여부 상관 없이 무조건 실행 

pro1('A', 3000)
.then(() => {
  pro1('B', 2000)
  .then(() => {
    pro1('C', 1000)
    .then()
    .catch();
  })
  .catch();
})
.catch();

pro1('A', 3000)
.then(() => {
  return pro1('B', 2000);
})
.then(() => {
  return pro1('C', 1000);
})
.catch();