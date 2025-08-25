// <알아 두어야 할 문제> 
// 함수 정의 
// 배열의 매소드 종류 (push, pop ...) 
// 16 ~ 21번 까지 호이스팅 문제 , 호이스팅 개념 


// 1. javascript의 기본 데이터 타입이 아닌 것은 
// integer  : 자바스크립트에서는 없다. number로 다 통치고 있다. 
// undefined, null(object라서 type of가 아닌 비교연산자 ===로 체크해야 함. ) 

// 3. 다음 코드 실행 후 변수 `x`와 `y`의 값은 무엇    x = 10 , y = 5 
let x = 5; // number는 참조형 타입이 아닌 기본형 타입. 주소 참조가 아닌 값을 복사  
let y = x; 
x = 10;   

// 4. let . const , var의 차이를 설명하기  < 설계서 , 보고서 쓰는 방법 > 
// let은 중복 선언 불가능, 재할당 가능, 스코프 : 블록레벨 스코프 , 호이스팅 영향 받지 않음 
// const는 중복 선언 불가능, 재할당 불가능 , 스코프 : 블록레벨 스코프 , 호이스팅 영향 받지 않음 
// var는 중복 선언 가능, 재할당 가능, 스코프 : 함수 레벨 스코프, 호이스팅 영향 받음 

// 5. 두 수를 입력받아 합을 반환하는 함수 add를 작성하세요. 
// 두 수를 입력받아 : 파라미터 2개 
// 합을 반환하는 : return 
// 함수 add : 이미 함수명이 정해져 놓음 
function add(a, b) {
  return a + b;
}

// 함수 표현식 : 주의할 점 - return 생략은 중괄호와 함께 생략해야 함. 함수 선언할 때는 let이 아닌 const로 함. 왜 let은 재할당이 가능하므로 
// const add = (a, b) => a + b; 

// 6. 아래 함수 실행 결과를 쓰세요.   파라미터의 디폴트 값에 대한 질문 
// function greet(name ="Guest"){
// return "Hello "+name;
// }
// console.log(greet());           Hello Guest 
// console.log(greet("Tom"));      Hello Tom 

// 7. 사용자가 입력한 나이에 따라 다음과 같이 출력하는 프로그램을 작성하세요.
// 19세 이상: "성인입니다."
// 13세 이상 ~ 18세 이하: "청소년입니다."
// 그 외: "어린이입니다.“ 

let ageB = 0;
if(ageB >= 19) {
  console.log("성인입니다.");  
} else if (ageB >= 13) {       // && <= 18 : 다 체크해서 true, false로 나타내므로 불필요하다. 그러나 or은 예외이다. 
  console.log("성인입니다.");
} else {
  console.log("어린이입니다."); 
}

// 8. 루프를 사용하여 1부터 10까지의 합을 구하세요. 
let total = 0;  // let은 블록레벨 스코프 블럭처리하는 순간 사라짐. 
for(let i = 1; i <= 10; i++) {
 total += i;
}
console.log(total);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  //acc : 한번돌때 쌓아가는 것 , current : 한 번 돌때마다 요소를 가져옴
const result = arr.reduce((acc, currentVal) => acc + currentVal); // 한 번 돌때 마다 계속 누적시켜야 할 때 (값을 더하거나 빼거나)

// for(let i = 0; i < 10; i++) { 
//   total += arr[i]; 
// }

// 9. 배열 numbers = [1, 3, 5, 7, 9] 에서 홀수만 추출하여 새로운 배열을 만드는 코드를 작성하세요. 
// 어떠한 값이 들어있던 간에 돌아갈 수 있는 로직을 만들어야 함 (우리가 받은 데이터에 어떤 값이 있는지 정확하게는 모름.)
// Map : 해당 객체를 한번씩 반복해서 돌림, 돌릴 때마다 return하는 값을 새로운 배열에 저장. 원본의 길이가 5이면 map으로 해도 길이가 5이다. 
const numbers = [1, 3, 5, 7, 9]; 
const resultOne = numbers.filter(val => val % 2 === 1);

// 10. 학생 객체 student를 만들고, 이름(name)과 나이(age) 속성을 추가한 뒤 출력하세요  
// const studentOne = {
//   name : 'ddd', 
//   age : 20, 
// }; 

const studentTwo = {};  // 객체는 주소값이 바뀌면 다른 데이터로 인식. const는 재할당이 불가, for문의 초기값은 let. 한 번 돌때마다 변화하기 때문에 let을 씀.  
// student.name = 'sss';
// student.age = 20;

// 11. 아래 코드 실행 결과는 무엇인가요? 
let person = {
name:"Alice",age:20
};
console.log(person["name"]);       // 대괄호 안에 해당 키를 문자열로 넣어주어야 함.(지양)         
console.log(person.age);           // 일반 객체의 메소드 접근 방식 : .을 이용 (지향) 

