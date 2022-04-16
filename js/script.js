window.onload = function () {

  const email = document.querySelector('.form__input').value;
  const btnLink = document.querySelector('.form__btn a');
  const btn = document.querySelector('.form__btn');

  btn.addEventListener('click', () => {
    if(email == '') {
      btnLink.removeAttribute('download');
      btnLink.setAttribute('href', '#');
      
    }
  });

  console.log("Ok");
}