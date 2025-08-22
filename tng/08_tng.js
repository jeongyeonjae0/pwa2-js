
// 각 회원의 rank가 코드 형식으로 저장되어 있습니다. 
// 이 코드는 각각 아래와 같은 의미를 가집니다. 
// 1 = 관리자, 2 = 팀장, 3 = 주임, 4 = 사원 
// 코드로 되어있는 rank를 한글로 바꿔주세요. 
const result = [
  {
    userId: 1,
    email: 'admin1@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'jhon',
    rank: 1,
  },
  {
    userId: 2,
    email: 'admin2@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'suzan',
    rank: 2,
  },
  {
    userId: 3,
    email: 'admin3@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'ahoi',
    rank: 3,
  },
  {
    userId: 4,
    email: 'admin4@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'yoho',
    rank: 2,
  },
];

// result[0].rank = '관리자'; 

// const rankchange = result.map(val => {
//   if val.rank === 1 {
//     return '관리자'
//   } else if rank === 2 {
//     return '팀장'
//   } else if rank === 3 {
//     return '주임'
//   } else { 
//     return '사원';
//   }
// });
// console.log(rankchange); 

// map과 filter는 return을 빼먹어서는 안된다. 

// 함수 
// function test() { }
// () => { }
 
// Object 
// {                   
//   key1 = 'val' 
// }

//map은 array 객체의 매소드 / result의 0번 타입은 객체 / 예를 들어 하나의 객체를 에어컨 리모컨이라고 하면 tv 조절은 안됨 / 객체도 매소드가 정해져 있음
// map은 데이터 타입이 배열에서만 쓸 수 있다. 

// val = 파라미터 , 루프 돌때마다 요소가 한 개씩 들어감 요소 하나가 object 타입.
// val를 쓸 때는 하나의 데이터 타입이 있을 때 쓰임 
// object, 여러 데이터를 쓸 때는 item을 이용   

const resultMap = result.map(item => { 
  let krRank = '';
  if(item.rank === 1) {
    krRank = '관리자';
  } else if(item.rank === 2) {      //else if를 쓰는 이유는 불필요한 처리를 방지 
    krRank = '팀장'; 
  } else if(item.rank === 3) {
    krRank = '주임';
  } else {
    krRank = '사원';
  }
  const copyItem = {...item}; // 원본을 바꾸지 않기 위해서 사용 

  item.rank = krRank; 
  return copyItem; // 원래 각 요소마다 하나씩 다 적어야 되는데 중복되므로 묶어서 표현 
  // krRank만 관리자가 되고, rank는 관리자로 바뀌어지지 않음. -> item이 하나의 요소인데, krRank만 저장하고 item에는 저장을 안해서 그렇게 됨. 
  // 아이템의 rank를 krRank로 바꿔주어야 함. 그러고 나서 return해서 item에 넣어주어야 함. 
});

console.log(resultMap);

const copyResult = [...result]; // 전체를 카피하지 않는 이유 : 메모리 용량이 2배로 증가하게 됨. 

copyResult.forEach(item => {
  let krRank = '';
  if(item.rank === 1) {
    krRank = '관리자';
  } else if(item.rank === 2) {      
    krRank = '팀장'; 
  } else if(item.rank === 3) {
    krRank = '주임';
  } else {
    krRank = '사원';
  }

  item.rank = krRank; 
});

console.log(copyResult);

// 여러 데이터를 만들어 보고 난 후, 조절 하는 방법 
// 배열의 각 요소 접근 방법 , 어떤 데이터 타입으로 이루어져 있는지 
// 문법처럼 객체를 외움. length, map , filter : 주로 사용 / 배열의 앞 뒤 추가 하고 빼는 것 : 주로 사용 / some , every : 많이 사용하지는 않음. 