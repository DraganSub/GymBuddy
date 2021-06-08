
// scrolling navigation menu down chang to fixed

window.onscroll = function() {navBarScroll()};

function navBarScroll() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.getElementById("fixed-nav").className = "test";
  } else {
    document.getElementById("fixed-nav").className = "";
  }};


  
  
  // navigation hamburger menu
  
  const mainMenu = document.querySelector('.nav-header');
  const closeMenu = document.querySelector('.closeMenu');
  const openMenu = document.querySelector('.openMenu');

  openMenu.addEventListener('click',show);
  closeMenu.addEventListener('click',close);
  
function show(){
      mainMenu.style.display = 'flex';
      mainMenu.style.top = '0';
      
}
  
function close(){
      mainMenu.style.top = '-100%';
}