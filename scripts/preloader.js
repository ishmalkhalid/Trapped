// script to remove the preloader when user clicks anywhere on the screen, and bring into the page the landing section
var preloader=document.getElementById('preloader');
preloader.addEventListener("click",function(){
  removeLoader();
})

function removeLoader(){
    preloader.style.zIndex="-999";
    document.getElementById('landingSection').style.display="block";

    preloader.style.display="none";
    animateLanding();

    var horrorBgSound=document.getElementById('horrorBgSound');
    horrorBgSound.play();
    horrorBgSound.volume=0.6;

    setTimeout(function(){
        document.getElementById('watchMovieIcon').classList.remove("scaleZero");
        document.getElementById('meetCastIcon').classList.remove("scaleZero");
        document.getElementById('watchMovieIcon').classList.add("scaleNormal");
        document.getElementById('meetCastIcon').classList.add("scaleNormal");
    },1000);
};
