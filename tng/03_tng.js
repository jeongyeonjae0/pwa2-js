// let score = 71;

// if(score === 100) { 
//   console.log("당신의 점수는 100점 입니다. <A+등급>");
// } else if (score >= 90 && score < 100) { 
//   console.log("당신의 점수는 점 입니다 .<A등급>");
// } else if (score >= 80 && score <= 90) {
//   console.log("당신의 점수는 점 입니다. <B등급>"); 
// } else if (score >= 70 && score >= 80) {
//   console.log("당신의 점수는 점 입니다. <C등급>");
// } else if (score >=60 && score >= 70)  {
//   console.log("당신의 점수는 입니다. <D등급>"); 
// } else {
//   console.log("당신의 점수는 점 입니다. <F>등급");
// }

let score = 90; 
let grade = 'F'; 

if(score > 100 || score < 0) {
  console.log('잘못된 값입니다.');
} else { 
  if(score === 100) {
  grade = 'A+';
} else if (score >= 90) {
  grade = 'A'; 
} else if (score >= 80) {
  grade = 'B'; 
} else if (score >= 70) {
  grade = 'C'; 
} else if (score >= 60) {
  grade = 'D'; 
} 
// 밑에 부분은 제거해도 상관 없음, 왜냐하면 먼저 제일 낮은 F를 지정했기 때문 
// else {
//   grade = 'F';
// } 

console.log('당신의 점수는 ' + score + '점 입니다. <' + grade + '>');
console.log(`당신의 점수는 ${score}점 입니다. <${grade}>`);
}