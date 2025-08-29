nowTimeIntoElement('#nowTime');

// 멈춰 버튼 처리 
const btnStop = document.querySelector('#btnStop');
btnStop.addEventListener('click', () => {
  clearInterval(intervalNowTime);
  intervalNowTime = null;
});

// 재시작 버튼 처리 
const btnRestart = document.querySelector('#btnRestart');
btnRestart.addEventListener('click', () => {
  nowTimeIntoElement('#nowTime');
  
  if(intervalNowTime === null) {
    intervalNowTime = setInterval(() => {
     nowTimeIntoElement('#nowTime');
    }, 1000);
  }
});

// 기록 버튼 
const btnReport = document.querySelector('#btnReport');
btnReport.addEventListener('click', () => {
  const container = document.querySelector('.reportContainer');
  const newP = document.createElement('p');
  // newP.textContent = generateNowTimeFormat();
  newP.textContent = generateNowTimeFormatUntilMilliseconds();
  // newP.textContent = document.querySelector('#nowTime').textContent;
  container.appendChild(newP);
});

// 기록 초기화 
const btnReportRest = document.querySelector('#btnReportReset');
btnReportRest.addEventListener('click', () => {
  document.querySelector('.reportContainer').textContent = '';
});

// --------- 이하 함수 ---------- 
/**
 * selector로 선택한 요소의 textcontent에 현재시간 삽입
 * @param {string} selector 
 */
function nowTimeIntoElement(selector) {
  const element = document.querySelector(selector);
  element.textContent = generateNowTimeFormat();
}

/**
 * 현재 시간을 `오전 hh:mm:SS` 형식으로 반환
 * @returns {string}
 */
function generateNowTimeFormat() { 
  const now = new Date();
  //return now.toLocaleTimeString(); ; 간단하게 오전,오후 시:분:초가 나올 수 있다. 
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let amPm = '';
  if(hours < 12) {
    amPm = '오전';
  } else {
    amPm = '오후';
    hours -= 12;
  }

  return `${amPm} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * 현재 시간을 `오전 hh:mm:SS:sss` 형식으로 반환
 * @returns {string}
 */
function generateNowTimeFormatUntilMilliseconds() { 
  const now = new Date(); 
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();

  let amPm = '';
  if(hours < 12) {
    amPm = '오전';
  } else {
    amPm = '오후';
    hours -= 12;
  }

  return `${amPm}` 
  + `${hours.toString().padStart(2, '0')}:` 
  + `${minutes.toString().padStart(2, '0')}:` 
  + `${seconds.toString().padStart(2, '0')}` 
  + `,${milliseconds.toString().padStart(3, '0')}`;
}


let intervalNowTime = setInterval(() => {
  nowTimeIntoElement('#nowTime');
}, 1000);