const alert_cont = document.querySelector('.alert_cont');
const close_alert = document.querySelector('.close_alert');
const Container = document.querySelector('.Wrapper');

close_alert.addEventListener('click',()=>{
  alert_cont.style.display = 'none';
  Container.style.display = 'block';
})