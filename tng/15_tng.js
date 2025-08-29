function updateClock() {
  const now = new Date();
  const newHours = now.getHours(); 
  const newMinutes = now.getMinutes();
  const newseconds = now.getSeconds();
  const timestring = `${lpad(newHours, 2, '0')}:${lpad(newMinutes, 2, '0')}:${lpad(newseconds, 2, '0')}`;
  document.getElementById('clock').textContent = timestring;
}
updateClock();
setInterval(updateClock, 1000);


function lpad(origin, length, fillstr) {
  if(typeof(origin) === 'number') {
    origin = origin.toString();
  } 
  return origin. padStart(length, fillstr); 
}

const stopBtn = document.querySelector('#stopbtn');
stopBtn.addEventListener('click', (e) => {
   if(e.click) {
    setTimeout (() => {
    clearInterval(updateClock);
   }, 2000);
 } 
});

const reStart = document.querySelector('#restart');
reStart.addEventListener('click', (e) => {
  if(e.click) {
  const timestring = setInterval(() => {
  }, 1000);
  } 
}); 