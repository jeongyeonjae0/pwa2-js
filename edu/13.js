// 요소 선택 방법 
// HTML 요소의 ID로 선택 방법 
const title = document.getElementById('title');
console.log(title);
title.style.color = 'blue';

// HTML 요소의 태그명으로 선택 방법 
const tagH1 = document.getElementsByTagName('h1');
// console.log(tagH1);
// tagH1[1].style.fontSize = '50px';

for(let i = 0; i < tagH1.length; i++) { 
  tagH1[i].style.fontSize = '50px';
}
// 배열 처럼 쓸 수 있는지 확인 하는 방법 : 해당 객체에 length 프로퍼티가 있는지 확인 해보기 
tagH1.length
console.log(tagH1.length);

// HTML 요소의 클래스명으로 선택 방법 
const classH1 = document.getElementsByClassName('test');
console.log(classH1);

// *** 중요 *** 
// css 선택자로 요소를 선택하는 방법
// 복수일 경우 가장 첫번재 요소만 선택  
const selectorTitle = document.querySelector('#title');
selectorTitle.style.color = 'red';
// *** 중요 ***
// css 선택자로 요소를 선택하는 방법 
// 복수일 경우 모두 선택, NodeList 객체 - 메서드인 forEach인 사용 가능, []와 인덱스 사용하여 특정 요소에 접근이 가능
const selectorAllH1 = document.querySelectorAll('h1');
selectorAllH1.forEach(node => node.style.color = 'green');

// -------------------------------
// 요소 조작 
// -------------------------------
// testContent : 컨텐츠를 획득 및 변경, 순수한 텍스트 데이터를 전달 
selectorTitle.textContent = '<p>넣어주면 된다.</P>';
// innerHTML : 컨텐츠를 획득 및 변경, 태그는 태그로 인식해서 전달 
selectorTitle.innerHTML = '<span>이너로 넣었다.</span>';

// setAttribute(속성명, 값) : 요소에 속성을 추가
const inputEmail = document.querySelector('input');
inputEmail.setAttribute('placeholder', '이메일을 적어주세요.');
inputEmail.setAttribute('required', '');

// removeAttribute(속성명) : 요소의 속성을 제거 
selectorAllH1[1].removeAttribute('style'); 

// -----------------------
// 요소 스타일링 
// -----------------------
// style : HTML 요소에 인라인 스타일 추가 
title.style.color = 'red';

// classList : HTML 요소에 클래스로 스타일 추가
const p = document.querySelector('p');
p.classList.add('test2');
p.classList.remove('test');
p.classList.toggle('test3');