// 1. 글을 입력하는 란이 있음 
// 2. 작성 버튼을 누르면 아래와 같이 동작 
//   2-1. 글 입력란이 비워져 있다면 아무동작 안함 
//   2-2. 글 입력란이 작성되어 있다면 해당 글을 기반으로 목록 추가 
//     2-2-1. 작성 완료시 글 입력란을 비우기 

// 버튼 접근 -> form태그는 별도로 지정해야 함. body랑 달라서  
// 버튼에 이벤트 추가 (o) : 유저 입장에서 생각하기 / input에 이벤트 추가?(x)
// 작성 여부 확인 분기  (if문 활용? ) text의 value 값 이용 
// 글 입력란 비워져 있다면 아무 동작 안하기 -> e.target으로 접근해야 하나? x 
// 글 입력란 작성되어 있다면 해당 글을 기반으로 목록 추가  -> queryselector로 list 추가 ? , css로 list 표시 지우기? 

// const form = document.querySelector('form');
// const chkbtn = document.querySelector('#btn');
//  chkbtn.addEventListener('click', (e) => { 
//   const boardWrite = document.querySelector('#board');
//   if(e.target.value) {
  
//   } else { 
   
//   }
//  });

//  ----------  T  ----------
const writeBtn = document.querySelector('#writeBtn');
writeBtn.addEventListener('click', () => {
  const keywordInput = document.querySelector('#keyword');
  // let keyword = keywordInput.value;

  // flase로 인식 [false | null | undefined | 0 | ''] 
  if(keywordInput.value) {      
    // content 요소 생성 
    const newContent = document.createElement('div');
    newContent.classList.add('content');
    const newP = document.createElement('p');
    newP.textContent = keywordInput.value;
    newContent.appendChild(newP);
    newContent.addEventListener('click', (e) => {
      e.target.classList.toggle('toggle-line-through');
    });
  
    // 생성한 요소 추가 
    const printBox = document.querySelector('.print-box');
    printBox.appendChild(newContent); 

    // 검색어 초기화 : 이 데이터가 저장된 공간(input-value) -> inpue-value초기화 해주면 됨 
    keywordInput.value = '';
  }  
});

// 서비스 
// 1. 엔터로 작성 되게 하기 
// 2. 아이템 클릭하면 완료, 다시 클릭하면 풀리기 
const keywordInput = document.querySelector('#keyword');
keywordInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    e.preventDefault(); // 기존 keypress 이벤트 중지 
    const writeBtn = document.querySelector('#writeBtn');
    writeBtn.click(); // 작성 버튼 클릭 이벤트 발생시키기, (중복되는 부분으로 만든 뒤 함수로 빼는 게 좋다) 
  }  
});