const printName = above26yrs.map(users => users.name); // 전체를 받아 와서 이름만 받아 새로운 배열로 return 
console.log(printName);
// destructuring 문법 활용 (코드를 조금 더 짧게 적을 수 있는 문법)
const printName2 = above26yrs.map(({name}) => name);  //  파라미터가 2개이상, 중괄호가 들어갈 때 화살표 함수에서 소괄호 생략이 불가능.  받은 object 안에 키의 값을 받아 온다.  name이라는 키에 접근 -> name값만 들고 옴. (지양)
console.log(printName2);

// destructuring 문법 
const {name} = {name: '홍길동', age: 20};  // 해당하는 키의 값을 받아온다.  

const [a1, a2] = [1, 2];  // 인덱스 순서에 맞춰서 들어간다. 

// 12. 다음 코드 실행 결과를 쓰세요.
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");       // 해당하는 값을 마지막에 추가 
fruits.pop();               // 마지막값을 제거                 shift : 요소의 제일 앞부분을 제거 /   
console.log(fruits);         

// 13. 다음 문자열 메소드 실행 결과를 쓰세요.
let str = "JavaScript";              
console.log(str.toUpperCase());    
console.log(str.length);             

// 14. Math 객체 관련 문제 Math.random()은 어떤 값을 반환하나요?  : 0 이상 1 미만 
// Math.floor(3.7)의 결과는?  : 3 

// 15. Date 객체를 사용하여 현재 날짜와 시간을 구하는 코드를 작성하세요. 
// (포맷형식 ’YYYY-MM-DD hh:mi:ss’)                length 제외하고 배열, 객체의 상속은 2차 프로젝트 후 
console.log(new Date());
//2025-8-25T12:00:00Z
const now = new Date();        // object가 최상위 객체 
console.log(now);
console. log({
  name: 'hong', age: 20
 });

// 16.다음 코드 실행 결과를 예측하고, 그 이유를 설명하세요.
console.log(a);
var a = 10; 
// undefined, var로 선언할 경우 호이스팅의 영향을 받기 때문이다.  


// 17.다음 코드 실행 결과를 예측하고, 그 이유를 설명하세요.
sayHello();
function sayHello(){
console.log("Hello!");
} 
// Hello로 나옴. 함수 선언식으로 정의한 함수는 호이스팅의 영향을 받아 호출을 받는다. 함수도 객체이기 때문에 메모리에 같이 저장된다. (이름이 겹치지 않도록 조심.)  

// 18.다음 코드 실행 결과를 예측하고, 그 이유를 설명하세요.
sayHi();
let sayHi = function() {
console.log("Hi!");
};
// 참조 에러가 나온다. 함수표현식으로 함수로 정의한 경우는 호이스팅의 영향을 받지 않기 때문에 참조 에러가 나온다. 

// 19.다음 코드 실행 결과를 쓰세요.
let xO = 1;
function test() {
 let xO = 2;
 console.log(xO);
} 
// let은 블록레벨 스코프라서 local = X  -> 1, Block = x -> 2 
// 함수, 객체 : 정의를 내림 / 변수의 초기화 , 함수의 호출, 특수한 처리 : 처리를 하는 로직 -> 코드를 실행하는 메모리가 다름 
// 힙 : 변수를 선언, 함수 정의, 객체 선언 (함수, 객체)   
// 스택 : 새미클론과 블록단위 (실제 테스트) , 호출하는 처리.  출력하는 처리, 처리들을 하나씩 실행하고 빠져나가는 공간 (대입연산자) 

test();         
console.log(xO);

// 20.다음 코드 실행 결과를 예측하세요.     var의 스코프와 관련된 문제(지양) 쓰지 않는 이유 1) 재선언 가능 2) 호이스팅 영향 받음 3) 함수 레벨 스코프 
var yO = 10;
if (true){
  var yO= 20;
} 
console.log(yO); 
// var는 함수 레벨 스코프 라서, 재정의가 가능하다라는 특성때문에 20으로 나온다. 함수 였으면 10이 찍혀나온다. 
// var는 함수 영역에서는 달라짐. if문은 함수가 아니므로 블록단위이므로 y가 재선언이 되어서 바꾸어짐 
// local값이 오염이 됨.(의도치 않은 값이 들어 갈 수 있음) 

// 21.다음 코드 실행 결과는 무엇인가요?
let z = 10;
if (true){          // if문을 무조건 실행시키기 위해서 true를 넣음. 
  let z = 20;
  console.log(z);
}
console.log(z); 
// if문 : 
// 힙 : local z, block z 선언 
// 스택 : local에 10저장하고 사라짐 , if블럭이 생김 (Z = 20 -> 힙에 있는 블럭레벨에 넣기, console.log처리) -> 처리 후 빠져나감  , 밑에 부분을 먼저 적지만 처리는 위에서 하나씩 처리 (first in last out) => if문이 먼저 들어오면서 늦게 나감.
// let은 블록레벨 스코프라서, let z = local / let z = Block으로 다르게 인식해서, 20,10으로 출력 
// local 최상단 선언 , 중괄호 안에서 변수들을 최상단에 저장 