const menuButton = document.querySelector('.js-menu__button');
const menu = document.querySelector('.js-menu');
const menuList = document.querySelector('.js-menu__list');

function menuFunction(el,cb){
  el.addEventListener('click',() =>{
    function toggleActive(el){
      el.classList.toggle('active');
    }
    toggleActive(menuButton);
    toggleActive(menu);
  })
}

menuFunction(menuButton);
menuFunction(menuList);