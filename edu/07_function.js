// 함수(Function)
// 입력을 받아 출력을 하는 일련의 과정을 정의한 것

// 함수 선언식 
// 매개변수(parameter) : 외부로부터 입력받은 값을 저장하는 변수 
function fnc1(a, b) {
  return a + b;
}
function fnc2() {
  return 1000*60;
}

// 인수(Argument) : 함수를 호출할 때 전달 해주는 값 
let resultFnc1 = fnc1(1, 2);
console.log(resultFnc1); 
console.log(fnc1(2, 3));

// 함수 선언식 : 호이스팅에 영향을 받는다. (크게 문제 x)
// 재할당이 가능하므로, 함수명이 중복되지 않도록 조심해야된다. 
function fnc3(a, b) {
  return a + b;
}
function fnc3(a, b) {
  return a + b - 9999; 
}

console.log(fnc3(1,2));

// 함수 표현식 : 호이스팅에 영향을 받지 않는다.(가장 상단에 올려놓아야 함) 
// 재할당이 불가능 (const의 특징을 그대로 가져옴.) 
const fnc4 = function(a, b) {
  return a + b; 
}
fnc4(1, 3);

// 화살표 함수 
const fnc5 = (a, b) => a + b; 

// 한개 처리 할 때는 중괄호 생략 가능 / 중괄호를 넣는다면 return까지 넣어야 함.  
const fnc6 = function(a) {
  let test = a / 2; 
  return test; 
}
// 파라미터가 한개이면 소괄호 생략 가능, 그 외에는 소괄호를 넣어야 함.    
const fnc7 = a => {
  let test = a / 2; 
  return test; 
}

// 콜백(callback) 함수 
// 다른 함수의 파라미터로 전달되어서 특정 조건에 따라 호출되는 함수
function myChk(callback) {
  callback();
}
const test11 = () => console.log('콜백함수');  
myChk(test11); 

console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3); 

 (() => console.log('콜백함수'))();