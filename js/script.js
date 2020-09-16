const menuBtn = document.getElementById('menu-btn');
const menus = document.getElementById('menus');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
  menus.classList.add('active');
  overlay.classList.add('active')
  console.log('clicked')
})

closeBtn.addEventListener('click', () => {
  menus.classList.remove('active');
  overlay.classList.remove('active')
})

overlay.addEventListener('click', () => {
  menus.classList.remove('active');
  overlay.classList.remove('active')
})