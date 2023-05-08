const load1 = document.querySelector('p.load1');
const load2 = document.querySelector('p.load2');
const load3 = document.querySelector('p.load3');
const loadText = document.querySelector('p.loadText');

const loader = document.querySelector('.loader')

const online = navigator.onLine;

window.addEventListener('DOMContentLoaded', () =>{
  function craeteElement(){
    let craeteNewElement = document.createElement('p');
    craeteNewElement.innerText = 'Reload';
    craeteNewElement.classList.add('retry');
    loader.appendChild(craeteNewElement);
  }
  function displayBlock(){
    loadText.style.display = 'block';
    load1.style.display = 'block';
    load2.style.display = 'block';
    load3.style.display = 'block';
  }
  function displayNone(){
    loadText.style.display = 'none';
    load1.style.display = 'none';
    load2.style.display = 'none';
    load3.style.display = 'none';
  }

  function directToHomePage(){
    window.location.href = 'homePage.html';
  }

  function loadPage(){
    if(online === true){
      displayBlock();
      setInterval(directToHomePage,7000);
    }else{
      displayNone()
      craeteElement()
      console.log('i\'m not online')
    }
  }loadPage();

});