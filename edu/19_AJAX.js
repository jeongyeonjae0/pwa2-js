
const url = 'https://picsum.photos/v2/list?page=1&limit=10';

axios.get(url)
.then(response => {
  response.data.forEach((item, idx) => {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', item.download_url);
    newImg.setAttribute('width', '300px');  // css에서 만들어도 됨 

    const container = document.querySelector('.container');
    container.appendChild(newImg);
  });
})
.catch(err => {
  console.log(err);
});

// async / await 문법
async function test(url) {
  try {
    const response = await axios.get(url);
    
    response.data.forEach((item, idx) => {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', item.download_url);
    newImg.setAttribute('width', '300px');   

    const container = document.querySelector('.container');
    container.appendChild(newImg);
  });
} catch(err) {
  console.log(err);
}
};
test('https://picsum.photos/v2/list?page=1&limit=10'); // 함수 실행 잊지 말기!