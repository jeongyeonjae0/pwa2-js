// String 객체 
let str = '문자열입니다.'; // 내부적으로 string 객체로 인식해준다. 

// length : 문자열의 길이를 반환 
console.log(str.length);

// charAt(idx) : idx의 요소의 값을 반환 
console.log(str.charAt(3));

// indexof(searchStr, idx) : 해당 문자열에서 serachStr을 찾아 최초의 인덱스를 반환
//   찾지 못하면 -1 반환 
//    idx는 생략 가능, start 지점 지정
str = '문자열입니다. 문자열입니다.';
console.log(str.indexOf('열')); 
console.log(str.indexOf('열', 3));
console.log(str.indexOf('입니다'));
console.log(str.indexOf('숫자'));
console.log(str.includes('숫자')); // 존재여부 체크할 때는 includes 이용이 가독성 향상 

// replace(pattern, replacement) : pattern을 찾아서 첫 번째 문자열을 replacement 치환한 문자열을 반환 / return 타입이 string이다.
str = '문자열입니다. 문자열입니다.'; 
let tmp = str.replace('문자열', '111');
console.log(str.replace('문자열', '숫자').replace('숫자', '222'));
console.log(str.replace('문자열', '')); // 특정 부분을 찾아서 지울 때에도 사용 

// replaceAll(pattern, replacement) : pattern을 찾아서 모든 문자열을 replacement 치환한 문자열을 반환
console.log(str.replaceAll('문자열', ''));

// substring(startIdx, endIdx) : startIdx 부터 endIdx(생략 가능, endIdx는 포함 하지 않음)까지 자른 문자열을 반환 / 음수도 가능 
str = '문자열입니다. 문자열입니다.';
console.log(str.substring(2, 5)); // 주의 할 점 : sub와 substr은 사용해서는 안 됨 

// split(separator, limit) : 문자열에서 separator 기준으로 각 문자열을 잘라 배열 요소로 담은 배열을 반환 
// limit로 배열의 길이를 조절하며, 생략 가능 
str = '탕수육,짜장면,짬뽕,크림새우'; // 구분자를 기준으로 잘라서 배열, 공백도 문자여서 split해주려면 공백도 표현해주어야 한다. 그러므로 공백을 조심해야 한다. 
let arr = str.split(','); 

// trim() : 문자열의 시작과 끝에 있는 공백을 제거한 문자열을 반환 (중간 부분 공백은 제거하지 못함)
str = '     하  하  ';
console.log(str.trim()); // 파라미터 없이 하는 것이 대부분 , 파라미터를 들어간다면 특정 문자를 제거하는 것과 비슷해 보임. replace로 대체 가능 

// toUpperCase(), toLowerCase() : 영어 대/소문자로 변환해서 반환 
str = 'AfdvWdeSDa'; 
console.log(str.toUpperCase());
console.log(str.toLowerCase());