let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav__list');
// let menuItem = document.querySelectorAll('.nav__link');


menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})
// body.addEventListener('click', function () {
// })


// menuItem.forEach(function (menuItem) {
//   menuItem.addEventListener('click', function () {
//     menuBtn.classList.toggle('active');
//     menu.classList.toggle('active');
//   })
// })