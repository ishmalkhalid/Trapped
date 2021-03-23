/* Script to toggle between showing and hiding the navigation menu*/

var menuIcon=document.getElementById('menuIcon');

menuIcon.addEventListener("click",function(){
  if (!menuIcon.classList.contains("active")){
    openNav();
  }else {
    closeNav();
  }
})

/* Open when someone clicks on the menu icon */
function openNav() {
  menuIcon.classList.add("active");
  menuIcon.style.position="fixed";
  document.getElementById("myTopnav").style.display = "flex";
  setTimeout(function(){
    document.getElementById("myTopnav").style.opacity = "1";
    document.getElementById("myNav").style.height = "100%";
  }, 1);
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  menuIcon.classList.remove("active");
  menuIcon.style.position="relative";
  document.getElementById("myNav").style.height = "0%";
  setTimeout(function(){
    document.getElementById("myTopnav").style.opacity = "0";
    document.getElementById("myTopnav").style.display = "none";
  }, 100);
}
