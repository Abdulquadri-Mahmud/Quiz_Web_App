const body = document.querySelector('body');
const aside = document.querySelector('.aside');
const openMenuBar = document.querySelector('.openMenuBar');
const closeMenuBar = document.querySelector('.closeMenuBar');
const lists = Array.from(document.querySelectorAll('.list'));
// const button = document.querySelector('.Button');

openMenuBar.addEventListener('click',()=>{
  aside.style.width = '250px';
  closeMenuBar.style.transform = 'rotate(180deg)';
  // button.style.display = 'block';
  openMenuBar.style.display = 'none';
  closeMenuBar.style.opacity = '1';
  lists.map(list  => {
    list.style.display = 'block';
  });
});
    
closeMenuBar.addEventListener('click',()=>{
  aside.style.width = '0px';
  // button.style.display = 'none';
  openMenuBar.style.display = 'block';
  closeMenuBar.style.opacity = '0';
  lists.map(list  => {
    list.style.display = 'none';
  })
});

document.location;
const checkIfUserIsOnline = navigator.onLine;
if(checkIfUserIsOnline === true){
  body.style.display = 'block';
}else{
  // body.style.display = 'none';
}
