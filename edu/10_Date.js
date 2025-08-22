// Date 객체 
// 로컬 타임존에 따른 유닉스 타임스탬프 기반으로 동작 
 
// Date 인스턴스 : 메모리에 올릴 때 쓰는 것  
// Date는 파라미터가 없음. 그렇다면 원본 데이터를 전달할 방법이 없음. 그래서 Date.getDate()로 하면 어떤 시간을 말하는지를 알 수가 없음. 
// now에 들어가 있는 건 주소 값. now와 같은 값을 참조, 객체는 이렇게 다루면 안 됨. 
const now = new Date(); // argument를 지정 안하면 현재 시간으로 생성 , 인스턴스 하는 문법 , Array와 string은 javascript 실행 하면 바로 메모리에 인스턴스 해줌. 그러나 Date는 직접 인스턴스 해주어야함.  
const date1 = new Date('1990-02-23 14:30:00');
const date2 = new Date(1980, 10, 10, 23, 0, 1); // 잘 사용하지 않음 
const date3 = new Date(48948654652); 
// const test = Math.abs(date1 - date2); 
// const tt = new Date(test);
// console.log(tt); 

// getFullYear() : 연도 획득 
const nowYear = now.getFullYear();
console.log(nowYear);

// getMonth() : 월 획득, (**주의** 0~11로 반환) 
const nowMonth = now.getMonth() + 1; 
console.log(nowMonth);

// getDate() : 일 획득 
const nowDate = now.getDate(); 
console.log(nowDate);

// getHours() : 시를 반환 
const nowHours = now.getHours();
console.log(nowHours);

// getMinutes() : 분을 반환 
const nowMinutes = now.getMinutes(); 
console.log(nowMinutes);

// getseconds() : 초를 반환 
const nowSeconds = now.getSeconds(); 
console.log(nowSeconds);

// getMlliseconds() : 밀리초를 반환 
const nowMlliseconds = now.getMilliseconds();
console.log(nowMlliseconds);

// getDay() : 요일을 반환(**주의** 0~6 반환, 0 = 일요일)
const nowDay = now.getDay();
console.log(nowDay);

// 요일 한글로 변환
let koreanDay = ''; 
switch(nowDay) {
  case 0:
    koreanDay = '일요일'; 
    break;  // break 넣는 이유 : break가 없으면 구분하지 않고 그 다음 case를 바로 실행, 지금 break가 없으면 일요일이 찍히지 않고 월요일이 찍혀서 나옴 
  case 1:
    koreanDay = '월요일'; 
    break;
  case 2:
    koreanDay = '화요일'; 
    break;
  case 3:
    koreanDay = '수요일'; 
    break;
  case 4:
    koreanDay = '목요일'; 
    break;
  case 5:
    koreanDay = '금요일'; 
    break;        
  default:
    koreanDay = '토요일'; 
    break;  
}
// if  nowDay = 0, 일요일 

// xxxx년xx월xx일 xx:xx:xx 금요일 
const nowFormat = `${nowYear}년${lpad(nowMonth, 2, '0')}월${lpad(nowDate, 2, '0')}일 ${lpad(nowHours, 2, '0')}:${lpad(nowMinutes, 2, '0')}:${lpad(nowSeconds, 2, '0')} ${koreanDay}`;
console.log(nowFormat);
console.log(typeof(nowYear), typeof(nowYear.toString()), typeof(String(nowYear)));

function lpad(origin, length, fillstr) {
  // origin의 타입 체크 
  if(typeof(origin) === 'number') {
    origin = origin.toString();
  } 
  return origin. padStart(length, fillstr); 
}
// nowMonth.toString().padStart(2, '0')

// 두 날짜의 차를 구하는 방법 
const targetDate = new Date('2025-03-13 18:10:00');
const diff = Math.floor(Math.abs(targetDate - now) / (1000 * 60 * 60 * 24));
// 일단위 1000 * 60 * 60 * 24 
console.log(diff);