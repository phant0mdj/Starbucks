const menuBurger = document.querySelector('.burger-btn')
const menu = document.querySelector('.menu')

menuBurger.addEventListener('click', function () {
  menuBurger.classList.toggle('burger-btn_active')
  menu.classList.toggle('menu_active')
})

$(function(){
  $('.slick_slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 460,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
})

let mask = document.querySelector('.mask')

window.addEventListener('load', () => {
  mask.classList.add('hide')
  setTimeout(() => {
    mask.remove()
  }, 1000);
})

const openPopUp = document.querySelector('.open_pop_up');
const closePopUp = document.querySelector('.pop_up_close');
const popUp = document.querySelector('.pop_up');

openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active2');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active2');
})