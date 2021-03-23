// script to add functionality to the custom video control buttons

var finalMovie=document.getElementById('finalMovie');
var playBtn=document.getElementById('playBtn');
var pauseBtn=document.getElementById('pauseBtn');
var volUpBtn=document.getElementById('volUpBtn');
var volDownBtn=document.getElementById('volDownBtn');
var muteBtn=document.getElementById('muteBtn');
var fullScrBtn=document.getElementById('fullScrBtn');

var currVol=finalMovie.volume;

// plays the video and pauses background music
playBtn.addEventListener("click",function(){
  finalMovie.play();
  finalMovie.volume=1;
  document.getElementById('horrorBgSound').pause();
});

// pauses the video and resumes background music
pauseBtn.addEventListener("click",function(){
  finalMovie.pause();
  document.getElementById('horrorBgSound').play();
});

// increase video volume
volUpBtn.addEventListener("click",function(){
  currVol=finalMovie.volume;
  currVol+=0.1;
  if (currVol>1){currVol=1;}
  finalMovie.volume=currVol;
});

// lower video volume
volDownBtn.addEventListener("click",function(){
  currVol=finalMovie.volume;
  currVol-=0.1;
  if (currVol<0){currVol=0;}
  finalMovie.volume=currVol;
});

// mute video
muteBtn.addEventListener("click",function(){
  finalMovie.volume=!finalMovie.volume;
});

//make video fullscreen
var inFullscreen=false;
fullScrBtn.addEventListener("click",function(){
  finalMovie.requestFullscreen();
  finalMovie.setAttribute("controls","controls");//add default controls to video if video is in full screen
});

//remove default controls from video if video is not in fullscreen
finalMovie.addEventListener("fullscreenchange",function(){
   if (inFullscreen) {
   finalMovie.removeAttribute("controls");
   inFullscreen=false;
 }else {
   inFullscreen=true;
 }
});
