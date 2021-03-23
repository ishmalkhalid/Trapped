// shows the scroll to top button upon scroll
// the button takes user to the top of the page upon clicking
const landingSectionEl=document.getElementById('landingSection');
var landingOffset = landingSectionEl.offsetTop;

window.onscroll = function() {showScrollTop()};
function showScrollTop(){
  if (window.pageYOffset >= landingOffset) {
   scrollTop.style.display="block"; //show the 'scroll to top' button
 } else if(window.pageYOffset=0) {
   scrollTop.style.display="none";
 }
}

function scrollToTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
