const user = {     // id는 두 번째 계층 
  name: 'Hong',
  age: 20, 
  frineds: {
    id: 90
  }
};

// 얕은 복사 : 최상위 계층의 요소만 독립적으로 복사, 
//           그 외 계층은 참조형태로 복사 
const shallowCopy = {...user};
shallowCopy.frineds.id = 100;

console.log(user, shallowCopy);


// 딮 카피 : 모든 계층의 요소를 독립적으로 복사 
// JSON 방식 (단, 함수/심볼/undefined는 복사 불가)
const jsonCopy = JSON.parse(JSON.stringify(user));
jsonCopy.frineds.id = 200;

// Node.js 17+ 또는 브라우저 최신 환경
const colneCopy = structuredClone(user);
colneCopy.frineds.id = 200;





// ------------------------------------
// Destructuring 문법
// ------------------------------------
const arr = ['hong', 20];

// arr[0]; 이 코드만 보고 이 안에 데이터가 무엇이 들어가 있는지 알 수 없음 
// arr[1];

// const [name, age] = arr; // 인덱스 순서대로 번호에 담아줌 
const [name2] = arr;
const [, age2] = arr;

const user2 = {
  name: 'Hong', 
  age: 20,
  frineds: {
    id: 90
  }
};

const {name, age, fridends} = user2; 