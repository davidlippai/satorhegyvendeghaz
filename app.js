let hamBtn = document.getElementById("ham-menu-lines");
let menu = document.getElementById("menu-list")

hamBtn.addEventListener('click', function(){
  menu.classList.toggle("visible-menu");
})