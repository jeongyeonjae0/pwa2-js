// 사과 게임 위에 장기 삽입
// 어메이징브릭에 베이지 배경색 추가
// 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정

// const ul = document.querySelector('ul');
// const jangki = document.createElement('li');
// jangki.textContent = '장기';
// const childC = document.querySelector('#apple');
// ul.insertBefore(jangki, childC);

// const li = document.querySelector('li');
// li.classList.add('beige'); 

// const selectorAllLi = ul.querySelectorAll('li');
// selectorAllLi.forEach(node => node.style.backgroundColor= 'beige');

// 타겟노드 = queryselector('#apple');
const targetApple = document.querySelector('#apple');
// 새노드 = createElement(li); , textcontent = '장기'
const newJanggi = document.createElement('li');
newJanggi.textContent = '장기';
// 부모노드 = queryselector('#ul');
const parentUl = document.querySelector('#ul');
// 새로운 요소 삽입 > 부모노드.insertBefor(새노드. 타겟노드)
parentUl.insertBefore(newJanggi, targetApple);

const amazingLi = document.querySelector('#ul li:last-child');
amazingLi.style.backgroundColor = 'beige';
changeLiColor();
addLiChild('완벽');

function changeLiColor() {
  const listLi = document.querySelectorAll('#ul li');
  listLi.forEach((node, idx) => {
    if(idx % 2 === 0) {
       node.style.color = 'blue';
    } else {
       node.style.color = 'red';
    }
  });
}; 

function addLiChild(content) {
  const newNode = document.createElement('li'); 
  newNode.textContent = content;
  parentUl.insertBefore(newNode, targetApple);
}

const result = {
  title: '타이틀',
  content: '내용내용',
  img: 'https://www.admin.com/img/posts/laksfjakls.pmg'
};
addCard(result);
// 카드 구조 만들기 
function addCard(item) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newCardImg = document.createElement('div');
  newCardImg.classList.add('card-img');

  const newCardTitle = document.createElement('p');
  newCardTitle.textContent = item.title;

  const newCardContent = document.createElement('p');
  newCardContent.textContent = item.content;

  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardTitle);
  newCard.appendChild(newCardContent);

  document.body.appendChild(newCard);
}