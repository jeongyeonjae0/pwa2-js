const url = 'https://picsum.photos/v2/list?page=1&limit=10'; 

const btnclick = document.querySelector('form');
const apiCallOut = document.querySelector('#apiCallOut');
apiCallOut.addEventListener('click', function() {
  // const urlInputText = document.querySelector('#urlInputText');
  axios.get(url)
  .then(response => {
    response.data.forEach((item, idx) => {
      let cardImg = document.createElement('img');
      cardImg.setAttribute('src', item.download_url);
      cardImg.setAttribute('width', '300px');
      
      const container = document.querySelector('.container')
      container.appendChild(cardImg);
    });
  })
  .catch(err => {
    console.log(err);
  });
}); 